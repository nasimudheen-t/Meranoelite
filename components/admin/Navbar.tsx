"use client";

import LogoutButton from "./LogoutButton";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-24 items-center justify-between border-b border-white/10 bg-black/80 px-8 backdrop-blur-xl">
      {/* Left Section */}
      <div>
        <div className="mb-1 flex items-center gap-2">
          <Sparkles
            size={14}
            className="text-zinc-500"
          />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Admin Dashboard
          </span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-white">
          Product Management
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Manage products and inventory
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* User Card */}
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-md transition-all hover:bg-white/[0.05]">
          <div className="text-right">
            <p className="font-semibold text-white">
              Admin
            </p>

            <p className="text-xs text-zinc-500">
              Administrator
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-zinc-300 font-bold text-black shadow-lg">
            A
          </div>
        </div>

        {/* Logout */}
        <LogoutButton />
      </div>
    </header>
  );
}