"use client";

import { useState } from "react";
import ChevronLeftIcon from "./icons/ChevronLeftIcon";
import ChevronRightIcon from "./icons/ChevronRightIcon";

interface ProductImageGalleryProps {
  images: string[];
}

export default function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrevious = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex gap-4">
      {/* Thumbnail Navigation */}
      <div className="flex flex-col gap-3 w-24">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`relative aspect-square overflow-hidden border-2 transition-all ${
              currentIndex === index
                ? "border-gray-900"
                : "border-gray-200 hover:border-gray-400"
            }`}
          >
            <img
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image Display */}
      <div className="flex-1 relative">
        <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`Product image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Previous image"
          >
            <ChevronLeftIcon width={24} height={24} color="#1a1a1a" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Next image"
          >
            <ChevronRightIcon width={24} height={24} color="#1a1a1a" />
          </button>
        </div>
      </div>
    </div>
  );
}