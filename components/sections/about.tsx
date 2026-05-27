"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  Zap,
  Layers3,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    title: "Luxury Interior Lighting",
    icon: Sparkles,
  },
  {
    title: "Energy Efficient Systems",
    icon: Zap,
  },
  {
    title: "Smart Automation",
    icon: Layers3,
  },
  {
    title: "Architectural Installations",
    icon: ShieldCheck,
  },
];

const stats = [
  { value: "500+", label: "Projects" },
  { value: "12+", label: "Years" },
  { value: "4.9★", label: "Rating" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#050505] py-28">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D9B38C]/10 blur-[140px] rounded-full" />

      {/* BIG TYPOGRAPHY */}
      <div className="absolute right-[-100px] top-10 pointer-events-none select-none">
        <h1
          className="text-[180px] md:text-[260px] font-black leading-none text-white/[0.03]"
          style={{ fontFamily: "serif" }}
        >
          LIGHT
        </h1>
      </div>

      <div className="max-w-[1450px] mx-auto px-6 md:px-10 relative z-10">
        {/* TOP */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="uppercase tracking-[0.35em] text-[#D9B38C] text-[11px] mb-6"
            >
              About Lumira Studio
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-[92px] leading-[0.95] font-black text-white"
              style={{ fontFamily: "serif" }}
            >
              Crafted
              <br />
              <span className="italic font-normal text-[#D9B38C]">
                with Light.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-10 max-w-2xl text-white/70 text-lg leading-[1.9]"
            >
              We design immersive premium LED lighting experiences for luxury
              interiors, smart homes, hospitality spaces, and modern
              architectural environments with timeless aesthetics and advanced
              technology.
            </motion.p>

            {/* CTA */}
            {/* COMPANY DESCRIPTION */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              viewport={{ once: true }}
              className="mt-12 max-w-2xl"
            >
              <p className="text-white/70 text-lg leading-[1.9]">
                At Merano Elite Trading LLC, we specialize in LED lighting
                design, supply, and installation solutions for residential,
                commercial, and large-scale projects. We also provide premium
                furniture and customized interior solutions for villas, schools,
                offices, retail, and hospitality spaces.
              </p>

              <p className="text-white/70 text-lg leading-[1.9] mt-6">
                With a focus on quality, innovation, and modern design, we
                deliver smart, stylish, and energy-efficient solutions that
                transform spaces with elegance and functionality. From concept
                to completion, our team is committed to excellence, reliability,
                and customer satisfaction.
              </p>
            </motion.div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mt-16">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl p-6"
                >
                  <h3 className="text-4xl font-black text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 uppercase tracking-[0.2em] text-[11px] text-[#D9B38C]">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE AREA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* MAIN IMAGE */}
            <div className="relative h-[720px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/images/interior-1.png"
                alt="Luxury lighting interior"
                fill
                quality={100}
                priority
                className="object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* FLOATING CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-white text-xl font-semibold">
                        Signature Smart Collection
                      </p>

                      <p className="text-white/70 mt-2 leading-relaxed text-sm">
                        Intelligent lighting systems crafted for luxury homes,
                        hotels, villas, and premium commercial interiors.
                      </p>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                      <Sparkles className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* FLOATING SMALL CARD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -left-10 top-10 hidden lg:block"
            >
              <div className="bg-[#111111] border border-white/10 text-white rounded-3xl p-7 w-[240px] shadow-2xl">
                <p className="uppercase tracking-[0.3em] text-[10px] text-[#D9B38C]/70 mb-3">
                  Since
                </p>

                <h3 className="text-6xl font-black leading-none">2024</h3>

                <p className="mt-4 text-sm text-white/60 leading-relaxed">
                  Delivering modern lighting experiences with innovation and
                  timeless elegance.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FEATURE SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-28">
          {features.map(({ title, icon: Icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9B38C]/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#D9B38C] flex items-center justify-center mb-8">
                  <Icon className="text-black w-6 h-6" />
                </div>

                <h3 className="text-white text-xl font-semibold leading-snug">
                  {title}
                </h3>

                <p className="mt-4 text-white/60 leading-relaxed text-sm">
                  Premium quality lighting systems engineered with luxury
                  aesthetics and smart performance.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
