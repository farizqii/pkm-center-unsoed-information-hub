export default function HeroSection() {
  return (
    <section
      id="HeroSection"
      className="min-h-dvh relative mx-auto flex w-full flex-col items-center justify-center xl:flex-row"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] md:w-[1600px] md:h-[600px] bg-white/5 rounded-full blur-3xl -z-10"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-center font-normal text-white text-[clamp(0.75rem,1.5vw,1rem)]">
          Selamat Datang di
        </h2>

        <h1 className="mt-3 flex flex-col items-center text-center font-black italic tracking-tight text-[clamp(1rem,4vw,3.75rem)] leading-tight">
          <span className="bg-linear-to-r from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] bg-clip-text text-transparent pr-3 xl:whitespace-nowrap text-shadow-4xl text-shadow-black">
            Program Kreativitas Mahasiswa Center Unsoed
          </span>
          <span className="mt-1 text-white md:mt-2">Information Hub</span>
        </h1>
      </div>
    </section>
  );
}
