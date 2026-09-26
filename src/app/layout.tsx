import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "PKM Center Unsoed Information Hub 2026",
  description:
    "Aplikasi Information Hub PKM Center Unsoed adalah sebuah website informasional untuk memberikan wawasan yang lebih lengkap kepada KBMU.",
  icons: "/logo-pkm-center.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${montserrat.className} min-h-screen bg-[#02143C] font-normal text-white`}
      >
        <Navbar />

        {/* Global Website Background Glass Elements */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
          {/* Mobile / tablet background image */}
          <Image
            src="/glassesLeft.png"
            alt="Middle Glass Element"
            fill
            priority
            draggable={false}
            sizes="100vw"
            className="w-full h-full object-cover object-center scale-125 opacity-80 lg:opacity-15"
          />

          {/* Desktop left glass */}
          <Image
            src="/glassesLeft.png"
            alt="Left Glass Element"
            width={460}
            height={1080}
            priority
            draggable={false}
            sizes="(max-width: 768px) 35vw, 400px"
            className="hidden lg:block absolute -left-16 sm:-left-20 lg:left-0 top-0 h-full w-auto max-w-70 sm:max-w-none object-cover object-left select-none"
          />

          {/* Desktop right glass */}
          <Image
            src="/glassesRight.png"
            alt="Right Glass Element"
            width={460}
            height={1080}
            priority
            draggable={false}
            sizes="(max-width: 768px) 35vw, 400px"
            className="hidden lg:block absolute -right-16 sm:-right-20 lg:right-0 top-0 h-full w-auto max-w-70 sm:max-w-none object-cover object-right select-none"
          />
        </div>

        <div
          id="app"
          data-v-app
          className="relative z-0 flex min-h-screen flex-col justify-between"
        >
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
