"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { API_URL } from "@/lib/api";
import { categories } from "@/app/admin/lib/data";

export default function ProductForm() {
  const router = useRouter();

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
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
      formData.append("subcategory", subcategory);
      images.forEach((file) => {
        formData.append("product_images", file);
      });

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
      setSubcategory("");
      setImages([]);
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
              Main Category
            </label>

            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setSubcategory("");
              }}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white"
              required
            >
              <option value="" className="text-black">
                Select Category
              </option>

              {Object.keys(categories).map((cat) => (
                <option key={cat} value={cat} className="text-black">
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Sub Category
            </label>

            <select
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              disabled={!category}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white disabled:opacity-50"
              required
            >
              <option value="" className="text-black">
                Select Sub Category
              </option>

              {category &&
                categories[category as keyof typeof categories]?.map((sub) => (
                  <option key={sub} value={sub} className="text-black">
                    {sub}
                  </option>
                ))}
            </select>
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

              <p className="text-zinc-300">Click to upload up to 3 images</p>

              <p className="mt-1 text-xs text-zinc-500">
                JPG, JPEG, PNG, WEBP (Max 3 Images)
              </p>

              {images.length > 0 && (
                <div className="mt-3 space-y-1">
                  {images.map((img, index) => (
                    <p key={index} className="text-sm text-green-400">
                      {img.name}
                    </p>
                  ))}
                </div>
              )}

              <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                multiple
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);

                  if (files.length === 0) return;

                  if (files.length > 3) {
                    toast.error("Maximum 3 images allowed");
                    e.target.value = "";
                    setImages([]);
                    return;
                  }

                  const invalidFile = files.find(
                    (file) => !ALLOWED_TYPES.includes(file.type),
                  );

                  if (invalidFile) {
                    toast.error(
                      "Only JPG, JPEG, PNG and WEBP images are allowed",
                    );

                    e.target.value = "";
                    setImages([]);
                    return;
                  }

                  setImages(files);
                }}
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
