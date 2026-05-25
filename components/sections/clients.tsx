"use client";

import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/lib/data";

export function Clients() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative py-20 overflow-hidden bg-[#F6F1EB] border-y border-[#CCBEB1]/20">
      
      {/* TOP CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 text-center">
        <p className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-[#997E67]">
          Trusted By Premium Interior Brands
        </p>
      </div>

      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F6F1EB] to-transparent z-10" />

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F6F1EB] to-transparent z-10" />

      {/* LOGO SLIDER */}
      <div className="relative flex w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-12 md:px-24"
            >
              <span className="text-2xl md:text-3xl font-black tracking-wide text-[#664930]/40 hover:text-[#664930] transition-all duration-300">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#FFDBBB]/20 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </section>
  );
}