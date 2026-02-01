"use client";

import { useRef } from "react";
import Image from "next/image";
import UploadIcon from "../icons/UploadIcon";
import AddIcon from "../icons/AddIcon";
import CloseIcon from "../icons/CloseIcon";
import type { MediaUploadProps } from "../../types/product";

export default function MediaUploadSection({
  mediaFiles,
  onAddMedia,
  onRemoveMedia,
  onSetPrimary,
  maxFiles = 7
}: MediaUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const primaryMedia = mediaFiles.find((m) => m.isPrimary) || mediaFiles[0];
  const thumbnails = mediaFiles.filter((m) => !m.isPrimary);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onAddMedia(files[0]);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-3 flex gap-2">
      <label className="block text-sm font-medium text-gray-700">
        Media <span className="text-red-500">*</span>
      </label>

      {/* Main preview area */}
      <div className=" w-[550px] h-[250px] relative bg-gray-50 border border-gray-300 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
        {primaryMedia ? (
          <>
            <img
              src={primaryMedia.url}
              alt="Benjamin R. on Unsplash"
              className="w-full h-full object-contain"
            />
            <button
              type="button"
              onClick={() => onRemoveMedia(primaryMedia.id)}
              className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors text-gray-600"
              aria-label="Remove image"
            >
              <CloseIcon width={16} height={16} />
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={handleUploadClick}
            className="flex flex-col items-center justify-center gap-3 text-gray-400 hover:text-gray-600 transition-colors p-8"
          >
            <UploadIcon width={48} height={48} />
            <span className="text-sm">Click to upload media</span>
          </button>
        )}
      </div>

      {/* Thumbnail slots */}
      <div className="flex gap-2">
        {mediaFiles.slice(0, 4).map((media, index) => (
          <div
            key={media.id}
            className="relative w-16 h-16 bg-gray-100 border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:border-purple-500 transition-colors"
            onClick={() => onSetPrimary(media.id)}
          >
            <img
              src={media.url}
              alt={`Product thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {media.isPrimary && (
              <div className="absolute inset-0 border-2 border-purple-600 rounded-lg pointer-events-none" />
            )}
          </div>
        ))}

        {/* Add more button */}
        {mediaFiles.length < maxFiles && (
          <button
            type="button"
            onClick={handleUploadClick}
            className="w-16 h-16 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-colors"
            aria-label="Add more images"
          >
            <AddIcon width={24} height={24} />
          </button>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
}