"use client";

import { motion } from "framer-motion";

export function ProductHero() {
  return (
    <div className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D9B38C]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-[11px] text-[#D9B38C] font-semibold block mb-5"
        >
          Complete Collection
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[90px] font-black leading-[0.95] text-white"
          style={{ fontFamily: "serif" }}
        >
          Our Full <br className="hidden md:block" />
          <span className="italic font-normal text-[#D9B38C]">Catalog</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mt-8 text-white/60 text-lg leading-[1.9]"
        >
          Explore over 250 premium lighting products crafted for modern luxury interiors and architectural environments. Find exactly what you need with our advanced filters.
        </motion.p>
      </div>
    </div>
  );
}
