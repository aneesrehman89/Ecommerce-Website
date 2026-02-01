"use client";

import { useState, useEffect } from "react";
import FilterSortBar from "../components/FilterSortBar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { mockHomePageData } from "../data/homePageMockData";
import { productApi } from "../lib/api";
import { transformAllBackendProducts } from "../lib/productTransform";
import type { Product } from "@/types/product";

export default function ProductsPage() {
  const [sortValue, setSortValue] = useState("date-new-old");
  const [products, setProducts] = useState<Product[]>(mockHomePageData.products);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from backend on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await productApi.getProducts({ limit: 100 });
        
        if (response.success && response.data) {
          const backendProducts = transformAllBackendProducts(response.data);
          
          // Combine backend products with static mock products
          const allProducts = [...backendProducts, ...mockHomePageData.products];
          setProducts(allProducts);
        } else {
          // If no backend products, use static products
          setProducts(mockHomePageData.products);
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Unable to load products from server. Showing static products.');
        // Fallback to static products on error
        setProducts(mockHomePageData.products);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
      {/* Page Title */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-gray-900 tracking-wide mb-8">
          READY TO WEAR LUXURY
        </h1>

        {/* Error Banner */}
        {error && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">{error}</p>
          </div>
        )}

        {/* Filter and Sort Bar */}
        <FilterSortBar onSortChange={handleSortChange} />

        {/* Loading State */}
        {loading ? (
          <div className="py-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 aspect-[3/4] mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-3"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Product Grid - 3 items per row on large screens with reduced width */
          <div className="py-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}