"use client";

import { useState } from "react";
import TagInput from "./TagInput";
import MediaUploadSection from "./MediaUploadSection";
import type { ProductFormData, MediaFile } from "../../types/product";
import { ProductStatus, ProductCategory, CurrencyType, StockUnit } from "../../types/product";

interface CreateProductFormProps {
  initialData?: Partial<ProductFormData>;
  onSave: (productData: ProductFormData) => void;
  onDiscard: () => void;
}

export default function CreateProductForm({
  initialData,
  onSave,
  onDiscard
}: CreateProductFormProps) {
  const [formData, setFormData] = useState<ProductFormData>({
    title: initialData?.title || "",
    price: initialData?.price || 0,
    currency: initialData?.currency || CurrencyType.USD,
    description: initialData?.description || "",
    sku: initialData?.sku || "",
    status: initialData?.status || ProductStatus.ACTIVE,
    category: initialData?.category || ProductCategory.DEFAULT,
    stockQuantity: initialData?.stockQuantity || 0,
    stockUnit: initialData?.stockUnit || StockUnit.UNITS,
    tags: initialData?.tags || [],
    showOnStoreFront: initialData?.showOnStoreFront ?? true,
    mediaFiles: initialData?.mediaFiles || []
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (formData.price <= 0) {
      newErrors.price = "Price must be greater than 0";
    }
    if (!formData.sku.trim()) {
      newErrors.sku = "SKU is required";
    }
    if (formData.stockQuantity < 0) {
      newErrors.stockQuantity = "Stock quantity cannot be negative";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
    }
  };

  const handleAddTag = (tag: string) => {
    if (!formData.tags.includes(tag)) {
      setFormData({ ...formData, tags: [...formData.tags, tag] });
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData({ ...formData, tags: formData.tags.filter((t) => t !== tag) });
  };

  const handleAddMedia = (file: File) => {
    const newMedia: MediaFile = {
      id: `media-${Date.now()}`,
      type: 'image',
      url: URL.createObjectURL(file),
      isPrimary: formData.mediaFiles.length === 0
    };
    setFormData({ ...formData, mediaFiles: [...formData.mediaFiles, newMedia] });
  };

  const handleRemoveMedia = (id: string) => {
    const updatedFiles = formData.mediaFiles.filter((m) => m.id !== id);
    if (updatedFiles.length > 0 && !updatedFiles.some((m) => m.isPrimary)) {
      updatedFiles[0].isPrimary = true;
    }
    setFormData({ ...formData, mediaFiles: updatedFiles });
  };

  const handleSetPrimary = (id: string) => {
    const updatedFiles = formData.mediaFiles.map((m) => ({
      ...m,
      isPrimary: m.id === id
    }));
    setFormData({ ...formData, mediaFiles: updatedFiles });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Add New Product</h2>
        <p className="text-sm text-gray-500 mt-1">You are about to add a new project to your live store</p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {/* Left Column */}
        <div className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Classic Leather Bomber Jacket"
              className={`w-full px-3 py-2.5 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <select
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value as CurrencyType })}
                className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
              >
                {Object.values(CurrencyType).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                placeholder="42.99"
                className={`flex-1 px-3 py-2.5 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              />
            </div>
            {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Timeless leather bomber jacket featuring a sleek black design..."
              rows={4}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>

          {/* SKU */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SKU <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.sku}
              onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
              placeholder="LBJ-2024-BLK"
              className={`w-full px-3 py-2.5 border ${errors.sku ? 'border-red-500' : 'border-gray-300'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            />
            {errors.sku && <p className="text-red-500 text-xs mt-1">{errors.sku}</p>}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-5">
          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as ProductStatus })}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
            >
              {Object.values(ProductStatus).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* Product Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Category <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as ProductCategory })}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
            >
              {Object.values(ProductCategory).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Stock Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stock Quantity <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={formData.stockQuantity}
                onChange={(e) => setFormData({ ...formData, stockQuantity: parseInt(e.target.value) || 0 })}
                placeholder="50"
                className={`flex-1 px-3 py-2.5 border ${errors.stockQuantity ? 'border-red-500' : 'border-gray-300'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              />
              <select
                value={formData.stockUnit}
                onChange={(e) => setFormData({ ...formData, stockUnit: e.target.value as StockUnit })}
                className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
              >
                {Object.values(StockUnit).map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
            {errors.stockQuantity && <p className="text-red-500 text-xs mt-1">{errors.stockQuantity}</p>}
          </div>

          {/* Tags */}
          <TagInput
            tags={formData.tags}
            onAddTag={handleAddTag}
            onRemoveTag={handleRemoveTag}
          />
        </div>
      </div>

      {/* Media Upload Section */}
      <div className="mt-5">
        <MediaUploadSection
          mediaFiles={formData.mediaFiles}
          onAddMedia={handleAddMedia}
          onRemoveMedia={handleRemoveMedia}
          onSetPrimary={handleSetPrimary}
        />
      </div>

      {/* Show on store front */}
      <div className="mt-5">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.showOnStoreFront}
            onChange={(e) => setFormData({ ...formData, showOnStoreFront: e.target.checked })}
            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          />
          <span className="text-sm text-gray-700">Show this item on the store front</span>
        </label>
      </div>

      {/* Footer Actions */}
      <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={onDiscard}
          className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          Discard
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
        >
          Save Product
        </button>
      </div>
    </form>
  );
}