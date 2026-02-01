"use client";

import { useState, useEffect } from "react";
import HeroBanner from "./components/HeroBanner";
import FilterSortBar from "./components/FilterSortBar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { mockHomePageData } from "./data/homePageMockData";
import { productApi } from "./lib/api";
import { transformBackendProducts } from "./lib/productTransform";
import type { Product } from "@/types/product";

export default function Home() {
  const [sortValue, setSortValue] = useState("date-new-old");
  const [products, setProducts] = useState<Product[]>(mockHomePageData.products);
  const [loading, setLoading] = useState(false);

  // Home page only shows static mock products (not fetching from backend)

  const handleSortChange = (value: string) => {
    setSortValue(value);
    let sortedProducts = [...products];

    switch (value) {
      case "date-new-old":
        // Keep current order (newest first from API)
        break;
      case "date-old-new":
        sortedProducts.reverse();
        break;
      case "price-low-high":
        sortedProducts.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case "price-high-low":
        sortedProducts.sort((a, b) => b.salePrice - a.salePrice);
        break;
    }

    setProducts(sortedProducts);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <HeroBanner hero={mockHomePageData.hero} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter and Sort Bar */}
        <FilterSortBar onSortChange={handleSortChange} />

        {/* Product Grid */}
        <div className="py-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}