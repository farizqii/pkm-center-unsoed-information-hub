import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-sm">
      <div className="w-full bg-white shadow-lg">
        <div className="flex h-16 items-center justify-between px-5">
          <Link href="/">
            <div className="flex flex-1 items-center gap-3">
              <Image
                src="/brand-logo.png"
                alt="Euqin's Pizzas Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="text-lg text-shadow-md font-black tracking-tight text-black">
                  PKM Center Unsoed
                </span>
                <span className="-mt-2 text-sm text-shadow-md font-normal text-neutral-800">
                  Information Hub
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex item-center gap-1 text-sm font-medium">
              <li>
                <a
                  className="block text-shadow-md px-5 py-2.5 text-black/75 text-base hover:text-black transition-transform"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="block text-shadow-md px-5 py-2.5 text-black/75 text-base hover:text-black transition-transform"
                  href="#"
                >
                  About PKM
                </a>
              </li>
              <li>
                <a
                  className="block text-shadow-md px-5 py-2.5 text-black/75 text-base hover:text-black transition-transform"
                  href="#"
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  className="block text-shadow-md px-5 py-2.5 text-black/75 text-base hover:text-black transition-transform"
                  href="#"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  className="block text-shadow-md px-5 py-2.5 text-black/75 text-base hover:text-black transition-transform"
                  href="#"
                >
                  Information & Resources
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
