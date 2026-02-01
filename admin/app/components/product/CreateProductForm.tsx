"use client";

import { useState } from "react";
import TagInput from "./TagInput";
import MediaUploadSection from "./MediaUploadSection";
import type { ProductFormData, MediaFile } from "../../types/product";
import { ProductStatus, ProductCategory, CurrencyType, StockUnit } from "../../types/product";
import { formatPrice, calculateDiscountPercentage } from "@/lib/utils";

interface CreateProductFormProps {
  initialData?: Partial<ProductFormData>;
  onSave: (productData: ProductFormData, images: File[]) => void;
  onDiscard: () => void;
  isSubmitting?: boolean;
}

export default function CreateProductForm({
  initialData,
  onSave,
  onDiscard,
  isSubmitting = false
}: CreateProductFormProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  
  // Generate random SKU
  const generateSKU = () => {
    const prefix = "BRD";
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  };

  const [formData, setFormData] = useState<ProductFormData>({
    title: initialData?.title || "",
    price: initialData?.price || 0,
    discountPrice: initialData?.discountPrice || undefined,
    currency: initialData?.currency || CurrencyType.PKR,
    description: initialData?.description || "",
    sku: initialData?.sku || generateSKU(),
    status: initialData?.status || ProductStatus.ACTIVE,
    category: initialData?.category || ProductCategory.DEFAULT,
    stockQuantity: initialData?.stockQuantity ?? undefined,
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
    if (formData.discountPrice && formData.discountPrice >= formData.price) {
      newErrors.discountPrice = "Discount price must be less than regular price";
    }
    if (!formData.sku.trim()) {
      newErrors.sku = "SKU is required";
    }
    if (formData.stockQuantity !== undefined && formData.stockQuantity < 0) {
      newErrors.stockQuantity = "Stock quantity cannot be negative";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData, uploadedFiles);
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
    // Store the actual file for upload
    setUploadedFiles([...uploadedFiles, file]);
    
    // Create preview for UI
    const newMedia: MediaFile = {
      id: `media-${Date.now()}`,
      type: 'image',
      url: URL.createObjectURL(file),
      isPrimary: formData.mediaFiles.length === 0
    };
    setFormData({ ...formData, mediaFiles: [...formData.mediaFiles, newMedia] });
  };

  const handleRemoveMedia = (id: string) => {
    const index = formData.mediaFiles.findIndex((m) => m.id === id);
    if (index !== -1) {
      // Remove from uploaded files
      const newUploadedFiles = [...uploadedFiles];
      newUploadedFiles.splice(index, 1);
      setUploadedFiles(newUploadedFiles);
    }
    
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
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Add New Product</h2>
        <p className="text-sm text-gray-500 mt-1">You are about to add a new project to your live store</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
              placeholder="A traditional woven silk with gold/silver patterns."
              className={`w-full px-3 py-2.5 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price (PKR) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.price ? formatPrice(formData.price) : ''}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setFormData({ ...formData, price: value ? parseInt(value) : 0 });
              }}
              placeholder="125,000"
              className={`w-full px-3 py-2.5 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            />
            {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
          </div>

          {/* Discount Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Discount Price (PKR) <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              value={formData.discountPrice ? formatPrice(formData.discountPrice) : ''}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                setFormData({ ...formData, discountPrice: value ? parseInt(value) : undefined });
              }}
              placeholder="99,000"
              className={`w-full px-3 py-2.5 border ${errors.discountPrice ? 'border-red-500' : 'border-gray-300'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            />
            {errors.discountPrice && <p className="text-red-500 text-xs mt-1">{errors.discountPrice}</p>}
            {formData.price > 0 && formData.discountPrice && formData.discountPrice < formData.price && (
              <p className="text-green-600 text-xs mt-1">
                Discount: {calculateDiscountPercentage(formData.price, formData.discountPrice)}% off
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Traditional Rajasthani style, used in Mehndi dresses...."
              rows={4}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>

          {/* SKU - Read only, auto-generated */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SKU <span className="text-gray-400 font-normal">(Auto-generated)</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={formData.sku}
                readOnly
                className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-600"
              />
              <button
                type="button"
                onClick={() => setFormData({ ...formData, sku: generateSKU() })}
                className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                Regenerate
              </button>
            </div>
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
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="number"
                value={formData.stockQuantity ?? ''}
                onChange={(e) => setFormData({ ...formData, stockQuantity: e.target.value ? parseInt(e.target.value) : undefined })}
                placeholder="50"
                className={`flex-1 px-3 py-2.5 border ${errors.stockQuantity ? 'border-red-500' : 'border-gray-300'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              />
              <select
                value={formData.stockUnit}
                onChange={(e) => setFormData({ ...formData, stockUnit: e.target.value as StockUnit })}
                className="w-full sm:w-auto px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
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
          maxFiles={7}
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
          disabled={isSubmitting}
          className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors disabled:bg-purple-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Saving..." : "Save Product"}
        </button>
      </div>
    </form>
  );
}