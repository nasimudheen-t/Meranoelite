"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";
import { Trash2, Package } from "lucide-react";
import { toast } from "react-hot-toast";
import Image from "next/image";

interface Product {
  id: number;
  product_name: string;
  category: string;
  product_image: string;
}

export default function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/api/products`);

      const data = await response.json();

      setProducts(data.data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: number) => {
    const token = localStorage.getItem("token");

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API_URL}/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      toast.success("Product deleted successfully");

      fetchProducts();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete product");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-700 border-t-white"></div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl shadow-2xl">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-5">
        <h2 className="text-2xl font-bold text-white">Product Inventory</h2>

        <p className="mt-1 text-sm text-zinc-400">
          Manage all products from one place
        </p>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Package size={60} className="text-zinc-600" />

          <h3 className="mt-4 text-lg font-semibold text-white">
            No Products Found
          </h3>

          <p className="mt-2 text-zinc-500">
            Add your first product to get started.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-black/20">
                <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-400">
                  Product
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-400">
                  Category
                </th>

                <th className="px-6 py-4 text-right text-sm font-semibold text-zinc-400">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-white/5 transition-all hover:bg-white/5"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
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

                      <div>
                        <h3 className="font-semibold text-white">
                          {product.product_name}
                        </h3>

                        <p className="mt-1 text-sm text-zinc-500">
                          Product ID #{product.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                      {product.category}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="inline-flex items-center gap-2 rounded-xl bg-red-500/15 px-4 py-2 text-red-400 transition-all hover:bg-red-500 hover:text-white"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
