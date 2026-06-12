"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "@/public/images/logo.jpeg";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4" : "py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* NAVBAR */}
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-6 md:px-8 transition-all duration-300",
            isScrolled
              ? "bg-[#0D0D0D]/90 backdrop-blur-2xl border-white/10 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              : "bg-[#111111]/70 backdrop-blur-xl border-white/10 py-5",
          )}
        >
          {/* LOGO */}

          <Link
            href="/"
            className="flex items-center gap-4 transition-all duration-300"
          >
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-[#D9B38C]/10 border border-[#D9B38C]/20">
              <Image
                src={Logo}
                alt="Meranoelite Logo"
                width={56}
                height={56}
                className="h-full w-full object-contain p-1"
                priority
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold tracking-[0.08em] text-white">
                Meranoelite
              </span>

              <span className="mt-2 text-[10px] uppercase tracking-[0.4em] text-[#D9B38C]">
                Elegant Lighting • Stylish Furniture
              </span>
            </div>
          </Link>
          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="relative text-[15px] font-medium text-white/70 hover:text-white transition-all duration-300 group"
                  >
                    {link.name}

                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D9B38C] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#D9B38C] text-black text-sm font-semibold hover:bg-white transition-all duration-300 hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-4 overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D0D]/95 backdrop-blur-2xl"
            >
              <ul className="flex flex-col p-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-4 text-lg font-medium text-white/75 hover:text-white transition-colors border-b border-white/5"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

                {/* MOBILE BUTTON */}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-6 flex items-center justify-center rounded-full bg-[#D9B38C] py-4 text-black font-semibold"
                >
                  Get Quote
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
