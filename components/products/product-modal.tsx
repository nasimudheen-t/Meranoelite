import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import Image from "next/image";
import { Product } from "@/data/products/types";

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
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-10"
          >
            {/* MODAL CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A0A0A] border border-white/10 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden flex flex-col md:flex-row shadow-2xl relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* IMAGE SECTION */}
              <div className="w-full md:w-1/2 relative h-[300px] md:h-auto min-h-[400px] bg-white/5">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs uppercase tracking-wider text-[#D9B38C]">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{product.title}</h2>
                <p className="text-xl text-[#D9B38C] mb-6">{product.price}</p>
                
                <p className="text-white/70 leading-relaxed mb-8">
                  {product.description}
                </p>

                <div className="mt-auto">
                  <h3 className="text-sm uppercase tracking-wider text-white/50 mb-4 font-semibold">Key Features</h3>
                  <ul className="space-y-3">
                    {product.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-[#D9B38C]/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#D9B38C]" />
                        </div>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-10 w-full py-4 bg-[#D9B38C] text-black font-semibold rounded-xl hover:bg-[#c49b71] transition-colors">
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
