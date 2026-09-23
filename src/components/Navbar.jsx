"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/", label: "About PKM" },
  { href: "/our-team", label: "Our Team" },
  { href: "/information", label: "Information & Resources" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-sm">
      <div className="w-full bg-linear-to-b from-[#001133] via-[#002266] to-[#003399] border-b border-white/10 shadow-md shadow-white">
        <div className="flex h-16 items-center justify-between px-5 xl:px-55">
          {/* Logo */}
          <Link href="/">
            <div className="flex flex-1 items-center gap-3">
              <Image
                src="/logo-pkm-center.png"
                alt="Euqin's Pizzas Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="text-lg text-shadow-md font-bold tracking-tight text-white">
                  PKM Center Unsoed
                </span>
                <span className="-mt-2 text-sm text-shadow-md font-medium text-white">
                  Information Hub
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex md:flex-wrap md:gap-15 text-md font-semibold text-white">
            {navigation.map((item) =>
              item.id ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="cursor-pointer hover:text-white/80 transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-white/80 transition-colors"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Mobile 3-Stripe */}
          <button
            type="button"
            className="cursor-pointer p-2 text-white hover:text-white/80 lg:hidden focus:outline-none"
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
          <nav className="border-t border-white bg-[#003399] px-5 py-4 shadow-md lg:hidden">
            <div className="flex flex-col gap-4 text-medium font-medium text-white">
              {navigation.map((item) =>
                item.id ? (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="cursor-pointer text-left hover:text-white/80 transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-white/80  transition-colors"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
