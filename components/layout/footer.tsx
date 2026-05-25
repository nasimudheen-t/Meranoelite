"use client";

import {
  Lightbulb,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1F1A17] pt-24 pb-10">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#997E67]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">

          {/* BRAND */}
          <div className="space-y-7">

            {/* LOGO */}
            <Link
              href="#home"
              className="flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#997E67] shadow-[0_10px_30px_rgba(153,126,103,0.3)]">

                <Lightbulb className="w-6 h-6 text-[#FFF8F2] fill-[#FFF8F2]/20" />
              </div>

              <span className="text-2xl font-black tracking-wide text-[#FFF8F2]">
                Lumira
              </span>
            </Link>

            {/* DESCRIPTION */}
            <p className="text-[#CCBEB1] leading-relaxed text-sm">
              Premium smart LED lighting solutions crafted
              for luxury interiors, elegant architecture,
              and modern intelligent spaces.
            </p>

            {/* SOCIALS */}
            <div className="flex flex-wrap gap-5">

              {[
                "Facebook",
                "Instagram",
                "LinkedIn",
                "Twitter",
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-sm font-medium text-[#CCBEB1] transition-colors duration-300 hover:text-[#FFF8F2]"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-7 text-sm font-semibold uppercase tracking-[0.25em] text-[#997E67]">
              Quick Links
            </h4>

            <ul className="space-y-5">

              {[
                "About Us",
                "Projects",
                "Services",
                "Products",
                "Contact",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-[#CCBEB1] transition-colors duration-300 hover:text-[#FFF8F2]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-7 text-sm font-semibold uppercase tracking-[0.25em] text-[#997E67]">
              Contact
            </h4>

            <ul className="space-y-6">

              <li className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#664930]">
                  <MapPin className="w-5 h-5 text-[#FFF8F2]" />
                </div>

                <span className="text-[#CCBEB1] leading-relaxed text-sm">
                  Dubai Design District,
                  <br />
                  United Arab Emirates
                </span>
              </li>

              <li className="flex items-center gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#664930]">
                  <Phone className="w-5 h-5 text-[#FFF8F2]" />
                </div>

                <span className="text-[#CCBEB1] text-sm">
                  +971 4 123 4567
                </span>
              </li>

              <li className="flex items-center gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#664930]">
                  <Mail className="w-5 h-5 text-[#FFF8F2]" />
                </div>

                <span className="text-[#CCBEB1] text-sm">
                  hello@lumira.com
                </span>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="mb-7 text-sm font-semibold uppercase tracking-[0.25em] text-[#997E67]">
              Newsletter
            </h4>

            <p className="mb-6 text-sm leading-relaxed text-[#CCBEB1]">
              Subscribe for interior lighting inspiration,
              project updates, and premium product launches.
            </p>

            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* INPUT */}
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-full border border-[#997E67]/20 bg-white/5 px-5 py-4 text-sm text-[#FFF8F2] outline-none transition-all duration-300 placeholder:text-[#CCBEB1]/60 focus:border-[#CCBEB1]"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#997E67] py-4 text-sm font-semibold text-[#FFF8F2] transition-all duration-300 hover:bg-[#CCBEB1] hover:text-[#1F1A17]"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 border-t border-white/10 pt-8">

          {/* COPYRIGHT */}
          <p className="text-sm text-[#CCBEB1]">
            © {new Date().getFullYear()} Lumira.
            All rights reserved.
          </p>

          {/* LINKS */}
          <div className="flex items-center gap-6">

            <a
              href="#"
              className="text-sm text-[#CCBEB1] transition-colors duration-300 hover:text-[#FFF8F2]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-sm text-[#CCBEB1] transition-colors duration-300 hover:text-[#FFF8F2]"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}