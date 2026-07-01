"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { Trash2, Package, Pencil } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  product_name: string;
  category: string;
  product_images: string[];
}

export default function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editLoading, setEditLoading] = useState(false);

  const [editingProduct, setEditingProduct] = useState({
    id: 0,
    product_name: "",
    product_description: "",
    category: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  //get products by id
  const openEditModal = async (id: number) => {
    try {
      setEditLoading(true);

      const response = await fetch(`${API_URL}/api/products/#${id}`);
      const data = await response.json();
      console.log("data", data);
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch product");
      }

      const product = data.data;

      setEditingProduct({
        id: product.id,
        product_name: product.product_name,
        product_description: product.product_description,
        category: product.category,
      });

      setIsEditOpen(true);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load product");
    } finally {
      setEditLoading(false);
    }
  };

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

  //edit product
  const updateProduct = async (
    id: number,
    product: {
      product_name: string;
      product_description: string;
      category: string;
    },
  ) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${API_URL}/api/products/${id}`, {
        method: "PUT", // or PATCH if your route uses PATCH
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update product");
      }

      toast.success(data.message || "Product updated successfully");

      fetchProducts();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update product");
    }
  };

  //delete product
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
                        src={product.product_images?.[0] || "/placeholder.jpg"}
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

                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-3">
                      <Link
                        href={`/admin/products/edit/${product.id}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-500/15 px-4 py-2 text-blue-400 transition hover:bg-blue-500 hover:text-white"
                      >
                        <Pencil size={16} />
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="inline-flex items-center gap-2 rounded-xl bg-red-500/15 px-4 py-2 text-red-400 transition hover:bg-red-500 hover:text-white"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isEditOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
              <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">
                    Edit Product
                  </h2>

                  <button
                    onClick={() => setIsEditOpen(false)}
                    className="text-2xl text-zinc-400 hover:text-white"
                  >
                    ×
                  </button>
                </div>

                {editLoading ? (
                  <div className="flex justify-center py-10">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-700 border-t-white"></div>
                  </div>
                ) : (
                  <>
                    <div className="space-y-5">
                      <div>
                        <label className="mb-2 block text-sm text-zinc-400">
                          Product Name
                        </label>

                        <input
                          type="text"
                          value={editingProduct.product_name}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              product_name: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm text-zinc-400">
                          Description
                        </label>

                        <textarea
                          rows={5}
                          value={editingProduct.product_description}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              product_description: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm text-zinc-400">
                          Category
                        </label>

                        <input
                          type="text"
                          value={editingProduct.category}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              category: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end gap-3">
                      <button
                        onClick={() => setIsEditOpen(false)}
                        className="rounded-xl border border-zinc-700 px-5 py-3 text-white hover:bg-zinc-800"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={() =>
                          updateProduct(editingProduct.id, {
                            product_name: editingProduct.product_name,
                            product_description:
                              editingProduct.product_description,
                            category: editingProduct.category,
                          })
                        }
                        className="rounded-xl bg-blue-600 px-5 py-3 text-black hover:bg-blue-700"
                      >
                        Save Changes
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
