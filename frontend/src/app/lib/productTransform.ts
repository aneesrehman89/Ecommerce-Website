import type { Product } from '@/types/product';

// Backend product interface
interface BackendProduct {
  _id: string;
  title: string;
  price: number;
  discountPrice?: number;
  currency: string;
  description?: string;
  sku: string;
  status: string;
  category: string;
  stockQuantity: number;
  stockUnit: string;
  tags: string[];
  showOnStoreFront: boolean;
  mediaFiles: Array<{
    id: string;
    type: string;
    url: string;
    isPrimary: boolean;
  }>;
  createdAt: string;
  updatedAt: string;
}

// Get backend base URL for constructing full image URLs
const getBackendBaseUrl = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
  // Remove /api from the end to get base URL
  return apiUrl.replace('/api', '');
};

// Transform backend product to frontend Product type
export const transformBackendProduct = (backendProduct: BackendProduct): Product => {
  const backendBaseUrl = getBackendBaseUrl();
  
  // Helper function to construct image URL
  const constructImageUrl = (url: string): string => {
    // If URL is already absolute (starts with http:// or https://), return as-is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    // Otherwise, prepend backend base URL
    return `${backendBaseUrl}${url}`;
  };
  
  // Get primary image or first image
  const primaryImage = backendProduct.mediaFiles.find(file => file.isPrimary) || backendProduct.mediaFiles[0];
  const imageUrl = primaryImage ? constructImageUrl(primaryImage.url) : '/placeholder-product.svg';
  
  // Calculate discount percentage
  const discount = backendProduct.discountPrice 
    ? Math.round(((backendProduct.price - backendProduct.discountPrice) / backendProduct.price) * 100)
    : 0;

  return {
    id: backendProduct._id,
    title: backendProduct.title,
    image: imageUrl,
    images: backendProduct.mediaFiles.map(file => constructImageUrl(file.url)),
    originalPrice: backendProduct.price,
    salePrice: backendProduct.discountPrice || backendProduct.price,
    discount: discount > 0 ? discount : undefined,
    rating: null,
    reviews: null,
    sku: backendProduct.sku,
    inStock: backendProduct.stockQuantity > 0,
    description: backendProduct.description,
  };
};

// Filter products based on showOnStoreFront and status
export const filterStoreFrontProducts = (products: BackendProduct[]): BackendProduct[] => {
  return products.filter(
    product => product.showOnStoreFront === true && product.status === 'Active'
  );
};

// Transform array of backend products with filtering
export const transformBackendProducts = (backendProducts: BackendProduct[]): Product[] => {
  const filteredProducts = filterStoreFrontProducts(backendProducts);
  return filteredProducts.map(transformBackendProduct);
};

// Transform all backend products without filtering (for products listing page)
export const transformAllBackendProducts = (backendProducts: BackendProduct[]): Product[] => {
  return backendProducts.map(transformBackendProduct);
};