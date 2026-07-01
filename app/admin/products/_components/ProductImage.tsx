// components/ProductImage.tsx
import React, { useRef } from "react";
import { toast } from "react-hot-toast";

interface ImageItem {
  id?: string;
  url: string;
  file?: File;
}

interface ProductImageProps {
  images?: ImageItem[];
  onImageChange: (index: number, file: File | null) => void;
  onImageRemove: (index: number) => void;
  onAddImage: () => void;
  maxImages?: number;
}

const ProductImage: React.FC<ProductImageProps> = ({
  images = [],
  onImageChange,
  onImageRemove,
  onAddImage,
  maxImages = 3,
}) => {
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        e.target.value = "";
        return;
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload a valid image file");
        e.target.value = "";
        return;
      }

      onImageChange(index, file);
    }
  };

  const handleRemoveImage = (index: number) => {
    onImageRemove(index);
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index]!.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-xs font-medium text-black/60 uppercase tracking-wider mb-2">
        Product Images ({images?.length || 0}/{maxImages})
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images && images.map((image, index) => (
          <div key={index} className="relative border border-gray-200 rounded-lg p-3">
            {/* New Badge - Positioned above image */}
            {image.file && (
              <div className="absolute top-0 left-0 z-10 bg-green-500 text-white text-xs px-3 py-1 rounded-tl-lg rounded-br-lg font-medium">
                New
              </div>
            )}

            {/* Image Preview */}
            <div className="relative aspect-square w-full mb-3">
              {image.url ? (
                <img
                  src={image.url}
                  alt={`Product image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">No image</span>
                </div>
              )}
            </div>

            {/* Image Controls */}
            <div className="flex items-center gap-2">
              <input
                type="file"
                ref={(el) => {
                  fileInputRefs.current[index] = el;
                }}
                onChange={(e) => handleFileChange(index, e)}
                accept="image/*"
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRefs.current[index]?.click()}
                className="flex-1 text-xs bg-black text-white py-1.5 px-2 rounded hover:bg-gray-800 transition-colors"
              >
                Replace
              </button>
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="flex-1 text-xs bg-red-500 text-white py-1.5 px-2 rounded hover:bg-red-600 transition-colors font-medium"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        {/* Add Image Button */}
        {images && images.length < maxImages && (
          <button
            type="button"
            onClick={onAddImage}
            className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center hover:border-black transition-colors min-h-[200px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="text-sm text-gray-500 mt-2">Add Image</span>
            <span className="text-xs text-gray-400">({images?.length || 0}/{maxImages})</span>
          </button>
        )}
      </div>

      <p className="text-xs text-black/50 mt-1">
        Upload up to {maxImages} images. First image will be the main image.
      </p>
    </div>
  );
};

export default ProductImage;