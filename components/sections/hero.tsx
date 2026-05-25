"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0a0a08]"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <img
          src="/images/interior-1.png"
          alt="Luxury lighting"
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/10" />
        {/* SOFT LEFT GRADIENT */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" /> */}
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center min-h-screen px-8 md:px-16 lg:px-24">
        <div className="max-w-[620px]">
          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#c9a96e]" />
            <span className="text-white/70 uppercase tracking-[0.25em] text-[11px]">
              Premium LED Solutions
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-white text-[48px] sm:text-[62px] lg:text-[78px] leading-[0.95] font-black tracking-[-0.04em] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Lighting
            <br />
            Crafted For
            <br />
            <span className="text-[#d6b278] italic">Modern Living</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="text-white/75 text-[15px] leading-[1.9] max-w-[520px] mb-10"
          >
            Transform interiors with elegant smart lighting designed for luxury
            homes, modern architecture, and premium spaces.
          </motion.p>

          {/* BUTTON */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="bg-[#c9a96e] hover:bg-[#d6b278] text-black px-8 py-[14px] rounded-full text-[12px] uppercase tracking-[0.2em] font-semibold transition-all duration-300"
          >
           <Link href="#products"> Explore Collection</Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
