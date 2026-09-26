import AboutPKM from "../components/home/AboutPKM";
import HeroSection from "../components/home/HeroSection";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-12 sm:gap-16 lg:gap-24">
      <HeroSection />
      <AboutPKM />
    </main>
  );
}
