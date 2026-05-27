"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 md:py-32">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D9B38C]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* TOP CONTENT */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          {/* SMALL TEXT */}
          <span className="uppercase tracking-[0.35em] text-sm text-[#D9B38C] font-semibold block mb-5">
            Testimonials
          </span>

          {/* TITLE */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-6"
            style={{ fontFamily: "serif" }}
          >
            What Our Clients <br />

            <span className="italic font-normal text-[#D9B38C]">
              Say About Us
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/60 text-lg leading-relaxed">
            Premium lighting experiences crafted for luxury interiors,
            smart living, and modern architectural elegance.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              {/* CARD */}
              <div className="group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#D9B38C]/20 hover:bg-white/[0.05]">

                {/* TOP LINE */}
                <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#D9B38C] to-transparent opacity-40" />

                {/* STARS */}
                <div className="flex items-center gap-1 mb-6 text-[#D9B38C]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                    />
                  ))}
                </div>

                {/* QUOTE ICON */}
                <Quote className="w-12 h-12 text-white/10 mb-5" />

                {/* TEXT */}
                <p className="text-white/65 leading-[1.9] mb-10 text-base">
                  "{testimonial.quote}"
                </p>

                {/* USER */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">

                  {/* IMAGE */}
                  <div className="relative w-14 h-14 overflow-hidden rounded-full border border-[#D9B38C]/40">

                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* INFO */}
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-[#D9B38C]/70">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(217,179,140,0.08),transparent_60%)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}