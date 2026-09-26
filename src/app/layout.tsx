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
  title: "PKM Center Unsoed Information Hub",
  description:
    "Aplikasi Information Hub PKM Center Unsoed adalah sebuah website informasional...",
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
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <Image
            src="/glassesLeft.png"
            alt=""
            width={460}
            height={1080}
            priority
            sizes="(max-width: 768px) 35vw, 400px"
            className="absolute -left-16 sm:-left-20 lg:left-0 top-0 h-full w-auto max-w-[280px] sm:max-w-none object-cover object-left"
          />
          <Image
            src="/glassesRight.png"
            alt=""
            width={460}
            height={1080}
            priority
            sizes="(max-width: 768px) 35vw, 400px"
            className="absolute -right-16 sm:-right-20 lg:right-0 top-0 h-full w-auto max-w-[280px] sm:max-w-none object-cover object-right"
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
