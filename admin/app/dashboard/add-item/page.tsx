"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CreateProductForm from "../../components/product/CreateProductForm";
import type { ProductFormData } from "../../types/product";
import { productApi } from "@/lib/api";
import { ProductCategory, CurrencyType, ProductStatus, StockUnit } from "../../types/product";

export default function AddItemPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initialData: Partial<ProductFormData> = {
    title: "",
    price: undefined as any,
    discountPrice: undefined,
    currency: CurrencyType.PKR,
    description: "",
    sku: "",
    status: ProductStatus.ACTIVE,
    category: ProductCategory.DEFAULT,
    stockQuantity: undefined,
    stockUnit: StockUnit.UNITS,
    tags: [],
    showOnStoreFront: true,
    mediaFiles: []
  };

  const handleSave = async (productData: ProductFormData, images: File[]) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await productApi.createProduct(productData, images);
      alert("Product created successfully!");
      router.push("/dashboard/list-item");
    } catch (err: any) {
      console.error("Error creating product:", err);
      setError(err.message || "Failed to create product");
      alert(err.message || "Failed to create product");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDiscard = () => {
    if (confirm("Are you sure you want to discard changes?")) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}
      
      <CreateProductForm
        initialData={initialData}
        onSave={handleSave}
        onDiscard={handleDiscard}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}