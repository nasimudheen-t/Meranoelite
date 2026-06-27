import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/types/product";
import { API_URL } from "@/lib/api";
import { useState, useEffect } from "react";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (product?.product_images?.length) {
      setSelectedImage(product.product_images[0]);
    }
  }, [product]);

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

              {/* IMAGE SECTION */}
              <div className="w-full md:w-1/2 bg-white/5 p-4 flex flex-col">
                {/* Main Image Container - Fixed Aspect Ratio */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#1A1A1A]">
                  {selectedImage ? (
                    <Image
                      src={selectedImage}
                      alt={product.product_name}
                      fill
                      className="object-contain" // Changed from object-cover to object-contain
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-white/50">
                      No image available
                    </div>
                  )}
                </div>

                {/* Thumbnail Images - Fixed Size */}
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20">
                  {product.product_images?.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                        selectedImage === image
                          ? "border-[#D9B38C] scale-105"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
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

                <a
                  href={`https://wa.me/971507055644?text=${encodeURIComponent(
                    `Hi, I'm interested in ${product.product_name}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:opacity-90 transition-colors text-center"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}