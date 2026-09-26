import AboutPKM from "../components/home/AboutPKM";
import HeroSection from "../components/home/HeroSection";
import PKMCategory from "../components/home/PKMCategory";

export const metadata = {
  title: "Home - PKM Center Unsoed 2026",
};

export default function Home() {
  return (
    <main className="relative flex flex-col justify-between">
      <HeroSection />
      <AboutPKM />
      <PKMCategory />
    </main>
  );
}
