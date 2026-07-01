"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface BackButtonProps {
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className = "" }) => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/admin/products");
  };

  return (
    <button
      onClick={handleBack}
      className={`flex items-center gap-2 text-black/60 hover:text-black transition-colors ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
      Back to Products
    </button>
  );
};

export default BackButton;