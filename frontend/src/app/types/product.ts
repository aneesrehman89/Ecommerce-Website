export interface Color {
  name: string;
  value?: string;
}

export interface Product {
  id: string | number;
  title: string;
  image: string;
  images?: string[];
  discount?: number;
  originalPrice: number;
  salePrice: number;
  rating?: number | null;
  reviews?: number | null;
  sku?: string;
  inStock?: boolean;
  description?: string;
  features?: string[];
  sizes?: string[];
  colors?: Color[];
}

export interface ProductDetailsData extends Product {
  images: string[];
  sku: string;
  inStock: boolean;
  description: string;
  features: string[];
  sizes: string[];
}