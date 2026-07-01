// components/ProductForm.tsx
import React from "react";
import { categories } from "@/app/admin/lib/data";

interface ProductFormData {
  product_name: string;
  product_description: string;
  category: string;
  subcategory: string;
}

interface ProductFormProps {
  formData: ProductFormData;
  onInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isSubmitting: boolean;
  imageComponent: React.ReactNode;
}

const ProductForm: React.FC<ProductFormProps> = ({
  formData,
  onInputChange,
  onSubmit,
  onCancel,
  isSubmitting,
  imageComponent,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Side by side layout: Images left, Fields right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Product Images */}
        <div className="bg-violet-50/50 border border-violet-100 rounded-2xl p-6">
          <h3 className="text-xs font-semibold text-violet-700 uppercase tracking-wider mb-4">
            Product Images
          </h3>
          {imageComponent}
        </div>

        {/* Right Column - Form Fields */}
        <div className="space-y-6">
          {/* Product Name */}
          <div>
            <label
              htmlFor="product_name"
              className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2"
            >
              Product Name *
            </label>
            <input
              type="text"
              id="product_name"
              name="product_name"
              value={formData.product_name}
              onChange={onInputChange}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-slate-900 transition-shadow"
              placeholder="Enter product name"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="product_description"
              className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2"
            >
              Description
            </label>
            <textarea
              id="product_description"
              name="product_description"
              value={formData.product_description}
              onChange={onInputChange}
              rows={4}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-slate-900 resize-none transition-shadow"
              placeholder="Enter product description"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={onInputChange}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-500 outline-none text-slate-900 bg-white transition-shadow"
            >
              <option value="">Select Category</option>
              {Object.keys(categories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Sub Category */}
          <div>
            <label
              htmlFor="subcategory"
              className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2"
            >
              Sub Category
            </label>
            <select
              id="subcategory"
              name="subcategory"
              value={formData.subcategory}
              onChange={onInputChange}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-500 outline-none text-slate-900 bg-white disabled:bg-slate-50 disabled:text-slate-400 transition-shadow"
              disabled={!formData.category}
            >
              <option value="">Select Sub Category</option>
              {formData.category &&
                categories[formData.category as keyof typeof categories]?.map(
                  (sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  )
                )}
            </select>
          </div>
        </div>
      </div>

      {/* Form Buttons */}
      <div className="flex gap-4 pt-6 border-t border-slate-100">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-black text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-violet-700 transition-colors disabled:opacity-50 text-base shadow-sm shadow-violet-200"
        >
          {isSubmitting ? "Updating..." : "Save Changes"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="flex-1 bg-red-500  font-semibold py-3.5 px-6 rounded-xl"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProductForm;