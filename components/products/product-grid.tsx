"use client";

import { motion } from "framer-motion";
import { ProductCard } from "./product-card";
import { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
}

export function ProductGrid({ products, onProductClick }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-white/50 text-lg">No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 w-full">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: Math.min(index * 0.08, 0.5) }} // Cap delay for large lists
          viewport={{ once: true, margin: "-50px" }}
        >
          <ProductCard product={product} onClick={onProductClick} />
        </motion.div>
      ))}
    </div>
  );
}
