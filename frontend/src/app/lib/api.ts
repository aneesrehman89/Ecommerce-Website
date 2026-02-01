import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Product API functions
export const productApi = {
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
      console.error('Failed to fetch products:', error);
      throw new Error(error.response?.data?.message || 'Failed to fetch products');
    }
  },

  // Get single product by ID
  async getProductById(id: string) {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error: any) {
      console.error('Failed to fetch product:', error);
      throw new Error(error.response?.data?.message || 'Failed to fetch product');
    }
  },
};

export default api;