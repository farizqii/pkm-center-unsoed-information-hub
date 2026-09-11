import Image from "next/image";
import Link from "next/link";
const navigation = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/",
    label: "About PKM",
  },
  {
    href: "/",
    label: "Timeline",
  },
  {
    href: "/",
    label: "Our Team",
  },
  {
    href: "/",
    label: "Information & Resources",
  },
];

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

          <div className="flex flex-wrap gap-7 text-medium font-medium text-slate-600">
            {navigation.map((item) => (
              <Link
                className="hover:text-slate-950"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
