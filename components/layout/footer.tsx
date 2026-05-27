"use client";

import Link from "next/link";
import {
  Lightbulb,
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F0F10] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* LEFT */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                <Lightbulb className="w-5 h-5" />
              </div>

              <h2 className="text-2xl font-semibold text-white">Lumira</h2>
            </Link>

            <p className="text-sm leading-7 text-white/50 max-w-xs mb-5">
              Premium LED lighting solutions for luxury interiors and modern
              spaces.
            </p>

            {/* EMAIL */}
            <a
              href="mailto:info@meranoelite.com"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <Mail className="w-4 h-4" />
              info@meranoelite.com
            </a>
          </div>

          {/* CENTER */}
          <div className="md:text-center">
            <h3 className="text-lg font-medium text-white mb-3">
              Elegant Lighting Solutions
            </h3>

            <p className="text-sm leading-7 text-white/45 max-w-sm mx-auto">
              Smart, modern and premium lighting designs crafted for residential
              and commercial interiors.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex md:justify-end gap-4">
            <a
              href="https://www.instagram.com/meranoelite?igsh=MWJhbWNjaHVoOGZjdg=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#171717] transition-all duration-300 hover:bg-white"
            >
              <Instagram className="w-5 h-5 text-white/70 group-hover:text-black" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#171717] transition-all duration-300 hover:bg-white"
            >
              <Facebook className="w-5 h-5 text-white/70 group-hover:text-black" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#171717] transition-all duration-300 hover:bg-white"
            >
              <MessageCircle className="w-5 h-5 text-white/70 group-hover:text-black" />
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Lumira. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/35 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-white/35 transition-colors hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}