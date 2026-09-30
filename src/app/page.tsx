import AboutPKM from "../components/home/AboutPKM";
import HeroSection from "../components/home/HeroSection";
import PKMCategory from "../components/home/PKMCategory";
import PopUpWrapper from "../components/PopUp";
// import Image from "next/image";

export const metadata = {
  title: "Home - PKM Center Unsoed 2026",
};

export default function Home() {
  return (
    <main className="relative flex flex-col justify-between overflow-hidden">
      <HeroSection />

      <PopUpWrapper>
        <AboutPKM />
      </PopUpWrapper>

      <PopUpWrapper>
        <PKMCategory />
      </PopUpWrapper>
    </main>
  );
}
