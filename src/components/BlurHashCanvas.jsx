"use client";

import { useEffect, useRef } from "react";
import { decodeBlurHash } from "../utils/blurhash";

export default function BlurHashCanvas({
  hash,
  width = 32,
  height = 32,
  punch = 1,
  className = "",
  style = {},
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !hash) return;
    try {
      const pixels = decodeBlurHash(hash, width, height, punch);
      if (!pixels) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const imageData = ctx.createImageData(width, height);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
    } catch {
      // Ignore decode errors gracefully
    }
  }, [hash, width, height, punch]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        ...style,
      }}
    />
  );
}
