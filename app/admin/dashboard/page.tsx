"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { Package, Layers3, PlusCircle, Eye, ArrowUpRight } from "lucide-react";
import { API_URL } from "@/lib/api";
import Image from "next/image";

interface Product {
  id: number;
  product_name: string;
  category: string;
  product_image: string;
  created_at: string;
}

export default function DashboardPage() {
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");

      setTimeout(() => {
        router.replace("/admin/login");
      }, 1000);

      return;
    }

    fetchProducts(token);
  }, [router]);

  const fetchProducts = async (token: string) => {
    try {
      const response = await fetch(`${API_URL}/api/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem("token");

        toast.error("Session expired");

        setTimeout(() => {
          router.replace("/admin/login");
        }, 1000);

        return;
      }

      const data = await response.json();

      setProducts(data.data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const totalProducts = products.length;

  const totalCategories = new Set(products.map((product) => product.category))
    .size;

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-6 text-white">
      {/* Header */}
      <div className="mb-8 rounded-3xl border border-white/10 bg-gradient-to-r from-zinc-900 via-zinc-950 to-black p-8 shadow-2xl">
        <h1 className="text-4xl font-bold tracking-tight">Welcome Back 👋</h1>

        <p className="mt-3 text-zinc-400 text-lg">
          Manage products, inventory and categories from a single dashboard.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="group rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl p-6 transition hover:-translate-y-1 hover:border-blue-500/40">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-400">Total Products</p>

              <h2 className="mt-2 text-4xl font-bold">{totalProducts}</h2>
            </div>

            <div className="rounded-2xl bg-blue-500/20 p-4">
              <Package className="h-8 w-8 text-blue-400" />
            </div>
          </div>
        </div>

        <div className="group rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl p-6 transition hover:-translate-y-1 hover:border-green-500/40">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-400">Categories</p>

              <h2 className="mt-2 text-4xl font-bold">{totalCategories}</h2>
            </div>

            <div className="rounded-2xl bg-green-500/20 p-4">
              <Layers3 className="h-8 w-8 text-green-400" />
            </div>
          </div>
        </div>

        <div className="group rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl p-6 transition hover:-translate-y-1 hover:border-purple-500/40">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-400">Recent Products</p>

              <h2 className="mt-2 text-4xl font-bold">
                {products.slice(0, 5).length}
              </h2>
            </div>

            <div className="rounded-2xl bg-purple-500/20 p-4">
              <Eye className="h-8 w-8 text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-xl">
        <h2 className="mb-5 text-xl font-semibold">Quick Actions</h2>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/admin/products"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            <PlusCircle size={18} />
            Add Product
          </Link>

          <Link
            href="/admin/products"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/10"
          >
            <Eye size={18} />
            View Products
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Recent Products */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl">
        <div className="border-b border-white/10 p-6">
          <h2 className="text-xl font-semibold">Recent Products</h2>
        </div>

        {loading ? (
          <div className="p-6">
            <div className="h-16 animate-pulse rounded-xl bg-zinc-800"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="p-10 text-center text-zinc-500">
            No products found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-zinc-400">
                  <th className="p-5 text-left">Image</th>
                  <th className="p-5 text-left">Product</th>
                  <th className="p-5 text-left">Category</th>
                  <th className="p-5 text-left">Created</th>
                </tr>
              </thead>

              <tbody>
                {products.slice(0, 5).map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-white/5 transition hover:bg-white/5"
                  >
                    <td className="p-5">
                      <Image
                        src={
                          product.product_image.startsWith("http")
                            ? product.product_image
                            : `${API_URL}/${product.product_image}`
                        }
                        alt={product.product_name}
                        width={56}
                        height={56}
                        className="rounded-xl object-cover border border-white/10"
                        loading="lazy"
                      />
                    </td>

                    <td className="p-5 font-medium">{product.product_name}</td>

                    <td className="p-5">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
                        {product.category}
                      </span>
                    </td>

                    <td className="p-5 text-zinc-400">
                      {new Date(product.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
