"use client";

import { useState, useMemo, useEffect } from "react";

import { ProductGrid } from "./product-grid";
import { ProductHero } from "./product-hero";
import { ProductSidebar } from "./product-sidebar";
import { ProductSearch } from "./product-search";
import { ProductModal } from "./product-modal";

import type { Product } from "@/types/product";
import { getProducts } from "@/lib/products";

export function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  const [products, setProducts] = useState([]);
  const productsPerPage = 15;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      console.log("check", data);
      setProducts(data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(products.map((product: any) => product.category))),
    ];
  }, [products]);
  // FILTER PRODUCTS
  const filteredProducts = useMemo(() => {
    return products.filter((product: any) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const matchesSearch =
        !searchQuery ||
        product.product_name
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        product.product_description
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchQuery]);

  // TOTAL PAGES
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // CURRENT PRODUCTS
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;

    const endIndex = startIndex + productsPerPage;

    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  // CHANGE PAGE
  const goToPage = (page: number) => {
    setCurrentPage(page);

    // SCROLL TO TOP
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#050505] pb-32">
      <ProductHero />

      <div className="relative z-10 mx-auto mt-10 max-w-[1450px] px-6 md:px-10">
        {/* TOP BAR */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-8 md:flex-row">
          <ProductSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

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

        {/* CONTENT */}
        <div className="flex flex-col gap-10 md:flex-row lg:gap-14">
          {/* SIDEBAR */}
          <ProductSidebar
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={(category) => {
              setActiveCategory(category);
              setCurrentPage(1);
            }}
          />

          {/* GRID */}
          <div className="flex-1">
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

      {/* MODAL */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
