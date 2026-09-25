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
        <main className="relative px-8 pb-15 pt-8">{children}</main>
      </body>
    </html>
  );
}
