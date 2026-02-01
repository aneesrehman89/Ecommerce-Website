// Product-related enums

export enum ProductStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  DRAFT = "Draft"
}

export enum ProductCategory {
  DEFAULT = "Default",
  BRIDAL_LEHENGAS = "Bridal Lehengas",
  BRIDAL_MAXI_GOWNS = "Bridal Maxi/Gowns",
  BRIDAL_SHARARA_GHARARA = "Bridal Sharara/Gharara",
  BRIDAL_SAREES = "Bridal Sarees",
  BRIDAL_SUITS = "Bridal Suits"
}

export enum CurrencyType {
  PKR = "PKR (₨)"
}

export enum StockUnit {
  UNITS = "Units",
  PIECES = "Pieces",
  ITEMS = "Items"
}

// Product form data types

export interface MediaFile {
  id: string;
  type: 'image' | 'video';
  url: string;
  isPrimary: boolean;
}

export interface ProductFormData {
  title: string;
  price: number;
  discountPrice?: number;
  currency: CurrencyType;
  description: string;
  sku: string;
  status: ProductStatus;
  category: ProductCategory;
  stockQuantity?: number;
  stockUnit: StockUnit;
  tags: string[];
  showOnStoreFront: boolean;
  mediaFiles: MediaFile[];
}

export interface CreateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (productData: ProductFormData) => void;
  onDiscard: () => void;
  initialData?: Partial<ProductFormData>;
}

export interface TagInputProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

export interface MediaUploadProps {
  mediaFiles: MediaFile[];
  onAddMedia: (file: File) => void;
  onRemoveMedia: (id: string) => void;
  onSetPrimary: (id: string) => void;
  maxFiles?: number;
}

// Products List types

export enum ProductListStatus {
  PUBLISHED = "Published",
  DRAFT_LIST = "Draft List",
  INACTIVE = "Inactive",
  STOCK_OUT = "Stock Out"
}

export interface ProductListItem {
  id: string;
  name: string;
  category: string;
  stock: number | string;
  price: number;
  status: ProductListStatus;
  image: string;
  stockStatus?: 'normal' | 'low' | 'out';
}

export interface ProductsListFilters {
  search: string;
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
  status: string;
  category: string;
}