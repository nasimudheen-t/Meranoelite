"use client";

import { motion } from "framer-motion";
import { COMPANY_STATS } from "@/lib/data";

export function Stats() {
  return (
    <section className="relative z-20 -mt-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">

          {COMPANY_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              {/* CARD */}
              <div className="group relative overflow-hidden rounded-[30px] border border-[#CCBEB1]/15 bg-[#FFF8F2]/70 backdrop-blur-2xl p-8 text-center shadow-[0_15px_50px_rgba(102,73,48,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(102,73,48,0.14)]">

                {/* TOP GLOW */}
                <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#997E67] to-transparent opacity-30" />

                {/* NUMBER */}
                <div className="mb-3 flex items-end justify-center gap-1">

                  <span className="text-4xl md:text-5xl font-black tracking-tight text-[#664930] transition-all duration-300 group-hover:text-[#997E67]">
                    {stat.value}
                  </span>

                  <span className="mb-1 text-2xl font-bold text-[#997E67]">
                    {stat.suffix}
                  </span>
                </div>

                {/* LABEL */}
                <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#7A6757] font-semibold leading-relaxed">
                  {stat.label}
                </p>

                {/* HOVER LIGHT */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,219,187,0.18),transparent_60%)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}