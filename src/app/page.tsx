import Image from "next/image";

import AboutPKM from "../components/home/AboutPKM";
import HeroSection from "../components/home/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col space-y-20">
      <HeroSection />
      <AboutPKM />
    </div>
  );
}
