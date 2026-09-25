import Image from "next/image";

import AboutPKM from "../components/home/AboutPKM";
import HeroSection from "../components/home/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col -space-y-15 xl:-space-y-50">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/glassesLeft.png"
          alt="glassLeft"
          width={400}
          height={400}
          sizes="(max-width: 768px) 50vw, 400px"
          className="absolute -left-30 top-0 h-auto w-1/2 lg:left-0 lg:w-100"
        />
        <Image
          src="/glassesRight.png"
          alt="glassRight"
          width={400}
          height={400}
          sizes="(max-width: 768px) 50vw, 400px"
          className="absolute -right-30 top-0 h-auto w-1/2 lg:right-0 lg:w-100"
        />
      </div>
      <HeroSection />
      <AboutPKM />
    </div>
  );
}
