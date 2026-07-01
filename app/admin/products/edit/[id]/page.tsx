// app/admin/products/[id]/page.tsx
"use client";
import { API_URL } from "@/lib/api";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

// Import components
// import BackButton from "@/components/BackButton";
import PageHeader from "../../_components/PageHeader";
import ProductImage from "../../_components/ProductImage";
import ProductDetails from "../../_components/ProductDetails";
import ProductForm from "../../_components/ProductForm";
import BackButton from "../../_components/BackButton";

interface Product {
  id: number;
  product_name: string;
  product_description: string;
  category: string;
  subcategory: string;
  product_images?: string[];
}

interface ImageItem {
  url: string;
  file?: File;
  replaced?: boolean;
}

const Page = () => {
  const params = useParams();
  const id = params.id;

  // State for product data
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [updating, setUpdating] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    product_name: "",
    product_description: "",
    category: "",
    subcategory: "",
  });

  // Image states - support multiple images
  const [images, setImages] = useState<ImageItem[]>([]);

  // Fetch product by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/products/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch product");
        }

        const fetchedProduct = data.data;
        setProduct(fetchedProduct);
        setFormData({
          product_name: fetchedProduct.product_name || "",
          product_description: fetchedProduct.product_description || "",
          category: fetchedProduct.category || "",
          subcategory: fetchedProduct.subcategory || "",
        });

        // Set images
        if (
          fetchedProduct.product_images &&
          fetchedProduct.product_images.length > 0
        ) {
          const imageItems = fetchedProduct.product_images.map(
            (url: string) => ({
              url: url,
              file: undefined,
            }),
          );
          setImages(imageItems);
        } else {
          setImages([]);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    if (name === "category") {
      setFormData((prev) => ({
        ...prev,
        category: value,
        subcategory: "",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image changes
  const handleImageChange = (index: number, file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = {
          ...newImages[index],
          file,
          replaced: true,
          url: reader.result as string,
        };
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image removal
  const handleImageRemove = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  // Handle add new image
  const handleAddImage = () => {
    if (images.length < 3) {
      setImages([...images, { url: "", file: undefined }]);
    }
  };

  // Handle form submission for update
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      setUpdating(true);

      if (!formData.product_name.trim()) {
        toast.error("Product name cannot be empty");
        return;
      }

      const hasNewImages = images.some((img) => img.file);

      let response: Response;

      if (hasNewImages) {
        const formDataToSend = new FormData();

        formDataToSend.append("product_name", formData.product_name);
        formDataToSend.append(
          "product_description",
          formData.product_description,
        );
        formDataToSend.append("category", formData.category);
        formDataToSend.append("subcategory", formData.subcategory);

        images.forEach((image, index) => {
          if (image.file) {
            formDataToSend.append("product_images", image.file);
            formDataToSend.append("replaceIndexes", index.toString());
          }
        });

        response = await fetch(`${API_URL}/api/products/${id}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataToSend,
        });
      } else {
        response = await fetch(`${API_URL}/api/products/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            product_name: formData.product_name,
            product_description: formData.product_description,
            category: formData.category,
            subcategory: formData.subcategory,
          }),
        });
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update product");
      }

      setProduct(data.data);

      if (data.data.product_images) {
        setImages(
          data.data.product_images.map((url: string) => ({
            url,
            file: undefined,
          })),
        );
      }

      toast.success("Product updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error(error);

      toast.error(
        error instanceof Error ? error.message : "Failed to update product",
      );
    } finally {
      setUpdating(false);
    }
  };

  // Cancel editing
  const cancelEdit = () => {
    setIsEditing(false);
    if (product) {
      setFormData({
        product_name: product.product_name || "",
        product_description: product.product_description || "",
        category: product.category || "",
        subcategory: product.subcategory || "",
      });

      // Reset images
      if (product.product_images && product.product_images.length > 0) {
        const imageItems = product.product_images.map((url: string) => ({
          url: url,
          file: undefined,
        }));
        setImages(imageItems);
      } else {
        setImages([]);
      }
    }
  };

  // Open edit mode
  const openEditModal = async () => {
    try {
      setEditLoading(true);

      const response = await fetch(`${API_URL}/api/products/${id}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch product");
      }

      const fetchedProduct = data.data;
      setProduct(fetchedProduct);
      setFormData({
        product_name: fetchedProduct.product_name || "",
        product_description: fetchedProduct.product_description || "",
        category: fetchedProduct.category || "",
        subcategory: fetchedProduct.subcategory || "",
      });

      // Set images
      if (
        fetchedProduct.product_images &&
        fetchedProduct.product_images.length > 0
      ) {
        const imageItems = fetchedProduct.product_images.map((url: string) => ({
          url: url,
          file: undefined,
        }));
        setImages(imageItems);
      } else {
        setImages([]);
      }

      setIsEditing(true);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load product");
    } finally {
      setEditLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-slate-700">Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-slate-700">Product not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-8 mt-10">
      <div className="w-full max-w-6xl text-black">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 ">
          {/* Back Button */}
          <BackButton className="mb-6" />

          {/* Page Header */}
          <PageHeader
            title="Update Product"
            subtitle="Manage products and inventory"
          />

          {!isEditing ? (
            // Display View Mode
            <ProductDetails
              product={product}
              onEdit={openEditModal}
              isLoading={editLoading}
            />
          ) : (
            // Edit Form Mode
            <ProductForm
              formData={formData}
              onInputChange={handleInputChange}
              onSubmit={handleUpdate}
              onCancel={cancelEdit}
              isSubmitting={updating}
              imageComponent={
                <ProductImage
                  images={images}
                  onImageChange={handleImageChange}
                  onImageRemove={handleImageRemove}
                  onAddImage={handleAddImage}
                  maxImages={3}
                />
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
