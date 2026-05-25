"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-[#F6F1EB] py-24 md:py-32"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFDBBB]/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* TOP CONTENT */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          {/* SMALL TEXT */}
          <span className="uppercase tracking-[0.3em] text-sm text-[#997E67] font-semibold block mb-5">
            Testimonials
          </span>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#664930] mb-6">
            What Our Clients <br />

            <span className="text-[#997E67]">
              Say About Us
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#7A6757] text-lg leading-relaxed">
            Elegant lighting experiences crafted for luxury
            interiors, modern living, and architectural beauty.
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
              <div className="group relative h-full overflow-hidden rounded-[32px] border border-[#CCBEB1]/20 bg-white/70 backdrop-blur-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(102,73,48,0.12)]">

                {/* TOP LINE */}
                <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#997E67] to-transparent opacity-30" />

                {/* STARS */}
                <div className="flex items-center gap-1 mb-6 text-[#997E67]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                    />
                  ))}
                </div>

                {/* QUOTE ICON */}
                <Quote className="w-12 h-12 text-[#CCBEB1]/40 mb-5" />

                {/* TEXT */}
                <p className="text-[#7A6757] leading-relaxed mb-10 text-base">
                  "{testimonial.quote}"
                </p>

                {/* USER */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#CCBEB1]/20">

                  {/* IMAGE */}
                  <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-[#FFDBBB]">

                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* INFO */}
                  <div>
                    <h4 className="text-[#664930] font-bold text-lg">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-[#997E67]">
                      {testimonial.role},{" "}
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* HOVER LIGHT */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,219,187,0.12),transparent_60%)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}