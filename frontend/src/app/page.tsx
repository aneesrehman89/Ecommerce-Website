"use client";

import { useState } from "react";
import HeroBanner from "./components/HeroBanner";
import FilterSortBar from "./components/FilterSortBar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { mockHomePageData } from "./data/homePageMockData";

export default function Home() {
  const [sortValue, setSortValue] = useState("date-new-old");
  const [products, setProducts] = useState(mockHomePageData.products);

  const handleSortChange = (value: string) => {
    setSortValue(value);
    let sortedProducts = [...products];

    switch (value) {
      case "date-new-old":
        // Keep original order
        sortedProducts = [...mockHomePageData.products];
        break;
      case "date-old-new":
        sortedProducts = [...mockHomePageData.products].reverse();
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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