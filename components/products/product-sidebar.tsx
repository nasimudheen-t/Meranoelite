interface ProductSidebarProps {
  categories: string[];
  subcategories: string[];
  activeCategory: string;
  activeSubcategory: string;
  onCategoryChange: (category: string) => void;
  onSubcategoryChange: (subcategory: string) => void;
}

export function ProductSidebar({
  categories,
  subcategories,
  activeCategory,
  activeSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}: ProductSidebarProps) {
  console.log("side",subcategories)
  return (
    <div className="w-full md:w-64 shrink-0 mb-8 md:mb-0">
      <div className="sticky top-28 bg-[#0A0A0A] border border-white/10 rounded-3xl p-6">
        {/* Categories */}
        <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
          Categories
        </h3>

        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#D9B38C] text-black font-medium shadow-[0_0_20px_rgba(217,179,140,0.3)]"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sub Categories */}
        {activeCategory !== "All" && subcategories.length > 1 && (
          <>
            <div className="my-6 border-t border-white/10" />

            <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">
              Sub Categories
            </h3>

            <div className="flex flex-col gap-2">
              {subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => onSubcategoryChange(subcategory)}
                  className={`text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSubcategory === subcategory
                      ? "bg-[#D9B38C] text-black font-medium shadow-[0_0_20px_rgba(217,179,140,0.3)]"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {subcategory}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}