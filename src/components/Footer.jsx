import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      {/* Footer Card with rounded top */}
      <div className="w-full rounded-t-[2.5rem] lg:rounded-t-[3.5rem] border-t border-white/10 bg-[#001133] px-6 py-10 sm:px-12 sm:py-12 lg:px-20 lg:py-14 shadow-2xl shadow-white">
        <div className="mx-auto max-w-7xl">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center text-center gap-10 lg:flex-row lg:items-start lg:text-left lg:justify-between lg:gap-12">
            {/* Column 1: Brand Logo & Title */}
            <div className="flex items-center justify-center lg:justify-start gap-4 lg:w-1/3">
              <div className="flex aspect-square h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-1.5 shadow-md">
                <Image
                  src="/logo-pkm-center.png"
                  alt="PKM Center Unsoed"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-lg text-shadow-md font-bold tracking-tight text-white">
                  PKM Center Unsoed
                </span>
                <span className="-mt-2 text-sm text-shadow-md font-medium text-white">
                  Information Hub
                </span>
              </div>
            </div>

            {/* Column 2: Address & Contact Information */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-3 text-white lg:w-5/12">
              <h3 className="text-base sm:text-lg font-bold leading-snug">
                Universitas Jenderal Soedirman,
                <br />
                Purwokerto
              </h3>

              <p className="text-xs sm:text-sm font-light leading-relaxed text-white">
                Jl. Prof. Dr. HR Boenyamin No. 708,
                <br />
                Grendeng, Kecamatan Purwokerto Utara,
                <br />
                Kabupaten Banyumas, Jawa Tengah 53121
              </p>

              <div className="mt-1">
                <h4 className="text-xs sm:text-sm font-bold text-white">
                  Hubungi Kami
                </h4>
                <p className="text-xs sm:text-sm font-light text-white">
                  +62 831-1234-1234 (Nama CP)
                </p>
              </div>
            </div>

            {/* Column 3: Social Media */}
            <div className="flex flex-col items-center lg:items-end gap-3 lg:w-1/4">
              <h3 className="text-base sm:text-lg font-bold text-white">
                Sosial Media
              </h3>
              <div className="flex items-center justify-center gap-3">
                {/* Instagram */}
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram PKM Center Unsoed"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#001133] transition-all hover:scale-110 hover:bg-white shadow"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>

                {/* YouTube */}
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube PKM Center Unsoed"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#001133] transition-all hover:scale-110 hover:bg-white shadow"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>

                {/* TikTok / Video */}
                <Link
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok PKM Center Unsoed"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#001133] transition-all hover:scale-110 hover:bg-white shadow"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </Link>

                {/* Email / Web */}
                <Link
                  href="mailto:pkmcenter@unsoed.ac.id"
                  aria-label="Email PKM Center Unsoed"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#001133] transition-all hover:scale-110 hover:bg-white shadow"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-10 border-t border-white/10 pt-6 text-center lg:text-left">
            <p className="text-xs font-light text-white/60">
              &copy; {new Date().getFullYear()} PKM Center Unsoed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
