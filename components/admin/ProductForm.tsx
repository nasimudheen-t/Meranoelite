"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { API_URL } from "@/lib/api";

export default function ProductForm() {
  const router = useRouter();

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");

      setTimeout(() => {
        router.replace("/admin/login");
      }, 1000);

      return;
    }

    setCheckingAuth(false);
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");

      router.replace("/admin/login");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("product_name", productName);

      formData.append("product_description", description);

      formData.append("category", category);

      if (image) {
        formData.append("product_image", image);
      }

      const response = await fetch(`${API_URL}/api/products`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.status === 401) {
        localStorage.removeItem("token");

        toast.error("Session expired");

        router.replace("/admin/login");
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add product");
      }

      toast.success(data.message || "Product added successfully");

      setProductName("");
      setDescription("");
      setCategory("");
      setImage(null);
    } catch (error: any) {
      toast.error(error.message || "Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="flex items-center justify-center p-10">
        Checking authentication...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl shadow-2xl">
        {/* Header */}
        <div className="border-b border-white/10 px-8 py-6">
          <h2 className="text-3xl font-bold text-white">Add New Product</h2>

          <p className="mt-2 text-zinc-400">
            Create and manage products in your inventory system.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 p-8">
          {/* Product Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Product Name
            </label>

            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product name"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-white/30 focus:bg-black/50"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Product Description
            </label>

            <textarea
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your product..."
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-white/30 focus:bg-black/50"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Category
            </label>

            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition-all focus:border-white/30 focus:bg-black/50"
              required
            />
          </div>

          {/* Upload */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Product Image
            </label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/10 bg-black/20 px-6 py-10 transition hover:border-white/30 hover:bg-black/30">
              <svg
                className="mb-4 h-10 w-10 text-zinc-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16V4m0 0l-4 4m4-4l4 4M4 20h16"
                />
              </svg>

              <p className="text-zinc-300">Click to upload image</p>

              <p className="mt-1 text-xs text-zinc-500">PNG, JPG, WEBP</p>

              {image && (
                <p className="mt-3 text-sm text-green-400">{image.name}</p>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="hidden"
                required
              />
            </label>
          </div>

          {/* Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-white py-3 font-semibold text-black transition-all hover:scale-[1.01] hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Adding Product..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
