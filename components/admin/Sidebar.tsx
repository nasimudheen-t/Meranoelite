"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShieldCheck,
  X,
} from "lucide-react";

import LogoutButton from "./LogoutButton";

interface SidebarProps {
  closeSidebar?: () => void;
}

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

export default function Sidebar({
  closeSidebar,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-white/10 bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h1 className="text-lg font-bold text-white">
                Admin Panel
              </h1>

              <p className="text-xs text-slate-400">
                Product Management
              </p>
            </div>
          </div>

          {/* Mobile Close Button */}
          <button
            onClick={() => closeSidebar?.()}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="mb-4 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Main Menu
        </div>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => closeSidebar?.()}
                className={`group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon
                  size={20}
                  className={`transition-transform duration-300 ${
                    !isActive ? "group-hover:scale-110" : ""
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
        <div className="mb-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl">
          <p className="text-sm font-semibold text-white">
            Admin Workspace
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Manage products securely and efficiently.
          </p>
        </div>

        <LogoutButton />
      </div>
    </aside>
  );
}