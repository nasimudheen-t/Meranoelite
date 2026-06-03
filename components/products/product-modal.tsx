import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/types/product";
import { API_URL } from "@/lib/api";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A0A0A] border border-white/10 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden flex flex-col md:flex-row shadow-2xl relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* IMAGE */}
              <div className="w-full md:w-1/2 relative h-[300px] md:h-auto min-h-[400px] bg-white/5">
                <Image
                    src={`${API_URL}/${product.product_image}`}
                  alt={product.product_name}
                  fill
                  className="object-cover"
                />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs uppercase tracking-wider text-[#D9B38C]">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {product.product_name}
                </h2>

                <p className="text-white/70 leading-relaxed mb-8">
                  {product.product_description || "No description available"}
                </p>

                <button className="mt-auto w-full py-4 bg-[#D9B38C] text-black font-semibold rounded-xl hover:bg-[#c49b71] transition-colors">
                  Inquire Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
