export default function HeroSection() {
  return (
    <section
      id="HeroSection"
      className="min-h-dvh relative mx-auto flex w-full flex-col items-center justify-center px-4 py-20 sm:px-6 xl:flex-row lg:px-8"
    >
      <div className="flex w-full max-w-7xl flex-col items-center text-center">
        <h1 className="font-normal italic text-white text-[clamp(1rem,4vw,3.75rem)">
          Selamat Datang di
        </h1>

        <h2 className="mt-3 flex flex-col items-center text-center font-black italic tracking-tight text-[clamp(1rem,4vw,3.75rem)] leading-tight">
          <span className="bg-linear-to-r from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] bg-clip-text text-transparent whitespace-nowrap pr-3 drop-shadow-[0_3px_3px_rgba(255,255,255,0.5)]">
            Program Kreativitas Mahasiswa Center Unsoed
          </span>
          <span className="mt-1 text-white md:mt-2">Information Hub</span>
        </h2>
      </div>
    </section>
  );
}
