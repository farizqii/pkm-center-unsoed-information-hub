"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const navigation = [
  { href: "/#HeroSection", label: "Home" },
  { href: "/#AboutPKM", label: "About PKM" },
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
          <Link href="/#HeroSection">
            <div className="flex flex-1 items-center gap-3 hover:scale-105 transition-transform ease-in-out">
              <Image
                src="/logo-pkm-center.png"
                alt="PKM Center Unsoed"
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
                  className="cursor-pointer hover:text-white/80 hover:scale-105 transition-transform ease-in-out"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-white/80 hover:scale-105 transition-transform ease-in-out"
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
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                // "X" Close Icon
                <motion.svg
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
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
                </motion.svg>
              ) : (
                // 3-Stripe Hamburger Icon
                <motion.svg
                  key="hamburger"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
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
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-white/10 bg-[#003399] px-5 shadow-md lg:hidden"
            >
              <div className="flex flex-col gap-4 py-4 text-medium font-medium text-white">
                {navigation.map((item) =>
                  item.id ? (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className="cursor-pointer text-left hover:text-white/80 hover:scale-101 transition-transform ease-in-out"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-white/80 hover:scale-101 transition-transform ease-in-out"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
