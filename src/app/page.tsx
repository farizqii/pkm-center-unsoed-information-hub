import AboutPKM from "../components/home/AboutPKM";
import HeroSection from "../components/home/HeroSection";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-between">
      <HeroSection />
      <AboutPKM />
    </main>
  );
}
