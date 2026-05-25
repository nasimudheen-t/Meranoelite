"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
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
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* NAVBAR */}
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-6 md:px-8 transition-all duration-300",
            isScrolled
              ? "bg-[#CCBEB1]/95 backdrop-blur-xl border-white/10 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
              : "bg-[#CCBEB1]/80 backdrop-blur-lg border-white/10 py-5"
          )}
        >

          {/* LOGO */}
          <Link
            href="#home"
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105">
              <Lightbulb className="w-5 h-5 text-[#2B2118] fill-[#2B2118]/10" />
            </div>

            <span className="text-2xl font-black tracking-wide text-[#2B2118]">
              Lumira
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">

            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="relative text-[15px] font-medium text-[#3D3128] hover:text-black transition-all duration-300 group"
                  >
                    {link.name}

                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <Link
              href="#contact"
              className="px-6 py-3 rounded-full bg-[#2B2118] text-white text-sm font-semibold hover:bg-black transition-all duration-300 hover:scale-105"
            >
              Get Quote
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#2B2118]"
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
              className="md:hidden mt-4 overflow-hidden rounded-3xl border border-white/10 bg-[#CCBEB1]/95 backdrop-blur-xl"
            >
              <ul className="flex flex-col p-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-4 text-lg font-medium text-[#3D3128] hover:text-black transition-colors border-b border-black/5"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

                {/* MOBILE BUTTON */}
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-6 flex items-center justify-center rounded-full bg-[#2B2118] py-4 text-white font-semibold"
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