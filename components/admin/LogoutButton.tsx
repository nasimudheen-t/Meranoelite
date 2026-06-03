"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { toast } from "react-hot-toast";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");

    if (!confirmed) return;

    localStorage.removeItem("token");

    toast.success("Logged out successfully");

    router.push("/admin/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="group flex w-full items-center justify-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 font-medium text-red-400 transition-all duration-300 hover:bg-red-500 hover:text-white"
    >
      <LogOut
        size={18}
        className="transition-transform duration-300 group-hover:-translate-x-1"
      />

      <span>Logout</span>
    </button>
  );
}
