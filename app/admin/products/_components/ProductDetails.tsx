// components/ProductDetails.tsx
import React from "react";

interface ProductDetailsProps {
  product: {
    product_name: string;
    product_description: string;
    category: string;
    subcategory: string;
    product_images?: string[];
  };
  onEdit: () => void;
  isLoading: boolean;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  onEdit,
  isLoading,
}) => {
  const images = product.product_images || [];

  return (
    <div className="space-y-8">
      {/* Side by side layout: Images left, Details right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Product Images */}
        <div className="bg-violet-50/50 border border-violet-100 rounded-2xl p-6">
          <h3 className="text-xs font-semibold text-violet-700 uppercase tracking-wider mb-4">
            Product Images {images.length > 0 && `(${images.length})`}
          </h3>
          {images.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`${product.product_name} - ${index + 1}`}
                    className="w-full h-32 object-cover rounded-xl border border-violet-200"
                  />
                  {index === 0 && (
                    <span className="absolute top-2 left-2 bg-violet-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                      Main
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-violet-200 rounded-xl text-violet-300">
              <span className="text-sm font-medium">No images uploaded</span>
            </div>
          )}
        </div>

        {/* Right Column - Product Details */}
        <div className="space-y-5">
          {/* Product Name */}
          <div className="border-b border-slate-100 pb-4">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Product Name
            </label>
            <p className="text-lg font-semibold text-slate-900">
              {product.product_name}
            </p>
          </div>

          {/* Description */}
          <div className="border-b border-slate-100 pb-4">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Description
            </label>
            <p className="text-slate-600">
              {product.product_description || "No description provided"}
            </p>
          </div>

          {/* Category */}
          <div className="border-b border-slate-100 pb-4">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Category
            </label>
            <p className="text-slate-600">
              {product.category || "No category assigned"}
            </p>
          </div>

          {/* Sub Category */}
          <div className="border-b border-slate-100 pb-4">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Sub Category
            </label>
            <p className="text-slate-600">
              {product.subcategory || "No subcategory assigned"}
            </p>
          </div>
        </div>
      </div>

      {/* Update Button */}
      <div className="pt-6 border-t border-slate-100">
        <button
          onClick={onEdit}
          disabled={isLoading}
          className="w-full bg-black text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-violet-700 transition-colors disabled:opacity-50 text-base shadow-sm shadow-violet-200"
        >
          {isLoading ? "Loading..." : "Update Product"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;