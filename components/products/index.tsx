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
