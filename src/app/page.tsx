import AboutPKM from "../components/home/AboutPKM";
import HeroSection from "../components/home/HeroSection";
import PKMCategory from "../components/home/PKMCategory";
import PopUpWrapper from "../components/PopUp";

export const metadata = {
  title: "Home - PKM Center Unsoed 2026",
};

export default function Home() {
  return (
    <main className="relative flex flex-col justify-between overflow-hidden">
      <PopUpWrapper>
        <HeroSection />
      </PopUpWrapper>

      <PopUpWrapper delay={0.1}>
        <AboutPKM />
      </PopUpWrapper>

      <PopUpWrapper delay={0.2}>
        <PKMCategory />
      </PopUpWrapper>
    </main>
  );
}
