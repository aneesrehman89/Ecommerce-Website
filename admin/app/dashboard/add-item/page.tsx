"use client";

import { useRouter } from "next/navigation";
import CreateProductForm from "../../components/product/CreateProductForm";
import { mockFormData } from "../../data/createProductMockData";
import type { ProductFormData } from "../../types/product";

export default function AddItemPage() {
  const router = useRouter();

  const handleSave = (productData: ProductFormData) => {
    console.log("Product saved:", productData);
    // Here you would typically send the data to your backend
    alert("Product saved successfully!");
    router.push("/dashboard");
  };

  const handleDiscard = () => {
    console.log("Changes discarded");
    router.push("/dashboard");
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">Add New Product</h1> */}
      
      <CreateProductForm
        initialData={mockFormData}
        onSave={handleSave}
        onDiscard={handleDiscard}
      />
    </div>
  );
}