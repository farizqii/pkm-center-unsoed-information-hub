export default function OurTeam() {
  return (
    <section
      id="HeroSection"
      className="min-h-dvh relative mx-auto flex w-full flex-col items-center justify-center px-6 sm:px-10"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] sm:w-[800px] sm:h-[400px] md:w-[1600px] md:h-[600px] bg-white/5 rounded-full blur-3xl -z-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="mt-3 flex flex-col items-center text-center font-black italic tracking-tight leading-tight">
          <span className="bg-linear-to-r from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] bg-clip-text text-transparent pr-3 xl:whitespace-nowrap text-shadow-4xl text-shadow-black text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-9xl">
            Coming Very Very Soon, ;)
          </span>
        </h1>
      </div>
    </section>
  );
}
