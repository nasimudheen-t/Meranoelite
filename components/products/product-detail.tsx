"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, ArrowLeft, MessageSquare } from "lucide-react";
import type { Product } from "@/types/product";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (product.product_images?.length) {
      setSelectedImage(product.product_images[0]);
    }
  }, [product]);

  const productUrl = `https://www.meranoelite.com/products/${product.id}`;

  const handleShare = async () => {
    const shareData = {
      title: product.product_name,
      text: product.product_name,
      url: productUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(productUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      console.log("Share cancelled or failed", error);
    }
  };

  const handleWhatsAppShare = () => {
    const message = `${product.product_name}\n${productUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsAppInquire = () => {
    const message = `Hello, I would like to inquire about this product:\n\n${product.product_name}\n${productUrl}`;
    const whatsappUrl = `https://wa.me/971544936453?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12">
      {/* BACK BUTTON */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span className="text-sm font-semibold uppercase tracking-wider">Back to Products</span>
      </Link>

      <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
        {/* IMAGE SECTION */}
        <div className="w-full md:w-1/2 bg-white/5 p-4 flex flex-col">
          {/* MAIN IMAGE */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#1A1A1A]">
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt={product.product_name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-white/50">
                No image available
              </div>
            )}
          </div>

          {/* THUMBNAILS */}
          {product.product_images && product.product_images.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20">
              {product.product_images.map((image, index) => (
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
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* CONTENT SECTION */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
          <div>
            {/* CATEGORIES / BADGES */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.category && (
                <span className="rounded-full border border-[#D9B38C]/20 bg-[#D9B38C]/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#D9B38C] font-semibold">
                  {product.category}
                </span>
              )}
              {product.subcategory && (
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold">
                  {product.subcategory}
                </span>
              )}
            </div>

            {/* PRODUCT NAME */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
              {product.product_name}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-white/70 leading-relaxed mb-8 whitespace-pre-line text-sm md:text-base">
              {product.product_description || "No description available"}
            </p>
          </div>

          {/* ACTIONS */}
          <div className="space-y-4">
            {/* WHATSAPP INQUIRY BUTTON */}
            <button
              onClick={handleWhatsAppInquire}
              className="w-full py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200 text-center flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/10"
            >
              <MessageSquare className="w-5 h-5" />
              Inquire on WhatsApp
            </button>

            <div className="grid grid-cols-2 gap-4">
              {/* SHARE ON WHATSAPP */}
              <button
                onClick={handleWhatsAppShare}
                className="py-4 border border-[#25D366]/20 bg-[#25D366]/5 text-[#25D366] font-semibold rounded-xl hover:bg-[#25D366]/10 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.966 14.122.95 11.99.95c-5.432 0-9.855 4.37-9.859 9.8c-.002 1.76.478 3.478 1.39 5.004L2.52 21.55l5.87-1.514-.743-.882zM17.472 14.382c-.3-.149-1.777-.872-2.046-.971-.27-.099-.467-.149-.662.15-.195.297-.757.971-.928 1.17-.17.197-.341.221-.641.073-.3-.15-1.267-.467-2.417-1.493-.895-.8-1.499-1.787-1.675-2.087-.176-.3-.019-.461.13-.61l.443-.518c.15-.173.2-.297.3-.497.1-.201.05-.376-.025-.524-.075-.15-.662-1.6-.906-2.185-.237-.57-.48-.493-.662-.503-.171-.008-.367-.01-.563-.01-.197 0-.518.073-.788.374-.27.299-1.03 1.009-1.03 2.46 0 1.45 1.053 2.852 1.2 3.05.148.199 2.072 3.166 5.02 4.444.702.304 1.25.486 1.677.622.705.224 1.346.193 1.854.117.564-.084 1.778-.726 2.028-1.393.25-.667.25-1.238.176-1.392-.074-.15-.27-.249-.571-.397z"/>
                </svg>
                Share to WA
              </button>

              {/* GENERAL SHARE */}
              <button
                onClick={handleShare}
                className="py-4 border border-white/10 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <Share2 className="w-5 h-5" />
                {copied ? "Link Copied!" : "Share Product"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
