// import Image from "next/image";
// import PopUpWrapper from "../PopUp";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="HeroSection"
      className="min-h-dvh relative mx-auto flex w-full flex-col items-center justify-center px-6 sm:px-10"
    >
      <Image
        src="/cloud1.png"
        alt="Cloud Left Down"
        sizes="100vw"
        width={100}
        height={100}
        draggable={false}
        className="absolute top-[5%] left-[-12%] md:top-[1%] md:left-[1%] w-60 md:w-150"
      ></Image>
      <Image
        src="/cloud2.png"
        alt="Cloud Right Top"
        sizes="100vw"
        width={100}
        height={100}
        draggable={false}
        className="absolute top-[5%] right-[-12%] md:top-[1%] md:right-[1%] w-60 md:w-150"
      ></Image>
      <Image
        src="/cloud3.png"
        alt="Cloud Left Down"
        sizes="100vw"
        width={100}
        height={100}
        draggable={false}
        className="absolute top-[80%] md:top-[65%] left-[-10%] md:left-[5%] w-55 md:w-135"
      ></Image>
      <Image
        src="/cloud4.png"
        alt="Cloud Right Down"
        sizes="100vw"
        width={100}
        height={100}
        draggable={false}
        className="absolute top-[80%] md:top-[65%] right-[-10%] md:right-[5%] w-55 md:w-135"
      ></Image>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 sm:w-200 sm:h-100 md:w-[1600px] md:h-150 bg-white/5 rounded-full blur-3xl -z-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-center font-normal text-white text-sm sm:text-base md:text-lg">
          Selamat Datang di
        </h2>

        <h1 className="mt-3 flex flex-col items-center text-center font-black italic tracking-tight leading-tight">
          <span className="bg-linear-to-r from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] bg-clip-text text-transparent pr-3 xl:whitespace-nowrap text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Program Kreativitas Mahasiswa Center Unsoed
          </span>
          <span className="mt-1 text-white md:mt-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl">
            Information Hub
          </span>
        </h1>
      </div>
    </section>
  );
}
