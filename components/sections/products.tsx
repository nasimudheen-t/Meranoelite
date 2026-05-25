"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/lib/data";

export function Products() {
  return (
    <section
      id="products"
      className="bg-[#F6F1EB] py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.3em] text-[11px] text-[#997E67] font-semibold block mb-5">
              Our Collection
            </span>

            <h2
              className="text-5xl md:text-6xl font-black leading-[1] text-[#5F5145]"
              style={{ fontFamily: "serif" }}
            >
              Luxury LED
              <br />

              <span className="italic font-normal text-[#997E67]">
                Lighting
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[#7A6757] leading-[1.8]">
            Elegant smart lighting products designed for modern interiors,
            luxury homes, and premium architectural spaces.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="overflow-hidden rounded-[30px] border border-[#CCBEB1]/40 bg-white">
                {/* IMAGE */}
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  {/* CATEGORY */}
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#997E67]">
                    {product.category}
                  </span>

                  {/* TITLE */}
                  <div className="flex items-start justify-between gap-4 mt-3">
                    <h3 className="text-2xl font-bold text-[#5F5145] leading-tight">
                      {product.title}
                    </h3>

                    <ArrowUpRight className="w-5 h-5 text-[#997E67] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-sm leading-[1.8] text-[#7A6757]">
                    {product.description}
                  </p>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#CCBEB1]/30">
                    <p className="text-lg font-semibold text-[#5F5145]">
                      {product.price}
                    </p>

                    <button className="rounded-full bg-[#CCBEB1]/40 px-5 py-2 text-xs uppercase tracking-[0.18em] text-[#5F5145] transition hover:bg-[#CCBEB1]">
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}