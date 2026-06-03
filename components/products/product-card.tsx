"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/product";
import { API_URL } from "@/lib/api";

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export function ProductCard({
  product,
  onClick,
}: ProductCardProps) {
  console.log(product.product_image);
  return (
    <div
      className="group h-full flex flex-col cursor-pointer"
      onClick={() => onClick?.(product)}
    >
      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D9B38C]/30 flex flex-col h-full">
        {/* IMAGE */}
        <div className="relative h-[340px] w-full overflow-hidden shrink-0">
          <Image
            src={`${API_URL}/${product.product_image}`}
            alt={product.product_name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute top-5 left-5">
            <span className="rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white/80">
              {product.category}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-7 flex flex-col flex-grow">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white leading-tight">
                {product.product_name}
              </h3>

              <p className="mt-3 text-sm leading-[1.8] text-white/50">
                {product.product_description ||
                  "Premium modern lighting solution with elegant aesthetics."}
              </p>
            </div>

            <div className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-5 h-5 text-[#D9B38C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
          </div>

          <div className="flex-grow" />

          <div className="flex items-center justify-end mt-8 pt-6 border-t border-white/10">
            <button className="rounded-full bg-[#D9B38C] px-5 py-2 text-xs uppercase tracking-[0.18em] text-black font-semibold transition hover:bg-white">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}