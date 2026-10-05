// Zero-dependency Wolt BlurHash decoder
const digitCharacters = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "#", "$", "%", "*", "+", ",", "-", ".", "/", ":", ";", "=", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"
];

function decode83(str, from, to) {
  let value = 0;
  for (let i = from; i < to; i++) {
    const c = str[i];
    const index = digitCharacters.indexOf(c);
    if (index !== -1) {
      value = value * 83 + index;
    }
  }
  return value;
}

function sRGBToLinear(value) {
  const v = value / 255;
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

function linearTosRGB(value) {
  const v = Math.max(0, Math.min(1, value));
  return v <= 0.0031308 ? Math.round(v * 12.92 * 255 + 0.5) : Math.round((1.055 * Math.pow(v, 1 / 2.4) - 0.055) * 255 + 0.5);
}

function signPow(val, exp) {
  return Math.sign(val) * Math.pow(Math.abs(val), exp);
}

function decodeDC(value) {
  const intR = value >> 16;
  const intG = (value >> 8) & 255;
  const intB = value & 255;
  return [sRGBToLinear(intR), sRGBToLinear(intG), sRGBToLinear(intB)];
}

function decodeAC(value, maximumValue) {
  const quantR = Math.floor(value / (19 * 19));
  const quantG = Math.floor(value / 19) % 19;
  const quantB = value % 19;
  return [
    signPow((quantR - 9) / 9, 2.0) * maximumValue,
    signPow((quantG - 9) / 9, 2.0) * maximumValue,
    signPow((quantB - 9) / 9, 2.0) * maximumValue,
  ];
}

export function decodeBlurHash(blurHash, width, height, punch = 1) {
  if (!blurHash || blurHash.length < 6) return null;

  const sizeFlag = decode83(blurHash, 0, 1);
  const numY = Math.floor(sizeFlag / 9) + 1;
  const numX = (sizeFlag % 9) + 1;

  if (blurHash.length !== 4 + 2 * numX * numY) {
    return null;
  }

  const quantisedMaximumValue = decode83(blurHash, 1, 2);
  const maximumValue = (quantisedMaximumValue + 1) / 166;

  const colors = new Array(numX * numY);
  colors[0] = decodeDC(decode83(blurHash, 2, 6));

  for (let i = 1; i < numX * numY; i++) {
    const value = decode83(blurHash, 4 + i * 2, 6 + i * 2);
    colors[i] = decodeAC(value, maximumValue * punch);
  }

  const bytesPerRow = width * 4;
  const pixels = new Uint8ClampedArray(bytesPerRow * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0;
      let g = 0;
      let b = 0;

      for (let j = 0; j < numY; j++) {
        for (let i = 0; i < numX; i++) {
          const basis = Math.cos((Math.PI * x * i) / width) * Math.cos((Math.PI * y * j) / height);
          const color = colors[i + j * numX];
          r += color[0] * basis;
          g += color[1] * basis;
          b += color[2] * basis;
        }
      }

      const pixelIndex = 4 * x + y * bytesPerRow;
      pixels[pixelIndex] = linearTosRGB(r);
      pixels[pixelIndex + 1] = linearTosRGB(g);
      pixels[pixelIndex + 2] = linearTosRGB(b);
      pixels[pixelIndex + 3] = 255;
    }
  }

  return pixels;
}
