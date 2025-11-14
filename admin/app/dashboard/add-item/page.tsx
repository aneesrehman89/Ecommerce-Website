"use client";

import { useState } from "react";
import CreateProductModal from "../../components/product/CreateProductModal";
import { mockFormData } from "../../data/createProductMockData";
import type { ProductFormData } from "../../types/product";

export default function AddItemPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleSave = (productData: ProductFormData) => {
    console.log("Product saved:", productData);
    // Here you would typically send the data to your backend
    setIsModalOpen(false);
  };

  const handleDiscard = () => {
    console.log("Changes discarded");
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Add New Product</h1>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p className="text-gray-600 mb-4">
          Click the button below to open the product creation modal.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Create New Product
        </button>
      </div>

      <CreateProductModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onSave={handleSave}
        onDiscard={handleDiscard}
        initialData={mockFormData}
      />
    </div>
  );
}