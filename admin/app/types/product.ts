// Product-related enums

export enum ProductStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  DRAFT = "Draft"
}

export enum ProductCategory {
  DEFAULT = "Default",
  CLOTHING = "Clothing",
  ACCESSORIES = "Accessories",
  FOOTWEAR = "Footwear",
  ELECTRONICS = "Electronics"
}

export enum CurrencyType {
  USD = "USD ($)",
  EUR = "EUR (€)",
  GBP = "GBP (£)"
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
  currency: CurrencyType;
  description: string;
  sku: string;
  status: ProductStatus;
  category: ProductCategory;
  stockQuantity: number;
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