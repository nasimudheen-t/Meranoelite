"use client";

import { useState, useMemo, useEffect } from "react";

import { ProductGrid } from "./product-grid";
import { ProductHero } from "./product-hero";
import { ProductSidebar } from "./product-sidebar";
import { ProductSearch } from "./product-search";
import { ProductModal } from "./product-modal";
import { ProductsLoading } from "./products-loading";
import type { Product } from "@/types/product";
import { getProducts } from "@/lib/products";

export function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubcategory, setActiveSubcategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [products, setProducts] = useState<Product[]>([]);
  const productsPerPage = 15;

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);

      const data = await getProducts();

      setProducts(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(products.map((product: any) => product.category))),
    ];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product: any) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const matchesSubcategory =
        activeSubcategory === "All" ||
        product.subcategory?.trim() === activeSubcategory.trim();

      const matchesSearch =
        !searchQuery ||
        product.product_name
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        product.product_description
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSubcategory && matchesSearch;
    });
  }, [products, activeCategory, activeSubcategory, searchQuery]);

  const subcategories = useMemo(() => {
    if (activeCategory === "All") {
      return ["All"];
    }

    return [
      "All",
      ...Array.from(
        new Set(
          products
            .filter((product: any) => product.category === activeCategory)
            .map((product: any) => product.subcategory)
            .filter(Boolean),
        ),
      ),
    ];
  }, [products, activeCategory]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;

    const endIndex = startIndex + productsPerPage;

    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const goToPage = (page: number) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (loading) {
    return <ProductsLoading />;
  }

  return (
    <div className="min-h-screen bg-[#050505] pb-32">
      <div className="relative z-10 mx-auto mt-32 max-w-[1450px] px-6 md:px-10">
        {/* TOP BAR */}
        {/* SEARCH BAR */}
        <div className="space-y-8">
          {/* SEARCH BAR */}
          <div className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-5">
            <ProductSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

          {/* PRODUCT COUNT */}
          <div className="flex justify-end border-b border-white/10 pb-6">
            <div className="text-white/60">
              Showing{" "}
              <span className="font-semibold text-white">
                {paginatedProducts.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-white">
                {filteredProducts.length}
              </span>{" "}
              products
            </div>
          </div>

          {/* CATEGORIES */}
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d]">
  <div className="border-b border-white/10 px-6 py-4">
    <p className="text-xs uppercase tracking-[0.3em] text-[#D4B08A]">
      Product Categories
    </p>
  </div>

  {categories
    .filter((category) => category !== "All")
    .map((category) => {
      const categorySubcategories = [
        ...new Set(
          products
            .filter((product) => product.category === category)
            .map((product) => product.subcategory)
            .filter(Boolean)
        ),
      ];

      return (
        <div key={category}>
          {/* Main Category */}
          <button
            onClick={() => {
              setActiveCategory(
                activeCategory === category ? "All" : category
              );
              setActiveSubcategory("All");
              setCurrentPage(1);
            }}
            className={`flex w-full items-center justify-between border-b border-white/5 px-6 py-5 text-left transition-all duration-300
            ${
              activeCategory === category
                ? "bg-[#D4B08A]/10 text-[#D4B08A]"
                : "text-white hover:bg-white/5"
            }`}
          >
            <span>{category}</span>

            <svg
              className={`h-4 w-4 transition-transform duration-300 ${
                activeCategory === category
                  ? "rotate-45 text-[#D4B08A]"
                  : "text-white/70"
              }`}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Subcategories */}
          {activeCategory === category && (
            <div className="border-b border-white/5 bg-black/30 px-6 py-4">
              <div className="flex flex-wrap gap-3">
                {categorySubcategories.map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => {
                      setActiveSubcategory(subcategory);
                      setCurrentPage(1);
                    }}
                    className={`rounded-full border px-4 py-2 text-sm transition-all
                    ${
                      activeSubcategory === subcategory
                        ? "border-[#D4B08A] bg-[#D4B08A] text-black"
                        : "border-white/10 text-white hover:border-[#D4B08A] hover:text-[#D4B08A]"
                    }`}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    })}
</div>

          {/* SUBCATEGORIES ABOVE PRODUCTS */}
          {/* {activeCategory !== "All" && subcategories.length > 1 && (
            <div className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-8 bg-[#D4B08A]" />

                <span className="text-[11px] uppercase tracking-[0.3em] text-[#D4B08A]">
                  {activeCategory}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {subcategories
                  .filter((sub) => sub !== "All")
                  .map((subcategory) => (
                    <button
                      key={subcategory}
                      onClick={() => {
                        setActiveSubcategory(subcategory);
                        setCurrentPage(1);
                      }}
                      className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300
                      ${
                        activeSubcategory === subcategory
                          ? "border-[#D4B08A] bg-[#D4B08A] text-black shadow-lg shadow-[#D4B08A]/20"
                          : "border-white/10 bg-white/[0.03] text-white hover:border-[#D4B08A]/40 hover:text-[#D4B08A]"
                      }`}
                    >
                      {subcategory}
                    </button>
                  ))}
              </div>
            </div>
          )} */}

          {/* PRODUCTS */}
          <ProductGrid
            products={paginatedProducts}
            onProductClick={(product) => setSelectedProduct(product)}
          />

          {/* PAGINATION */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;

              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`h-12 min-w-[48px] rounded-full border text-sm font-semibold transition-all duration-300
                  ${
                    currentPage === page
                      ? "border-white bg-white text-black"
                      : "border-white/10 bg-white/5 text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
