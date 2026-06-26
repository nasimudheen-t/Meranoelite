"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";

import { ProductGrid } from "./product-grid";
import { ProductHero } from "./product-hero";
import { ProductSidebar } from "./product-sidebar";
import { ProductSearch } from "./product-search";
import { ProductModal } from "./product-modal";
import { ProductsLoading } from "./products-loading";
import type { Product } from "@/types/product";
import { getProducts } from "@/lib/products";

export function ProductsClient() {
  const [activeDivision, setActiveDivision] = useState<
    "Furniture" | "Interior" | null
  >(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubcategory, setActiveSubcategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [products, setProducts] = useState<Product[]>([]);
  const productsPerPage = 15;

  const furnitureCategories = ["Office Furniture", "Home Furniture"];
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

const selectDivision = (division: "Furniture" | "Interior" | null) => {
  setActiveDivision(division);
  setActiveCategory("All");
  setActiveSubcategory("All");
  setCurrentPage(1);
};

const divisionProducts = useMemo(() => {
  if (!activeDivision) return products;

  return products.filter((product: any) => {
    const isFurniture = furnitureCategories.includes(
      (product.category || "").trim()
    );

    return activeDivision === "Furniture"
      ? isFurniture
      : !isFurniture;
  });
}, [products, activeDivision]);

  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(divisionProducts.map((product: any) => product.category)),
      ),
    ];
  }, [divisionProducts]);

  const filteredProducts = useMemo(() => {
    return divisionProducts.filter((product: any) => {
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
  }, [divisionProducts, activeCategory, activeSubcategory, searchQuery]);

  const subcategories = useMemo(() => {
    if (activeCategory === "All") {
      return ["All"];
    }

    return [
      "All",
      ...Array.from(
        new Set(
          divisionProducts
            .filter((product: any) => product.category === activeCategory)
            .map((product: any) => product.subcategory)
            .filter(Boolean),
        ),
      ),
    ];
  }, [divisionProducts, activeCategory]);

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

  if (!activeDivision) {
    return (
      <div className="min-h-screen bg-[#050505] pb-32">
        <div className="relative z-10 mx-auto mt-32 max-w-[1200px] px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/60 backdrop-blur-xl">
              Explore Collections
            </span>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl uppercase">
              Select a category
            </h1>
            <p className="mt-4 text-lg text-white/50 max-w-xl mx-auto">
              Choose between our premium designer furniture or our smart
              architectural interior lighting.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Interior Card */}
            <button
              onClick={() => selectDivision("Interior")}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-[#0d0d0d] p-8 md:p-12 text-left transition-all duration-500 hover:border-white/20 hover:bg-white/[0.02] cursor-pointer shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.02)]"
            >
              <div className="space-y-6 w-full">
                <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/5 bg-white/5">
                  <Image
                    src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
                    alt="Interior Lighting Collection"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="flex gap-4 items-start">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-500 group-hover:scale-110">
                    <svg
                      className="h-6 w-6 text-[#D9B38C]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-black uppercase tracking-tight text-white">
                      LIGHTING SOLUTIONS
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-white/50">
                      Innovative, smart, and energy-efficient lighting designs.
                      Enhance your home, commercial, or architectural spaces.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6 w-full">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#D9B38C] group-hover:text-white transition-colors duration-300">
                  View Collection
                </span>
                <span className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform duration-300 group-hover:translate-x-1.5">
                  Explore →
                </span>
              </div>
            </button>
            {/* Furniture Card */}
            <button
              onClick={() => selectDivision("Furniture")}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-[#0d0d0d] p-8 md:p-12 text-left transition-all duration-500 hover:border-white/20 hover:bg-white/[0.02] cursor-pointer shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.02)]"
            >
              <div className="space-y-6 w-full">
                <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/5 bg-white/5">
                  <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                    alt="Premium Furniture Collection"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="flex gap-4 items-start">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-500 group-hover:scale-110">
                    <svg
                      className="h-6 w-6 text-[#D9B38C]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-black uppercase tracking-tight text-white">
                      Furniture
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-white/50">
                      Premium and stylish furniture solutions tailored for
                      luxury spaces. Discover living room, bedroom, and dining
                      collections.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6 w-full">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#D9B38C] group-hover:text-white transition-colors duration-300">
                  View Collection
                </span>
                <span className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform duration-300 group-hover:translate-x-1.5">
                  Explore →
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] pb-32">
      <div className="relative z-10 mx-auto mt-32 max-w-[1450px] px-6 md:px-10">
        {/* Navigation / Switcher */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => selectDivision(null)}
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Sections
            </button>
            <span className="text-white/20">/</span>
            <span className="text-lg font-bold uppercase tracking-wider text-white">
              {activeDivision}
            </span>
          </div>

          <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
            <button
              onClick={() => selectDivision("Interior")}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeDivision === "Interior"
                  ? "bg-[#D9B38C] text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Interior
            </button>
            <button
              onClick={() => selectDivision("Furniture")}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeDivision === "Furniture"
                  ? "bg-[#D9B38C] text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Furniture
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <ProductSidebar
            categories={categories}
            subcategories={subcategories}
            activeCategory={activeCategory}
            activeSubcategory={activeSubcategory}
            onCategoryChange={(category) => {
              setActiveCategory(category);
              setActiveSubcategory("All");
              setCurrentPage(1);
            }}
            onSubcategoryChange={(subcategory) => {
              setActiveSubcategory(subcategory);
              setCurrentPage(1);
            }}
          />

          <div className="flex-1 space-y-8">
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
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
