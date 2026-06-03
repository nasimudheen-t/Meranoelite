"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShieldCheck,
} from "lucide-react";

import LogoutButton from "./LogoutButton";

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: Package,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex min-h-screen w-72 flex-col border-r border-white/10 bg-black text-white">
      {/* Logo Section */}
      <div className="border-b border-white/10 px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black shadow-lg">
            <ShieldCheck size={24} />
          </div>

          <div>
            <h1 className="text-lg font-bold">
              Admin Panel
            </h1>

            <p className="text-xs text-zinc-500">
              Product Management
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <div className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Main Menu
        </div>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-lg"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon
                  size={20}
                  className={`transition-transform duration-300 ${
                    isActive
                      ? ""
                      : "group-hover:scale-110"
                  }`}
                />

                <span className="font-medium">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-white/10 p-4">
        <div className="mb-4 rounded-2xl border border-white/10 bg-zinc-900 p-4">
          <p className="text-sm font-medium text-white">
            Admin Workspace
          </p>

          <p className="mt-1 text-xs text-zinc-500">
            Secure product management
            system
          </p>
        </div>

        <LogoutButton />
      </div>
    </aside>
  );
}