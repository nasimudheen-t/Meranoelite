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
  const emails = [
    "sulaiman@meranoelite.com",
    "navas@meranoelite.com",
    "sales@meranoelite.com",
    "info@meranoelite.com",
    "accounts@meranoelite.com",
    "purchase@meranoelite.com",
  ];

  return (
    <footer className="bg-[#0F0F10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                <Lightbulb className="w-5 h-5" />
              </div>

              <h2 className="text-2xl font-semibold text-white">
                Meranoelite
              </h2>
            </Link>

            <p className="text-sm leading-7 text-white/50 max-w-sm">
              Premium lighting and stylish furniture solutions for luxury
              interiors, hospitality projects, architectural spaces, modern
              homes, offices, villas, and commercial developments.
            </p>
          </div>

          {/* CENTER */}
          <div className="text-center">
            <h3 className="text-lg font-medium text-white mb-4">
              Elegant Lighting Solutions
            </h3>

            <p className="text-sm leading-7 text-white/45 max-w-sm mx-auto">
              Smart, modern and premium lighting designs crafted for
              residential and commercial interiors.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="https://www.instagram.com/meranoelite?igsh=MWJhbWNjaHVoOGZjdg=="
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#171717] transition-all duration-300 hover:bg-white"
              >
                <Instagram className="w-5 h-5 text-white/70 group-hover:text-black" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#171717] transition-all duration-300 hover:bg-white"
              >
                <Facebook className="w-5 h-5 text-white/70 group-hover:text-black" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#171717] transition-all duration-300 hover:bg-white"
              >
                <MessageCircle className="w-5 h-5 text-white/70 group-hover:text-black" />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-[#D9B38C]" />
              <h3 className="text-lg font-medium text-white">
                Contact Emails
              </h3>
            </div>

            <div className="space-y-2">
              {emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block text-sm text-white/55 transition-colors hover:text-[#D9B38C]"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Meranoelite. All rights reserved.
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