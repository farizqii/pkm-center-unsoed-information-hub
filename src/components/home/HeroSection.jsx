export default function HeroSection() {
  return (
    <section
      id="HeroSection"
      className="relative mx-auto flex min-h-screen w-full flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="flex w-full max-w-7xl flex-col items-center text-center">
        <h1 className="text-xl font-normal text-white sm:text-2xl md:text-3xl lg:text-4xl">
          Selamat Datang di
        </h1>

        <h2 className="mt-3 flex flex-col items-center text-center font-black italic tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[4rem] leading-tight">
          <span className="bg-linear-to-r from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] bg-clip-text text-transparent lg:whitespace-nowrap">
            Program Kreativitas Mahasiswa Center Unsoed
          </span>
          <span className="mt-1 text-white md:mt-2">Information Hub</span>
        </h2>
      </div>
    </section>
  );
}
