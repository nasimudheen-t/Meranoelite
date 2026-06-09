"use client";

import { motion } from "framer-motion";
import { ProductCard } from "./product-card";
import type { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
}

export function ProductGrid({
  products,
  onProductClick,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-white/50">
          No products found in this category.
        </p>
      </div>
    );
  }

  console.log("products", products);

  return (
    <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: Math.min(index * 0.08, 0.5),
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
        >
          <ProductCard
            product={product}
            onClick={onProductClick}
          />
        </motion.div>
      ))}
    </div>
  );
}