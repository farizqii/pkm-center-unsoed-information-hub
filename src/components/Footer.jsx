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
                  href="https://www.instagram.com/pkmcenterunsoed_/"
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

                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/company/pkm-center-unsoed/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn PKM Center Unsoed"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#001133] transition-all hover:scale-110 hover:bg-white shadow"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>

                {/* Whatsapp */}
                <Link
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok PKM Center Unsoed"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#001133] transition-all hover:scale-110 hover:bg-white shadow"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.573-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.826 0-3.536-.484-5.025-1.332l-.36-.207-3.738.98.997-3.642-.235-.374a10.02 10.02 0 01-1.532-5.385c0-5.523 4.488-10.01 10.012-10.01 2.674 0 5.187 1.041 7.078 2.932 1.892 1.892 2.933 4.405 2.933 7.08 0 5.524-4.488 10.011-10.01 10.011m8.486-18.497A11.93 11.93 0 0012.051 0C5.408 0 .01 5.398.01 12.041a11.937 11.937 0 001.621 6.002L0 24l6.102-1.6c1.827.997 3.896 1.523 6.003 1.523 6.643 0 12.041-5.398 12.041-12.041 0-3.216-1.252-6.241-3.522-8.514" />
                  </svg>
                </Link>

                {/* Email*/}
                <Link
                  href="https://mail.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
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
