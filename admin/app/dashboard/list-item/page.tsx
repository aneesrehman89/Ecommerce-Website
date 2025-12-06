"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ImportIcon from "@/app/components/icons/ImportIcon";
import ExportIcon from "@/app/components/icons/ExportIcon";
import AddIcon from "@/app/components/icons/AddIcon";
import FiltersBar from "@/app/components/products/FiltersBar";
import ProductsTable from "@/app/components/products/ProductsTable";
import Pagination from "@/app/components/products/Pagination";
import { productApi } from "@/lib/api";
import type { ProductListItem } from "@/app/types/product";

export default function ListItemPage() {
  const router = useRouter();
  const [products, setProducts] = useState<ProductListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch products from API
  useEffect(() => {
    fetchProducts();
  }, [searchQuery, statusFilter, categoryFilter, currentPage, itemsPerPage]);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await productApi.getProducts({
        search: searchQuery || undefined,
        status: statusFilter !== "All Status" ? statusFilter : undefined,
        category: categoryFilter !== "All Categories" ? categoryFilter : undefined,
        page: currentPage,
        limit: itemsPerPage,
      });

      // Transform backend data to match ProductListItem interface
      const transformedProducts: ProductListItem[] = response.data.map((product: any) => ({
        id: product._id,
        name: product.title,
        category: product.category,
        stock: product.stockQuantity === 0 
          ? "Out of Stock" 
          : product.stockQuantity < 20 
            ? `${product.stockQuantity} Low Stock` 
            : product.stockQuantity,
        price: product.price,
        status: product.status === "Active" 
          ? "Published" 
          : product.status === "Draft" 
            ? "Draft List" 
            : product.status === "Inactive" 
              ? "Inactive" 
              : "Published",
        image: product.mediaFiles && product.mediaFiles.length > 0 
          ? (() => {
              const imageUrl = product.mediaFiles.find((m: any) => m.isPrimary)?.url || product.mediaFiles[0]?.url;
              // If URL already starts with http/https, use it as is, otherwise prepend backend URL
              return imageUrl.startsWith('http') ? imageUrl : `http://localhost:5000${imageUrl}`;
            })()
          : "https://i.pravatar.cc/80?img=1",
        stockStatus: product.stockQuantity === 0 
          ? 'out' 
          : product.stockQuantity < 20 
            ? 'low' 
            : 'normal'
      }));

      setProducts(transformedProducts);
      setTotalItems(response.pagination.total);
      setTotalPages(response.pagination.pages);
    } catch (err: any) {
      console.error("Error fetching products:", err);
      setError(err.message || "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      await productApi.deleteProduct(id);
      alert("Product deleted successfully!");
      fetchProducts(); // Refresh the list
    } catch (err: any) {
      console.error("Error deleting product:", err);
      alert(err.message || "Failed to delete product");
    }
  };

  return (
    <div className="space-y-6">
      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-3 sm:gap-4 mb-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Products List</h1>
          
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {/* Import Button - Hidden on mobile */}
            <button className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <ImportIcon width={18} height={18} className="text-gray-600" />
              <span>Import</span>
            </button>

            {/* Export Button - Hidden on mobile */}
            <button className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <ExportIcon width={18} height={18} className="text-gray-600" />
              <span>Export</span>
            </button>

            {/* Add Product Button */}
            <button 
              onClick={() => router.push("/dashboard/add-item")}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-purple-600 rounded-lg text-sm font-medium text-white hover:bg-purple-700 transition-colors w-full sm:w-auto justify-center"
            >
              <AddIcon width={18} height={18} />
              <span>Add Product</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <FiltersBar
        onSearchChange={setSearchQuery}
        onStatusChange={setStatusFilter}
        onCategoryChange={setCategoryFilter}
      />

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="text-gray-500">Loading products...</div>
        </div>
      ) : (
        <>
          {/* Products Table */}
          <ProductsTable 
            products={products} 
            onDelete={handleDeleteProduct}
          />

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </>
      )}
    </div>
  );
}