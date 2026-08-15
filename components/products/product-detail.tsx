"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, ArrowLeft, MessageSquare, Download } from "lucide-react";
import type { Product } from "@/types/product";
import { toast } from "react-hot-toast";

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
  const [sharing, setSharing] = useState(false);
  const [imageFiles, setImageFiles] = useState<{ [url: string]: File }>({});

  const showShareMainImage =
    product.product_images &&
    product.product_images.length > 1 &&
    selectedImage !== product.product_images[0];

  useEffect(() => {
    if (!product.product_images?.length) return;

    const prefetch = async () => {
      const filesMap: { [url: string]: File } = {};
      for (const imageUrl of product.product_images) {
        try {
          const response = await fetch(
            `/api/image-proxy?url=${encodeURIComponent(imageUrl)}`,
          );
          if (response.ok) {
            const blob = await response.blob();
            const extension = blob.type.split("/")[1] || "jpg";
            const filename = `${product.product_name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.${extension}`;
            const file = new File([blob], filename, {
              type: blob.type || "image/jpeg",
            });
            filesMap[imageUrl] = file;
          }
        } catch (e) {
          console.error("Prefetch error for", imageUrl, e);
        }
      }
      setImageFiles((prev) => ({ ...prev, ...filesMap }));
    };

    prefetch();
  }, [product]);

  const triggerDownload = (file: File) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShareImage = async (imageUrl: string, forceDownload = false) => {
    const file = imageFiles[imageUrl];
    if (!file) {
      toast.error("Image is still preparing. Please try again in a moment.");
      return;
    }

    if (sharing) return;
    setSharing(true);

    const shareData = {
      title: product.product_name,
      text: `${product.product_name}\n${productUrl}`,
      url: productUrl,
      files: [file],
    };

    try {
      if (
        !forceDownload &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        try {
          await navigator.share(shareData);
        } catch (shareError: any) {
          if (shareError.name !== "AbortError") {
            console.error("Native share failed:", shareError);
            triggerDownload(file);
            toast.error("Sharing failed. Image downloaded instead.");
          }
        }
      } else {
        triggerDownload(file);
        if (forceDownload) {
          toast.success("Image downloaded successfully.");
        } else {
          toast.success(
            "Sharing unsupported on this browser. Image downloaded instead.",
          );
        }
      }
    } catch (err) {
      console.error("Sharing process failed:", err);
      toast.error("Sharing failed.");
    } finally {
      setSharing(false);
    }
  };

  const handleWhatsAppShareImage = async () => {
    const imageUrl = selectedImage || product.product_images?.[0] || "";
    const file = imageFiles[imageUrl];

    if (!file) {
      // Fallback directly to text link if image is not pre-fetched yet
      const message = `${product.product_name}\n${productUrl}`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      return;
    }

    if (sharing) return;
    setSharing(true);

    const shareData = {
      title: product.product_name,
      text: `${product.product_name}\n${productUrl}`,
      url: productUrl,
      files: [file],
    };

    try {
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share(shareData);
        } catch (shareError: any) {
          if (shareError.name !== "AbortError") {
            console.error("Native share failed:", shareError);
            const message = `${product.product_name}\n${productUrl}`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
          }
        }
      } else {
        const message = `${product.product_name}\n${productUrl}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
      }
    } catch (err) {
      console.error("WhatsApp share failed:", err);
      const message = `${product.product_name}\n${productUrl}`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    } finally {
      setSharing(false);
    }
  };

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
        toast.success("Link copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      console.log("Share cancelled or failed", error);
    }
  };

  const handleWhatsAppInquire = () => {
    const message = `Hello, I would like to inquire about this product:\n\n${product.product_name}\n${productUrl}`;
    const whatsappUrl = `https://wa.me/971544936453?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const isImageReady = !!imageFiles[selectedImage];
  const isMainImageReady = !!imageFiles[product.product_images?.[0] || ""];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12">
      {/* BACK BUTTON */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span className="text-sm font-semibold uppercase tracking-wider">
          Back to Products
        </span>
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
            {/* SHARE IMAGE BUTTON + SHARE LINK SIDE BY SIDE */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {/* SHARE IMAGE BUTTON */}
              <button
                onClick={() => handleShareImage(selectedImage)}
                disabled={sharing || !isImageReady}
                className="w-full min-w-0 h-12 sm:h-14 px-2 sm:px-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 disabled:opacity-50"
              >
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-[#D9B38C]" />

                <span className="whitespace-nowrap text-[11px] sm:text-sm">
                  {isImageReady ? "Share With Image" : "Preparing..."}
                </span>
              </button>

              {/* SHARE PRODUCT LINK */}
              <button
                onClick={handleShare}
                className="w-full min-w-0 h-12 sm:h-14 px-2 sm:px-4 border border-white/10 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5 sm:gap-2"
              >
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-white/50" />

                <span className="whitespace-nowrap text-[11px] sm:text-sm">
                  {copied ? "Link Copied!" : "Share Link"}
                </span>
              </button>
            </div>
            {/* SHARE MAIN IMAGE BUTTON */}
            {showShareMainImage && (
              <button
                onClick={() => handleShareImage(product.product_images[0])}
                disabled={sharing || !isMainImageReady}
                className="w-full py-3.5 bg-white/5 border border-white/10 text-white/80 text-sm font-medium rounded-xl hover:bg-white/10 transition-all duration-200 text-center flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Share2 className="w-4 h-4 text-white/45" />
                {isMainImageReady
                  ? "Share Main Image Directly"
                  : "Preparing Main Image..."}
              </button>
            )}

            {/* WHATSAPP INQUIRY BUTTON */}
            <button
              onClick={handleWhatsAppInquire}
              className="w-full py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200 text-center flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/10"
            >
              <MessageSquare className="w-5 h-5" />
              Inquire on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
