import "./globals.css";
import Navbar from "../components/Navbar.jsx";

export const metadata = {
  title: "PKM Center Unsoed Information Hub",
  description:
    "Aplikasi Information Hub PKM Center Unsoed adalah sebuah website informasional tentang Program Kreativitas Mahasiswa serta company profile interaktif kepada tim pengelola PKM Center Unsoed sendiri. Tujuan aplikasi ini digunakan untuk memberikan wawasan yang lebih lengkap tentang Program Kreativitas Mahasiswa kepada mahasiswa/i Unsoed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen border-b-4 bg-white font-normal text-charcoal">
        <Navbar />
        <main className="px-8 pb-15 pt-8">{children}</main>
      </body>
    </html>
  );
}
