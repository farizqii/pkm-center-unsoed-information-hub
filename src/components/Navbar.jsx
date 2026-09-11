"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/", label: "About PKM" },
  { href: "/", label: "Timeline" },
  { href: "/", label: "Our Team" },
  { href: "/", label: "Information & Resources" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-sm">
      <div className="w-full bg-white shadow-lg">
        <div className="flex h-16 items-center justify-between px-5">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex md:flex-wrap md:gap-7 text-medium font-medium text-slate-600">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-slate-950 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile 3-Stripe */}
          <button
            type="button"
            className="p-2 text-slate-700 hover:text-black lg:hidden focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              // "X" Close Icon
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // 3-Stripe Hamburger Icon
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <nav className="border-t border-slate-100 bg-white px-5 py-4 shadow-md lg:hidden">
            <div className="flex flex-col gap-4 text-medium font-medium text-slate-600">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-slate-950 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
