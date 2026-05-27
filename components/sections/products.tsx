"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { PRODUCTS } from "@/data/products";

export function ProductsPreview() {

  // SHOW ONLY 4 PRODUCTS
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-black py-28 md:py-36"
    >

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">

        {/* TOP */}
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div className="max-w-3xl">

            {/* LABEL */}
            <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/60 backdrop-blur-xl">
              Premium Collection
            </span>

            {/* TITLE */}
            <h2 className="text-5xl font-black leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              Luxury Lighting <br />

              <span className="text-white/40">
                Crafted For Modern Spaces
              </span>
            </h2>
          </div>

          {/* VIEW ALL BUTTON */}
          <Link
            href="/products"
            className="hidden rounded-full border border-white/10 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-white/90 md:flex"
          >
            View All Products
          </Link>
        </div>

        {/* PRODUCTS */}
        <div className="grid gap-8 md:grid-cols-2">

          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >

              {/* CARD LINK */}
              <Link
                href="/products"
                className="group block overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]"
              >

                {/* IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden">

                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* CATEGORY */}
                  <div className="absolute left-6 top-6">

                    <span className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-xl">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="space-y-6 p-8">

                  {/* TITLE */}
                  <div>
                    <h3 className="text-3xl font-black tracking-tight text-white">
                      {product.title}
                    </h3>

                    <p className="mt-3 text-base leading-relaxed text-white/50">
                      {product.description}
                    </p>
                  </div>

                  {/* BOTTOM */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-6">

                    <span className="text-2xl font-bold text-white">
                      {product.price}
                    </span>

                    <span className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 group-hover:bg-white/90">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <div className="mt-10 md:hidden">

          <Link
            href="/products"
            className="flex w-full items-center justify-center rounded-full bg-white py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}