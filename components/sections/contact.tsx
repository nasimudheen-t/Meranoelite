"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-24 md:py-32"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D9B38C]/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#D9B38C]/10 blur-[120px] rounded-full" />

      {/* BIG BACKGROUND TEXT */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <h1
          className="text-[120px] md:text-[220px] font-black leading-none text-white/[0.03]"
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
            <span className="uppercase tracking-[0.35em] text-[11px] text-[#D9B38C] font-semibold block mb-6">
              Get In Touch
            </span>

            {/* HEADING */}
            <h2
              className="text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-black text-white"
              style={{ fontFamily: "serif" }}
            >
              Let’s Build
              <br />
              <span className="italic font-normal text-[#D9B38C]">
                Brighter Spaces
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-10 max-w-xl text-white/60 text-lg leading-[1.9]">
              Connect with our premium lighting experts for smart LED solutions
              crafted for luxury homes, hospitality spaces, and modern
              architectural interiors.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-16 space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Visit Showroom",
                  content: "Meranoelite Lighting Studio\nDubai Design District",
                },
                {
                  icon: Phone,
                  title: "Phone Number",
                  content: "+971507055644",
                },
                {
                  icon: Mail,
                  title: "Email Address",
                  emails: [
                    "sulaiman@meranoelite.com",
                    "navas@meranoelite.com",
                    "sales@meranoelite.com",
                    "sinfo@meranoelite.com",
                    "accounts@meranoelite.com",
                    "purchase@meranoelite.com",
                  ],
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
                    className="group flex items-start gap-5 rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9B38C]/20"
                  >
                    {/* ICON */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D9B38C]/10 border border-[#D9B38C]/20 transition-all duration-300 group-hover:bg-[#D9B38C]">
                      <Icon className="h-7 w-7 text-[#D9B38C] transition-colors duration-300 group-hover:text-black" />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h4 className="text-white text-xl font-semibold mb-2">
                        {item.title}
                      </h4>

                      {item.emails ? (
                        <div className="space-y-1">
                          {item.emails.map((email, index) => (
                            <a
                              key={index}
                              href={`mailto:${email}`}
                              className="block text-sm text-white/60 hover:text-[#D9B38C] transition-colors"
                            >
                              {email}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="whitespace-pre-line text-white/60 leading-relaxed">
                          {item.content}
                        </p>
                      )}
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
              <div className="rounded-[30px] bg-[#111111]/90 backdrop-blur-xl border border-white/10 px-8 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <p className="uppercase tracking-[0.3em] text-[10px] text-[#D9B38C]/70 mb-3">
                  Premium Support
                </p>

                <h3 className="text-4xl font-black text-white">24/7</h3>

                <p className="mt-3 max-w-[180px] text-sm leading-relaxed text-white/55">
                  Dedicated lighting consultation for every project.
                </p>
              </div>
            </div>

            {/* FORM CONTAINER */}
            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              {/* FORM TITLE */}
              <div className="mb-10">
                <span className="uppercase tracking-[0.3em] text-[11px] text-[#D9B38C] block mb-4">
                  Contact Form
                </span>

                <h3 className="text-4xl font-black text-white">
                  Start Your Project
                </h3>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                {/* ROW */}
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="h-16 rounded-2xl border border-white/10 bg-white/[0.04] px-6 text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-[#D9B38C]"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    className="h-16 rounded-2xl border border-white/10 bg-white/[0.04] px-6 text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-[#D9B38C]"
                  />
                </div>

                {/* EMAIL */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-16 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-6 text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-[#D9B38C]"
                />

                {/* SUBJECT */}
                <input
                  type="text"
                  placeholder="Project Subject"
                  className="h-16 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-6 text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-[#D9B38C]"
                />

                {/* TEXTAREA */}
                <textarea
                  rows={6}
                  placeholder="Tell us about your lighting project..."
                  className="w-full resize-none rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-5 text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-[#D9B38C]"
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#D9B38C] py-5 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-white"
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
