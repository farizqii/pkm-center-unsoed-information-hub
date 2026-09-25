import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "../components/Navbar.jsx";
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
        className={`${montserrat.className} min-h-screen border-b-4 bg-[#02143C] font-normal text-white`}
      >
        <Navbar />
        <main className="relative px-8 pb-15 pt-8">
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
          {children}
        </main>
      </body>
    </html>
  );
}
