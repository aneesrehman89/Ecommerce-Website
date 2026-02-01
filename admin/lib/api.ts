import axios from 'axios';
import type { ProductFormData } from '@/app/types/product';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Product API functions
export const productApi = {
  // Create a new product
  async createProduct(productData: ProductFormData, images: File[]) {
    try {
      const formData = new FormData();
      
      // Append product data
      formData.append('title', productData.title);
      formData.append('price', productData.price.toString());
      if (productData.discountPrice) {
        formData.append('discountPrice', productData.discountPrice.toString());
      }
      formData.append('currency', productData.currency);
      formData.append('description', productData.description);
      formData.append('sku', productData.sku);
      formData.append('status', productData.status);
      formData.append('category', productData.category);
      formData.append('stockQuantity', (productData.stockQuantity ?? 0).toString());
      formData.append('stockUnit', productData.stockUnit);
      formData.append('tags', JSON.stringify(productData.tags));
      formData.append('showOnStoreFront', productData.showOnStoreFront.toString());
      
      // Append images
      images.forEach((image) => {
        formData.append('images', image);
      });

      const response = await axios.post(`${API_BASE_URL}/products`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to create product');
    }
  },

  // Get all products with filters
  async getProducts(filters?: {
    search?: string;
    status?: string;
    category?: string;
    page?: number;
    limit?: number;
  }) {
    try {
      const params = new URLSearchParams();
      
      if (filters?.search) params.append('search', filters.search);
      if (filters?.status) params.append('status', filters.status);
      if (filters?.category) params.append('category', filters.category);
      if (filters?.page) params.append('page', filters.page.toString());
      if (filters?.limit) params.append('limit', filters.limit.toString());

      const response = await api.get(`/products?${params.toString()}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch products');
    }
  },

  // Get single product by ID
  async getProductById(id: string) {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch product');
    }
  },

  // Update product
  async updateProduct(id: string, productData: Partial<ProductFormData>, newImages?: File[]) {
    try {
      const formData = new FormData();
      
      // Append product data
      if (productData.title) formData.append('title', productData.title);
      if (productData.price !== undefined) formData.append('price', productData.price.toString());
      if (productData.discountPrice !== undefined) {
        formData.append('discountPrice', productData.discountPrice ? productData.discountPrice.toString() : '');
      }
      if (productData.currency) formData.append('currency', productData.currency);
      if (productData.description !== undefined) formData.append('description', productData.description);
      if (productData.sku) formData.append('sku', productData.sku);
      if (productData.status) formData.append('status', productData.status);
      if (productData.category) formData.append('category', productData.category);
      if (productData.stockQuantity !== undefined) formData.append('stockQuantity', productData.stockQuantity.toString());
      if (productData.stockUnit) formData.append('stockUnit', productData.stockUnit);
      if (productData.tags) formData.append('tags', JSON.stringify(productData.tags));
      if (productData.showOnStoreFront !== undefined) formData.append('showOnStoreFront', productData.showOnStoreFront.toString());
      if (productData.mediaFiles) formData.append('existingMediaFiles', JSON.stringify(productData.mediaFiles));
      
      // Append new images
      if (newImages && newImages.length > 0) {
        newImages.forEach((image) => {
          formData.append('images', image);
        });
      }

      const response = await axios.put(`${API_BASE_URL}/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to update product');
    }
  },

  // Delete product
  async deleteProduct(id: string) {
    try {
      const response = await api.delete(`/products/${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to delete product');
    }
  },
};

export default api;