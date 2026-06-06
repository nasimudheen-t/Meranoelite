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

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  const [products, setProducts] = useState([]);
  const productsPerPage = 15;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    loadProducts();
  }, []);

  // const loadProducts = async () => {
  //   try {
  //     const data = await getProducts();
  //     console.log("check", data);
  //     setProducts(data || []);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
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
  // FILTER PRODUCTS
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

      console.log(
        "hey",
        product.product_name,
        product.subcategory,
        activeSubcategory,
      );

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

  if (loading) {
    return <ProductsLoading />;
  }

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
        <div className="space-y-8">
          {/* MAIN CATEGORIES */}
          <div className="flex flex-wrap gap-3 border-b border-white/10 pb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveSubcategory("All");
                  setCurrentPage(1);
                }}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all
          ${
            activeCategory === category
              ? "bg-[#D4B08A] text-black"
              : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
          }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* SUBCATEGORIES */}
          {activeCategory !== "All" && subcategories.length > 1 && (
            <div className="mb-10">
              <div className="mb-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[#D4B08A]">
                  Related Subcategories
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {activeCategory}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {subcategories.map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => {
                      setActiveSubcategory(subcategory);
                      setCurrentPage(1);
                    }}
                    className={`rounded-full px-4 py-2 text-sm transition-all
            ${
              activeSubcategory === subcategory
                ? "bg-white text-black"
                : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
            }`}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            </div>
          )}

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

      {/* MODAL */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
