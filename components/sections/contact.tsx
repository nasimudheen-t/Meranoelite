"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F6F1EB] py-24 md:py-32"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#CCBEB1]/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#CCBEB1]/30 blur-[120px] rounded-full" />

      {/* BIG BACKGROUND TEXT */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <h1
           className="text-[120px] md:text-[220px] font-black leading-none text-[#CCBEB1]/30"
          style={{ fontFamily: "serif" }}
        >
          CONTACT
        </h1>
      </div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-6 md:px-10">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* SMALL LABEL */}
            <span className="uppercase tracking-[0.35em] text-[11px] text-[#997E67] font-semibold block mb-6">
              Get In Touch
            </span>

            {/* HEADING */}
            <h2
              className="text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-black text-[#664930]"
              style={{ fontFamily: "serif" }}
            >
              Let’s Build
              <br />

              <span className="italic font-normal text-[#997E67]">
                Brighter Spaces
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-10 max-w-xl text-[#7A6757] text-lg leading-[1.9]">
              Connect with our premium lighting experts for smart LED
              solutions crafted for luxury homes, commercial projects,
              hospitality spaces, and modern architectural interiors.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-16 space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Visit Showroom",
                  content:
                    "Lumira Lighting Studio\nDubai Design District",
                },
                {
                  icon: Phone,
                  title: "Phone Number",
                  content:
                    "+971 4 123 4567\nMon - Sat / 9AM - 7PM",
                },
                {
                  icon: Mail,
                  title: "Email Address",
                  content:
                    "hello@lumira.com\nsupport@lumira.com",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-5 rounded-[28px] border border-[#CCBEB1]/30 bg-white/40 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(102,73,48,0.08)]"
                  >
                    {/* ICON */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#CCBEB1]/40 transition-all duration-300 group-hover:bg-[#CCBEB1]">
                      <Icon className="h-7 w-7 text-[#664930] transition-colors duration-300 group-hover:text-[#FFF8F2]" />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h4 className="text-[#664930] text-xl font-bold mb-2">
                        {item.title}
                      </h4>

                      <p className="whitespace-pre-line text-[#7A6757] leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* FLOATING CARD */}
            <div className="absolute -top-8 -right-8 hidden lg:block">
              <div className="rounded-[30px] bg-[#CCBEB1]/60 backdrop-blur-xl border border-white/40 px-8 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
                <p className="uppercase tracking-[0.3em] text-[10px] text-[#CCBEB1]/60 mb-3">
                  Premium Support
                </p>

                <h3 className="text-4xl font-black text-[#5F5145]">
                  24/7
                </h3>

                <p className="mt-3 max-w-[180px] text-sm leading-relaxed text-[#7A6757]">
                  Dedicated lighting consultation for every project.
                </p>
              </div>
            </div>

            {/* FORM CONTAINER */}
            <div className="rounded-[40px] border border-[#CCBEB1]/30 bg-white/50 backdrop-blur-2xl p-8 md:p-12 shadow-[0_30px_80px_rgba(102,73,48,0.10)]">
              {/* FORM TITLE */}
              <div className="mb-10">
                <span className="uppercase tracking-[0.3em] text-[11px] text-[#997E67] block mb-4">
                  Contact Form
                </span>

                <h3 className="text-4xl font-black text-[#664930]">
                  Start Your Project
                </h3>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6"
              >
                {/* ROW */}
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="h-16 rounded-2xl border border-[#CCBEB1]/40 bg-[#FFFDFB]/80 px-6 text-[#664930] placeholder:text-[#997E67]/70 outline-none transition-all duration-300 focus:border-[#664930]"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    className="h-16 rounded-2xl border border-[#CCBEB1]/40 bg-[#FFFDFB]/80 px-6 text-[#664930] placeholder:text-[#997E67]/70 outline-none transition-all duration-300 focus:border-[#664930]"
                  />
                </div>

                {/* EMAIL */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-16 w-full rounded-2xl border border-[#CCBEB1]/40 bg-[#FFFDFB]/80 px-6 text-[#664930] placeholder:text-[#997E67]/70 outline-none transition-all duration-300 focus:border-[#664930]"
                />

                {/* SUBJECT */}
                <input
                  type="text"
                  placeholder="Project Subject"
                  className="h-16 w-full rounded-2xl border border-[#CCBEB1]/40 bg-[#FFFDFB]/80 px-6 text-[#664930] placeholder:text-[#997E67]/70 outline-none transition-all duration-300 focus:border-[#664930]"
                />

                {/* TEXTAREA */}
                <textarea
                  rows={6}
                  placeholder="Tell us about your lighting project..."
                  className="w-full resize-none rounded-3xl border border-[#CCBEB1]/40 bg-[#FFFDFB]/80 px-6 py-5 text-[#664930] placeholder:text-[#997E67]/70 outline-none transition-all duration-300 focus:border-[#664930]"
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#664930] py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#BBAA9C]"
                >
                  Send Message

                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}