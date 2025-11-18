import { ProductStatus, ProductCategory, CurrencyType, StockUnit } from '../types/product';

// Data passed as props to the root component
export const mockRootProps = {
  isOpen: true,
  onClose: () => console.log('Modal closed'),
  onSave: (productData: any) => console.log('Product saved:', productData),
  onDiscard: () => console.log('Changes discarded')
};

// Initial form data for the product creation form
export const mockFormData = {
  title: "Classic Leather Bomber Jacket" as const,
  price: 42.99,
  currency: CurrencyType.USD,
  description: "Timeless leather bomber jacket featuring a sleek black design. Made from premium quality leather with a comfortable fit and durable construction. Perfect for casual outings or a stylish layer for cooler weather. Available in multiple sizes." as const,
  sku: "LBJ-2024-BLK" as const,
  status: ProductStatus.ACTIVE,
  category: ProductCategory.DEFAULT,
  stockQuantity: 50,
  stockUnit: StockUnit.UNITS,
  tags: ["Casual" as const, "Retro" as const],
  showOnStoreFront: true,
  mediaFiles: [
    {
      id: "media-1" as const,
      type: "image" as const,
      url: "https://images.unsplash.com/photo-1592878849122-facb97520f9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxsZWF0aGVyJTIwamFja2V0JTIwYm9tYmVyJTIwamFja2V0JTIwYmxhY2slMjBqYWNrZXR8ZW58MHwyfHxibGFja3wxNzYzMDk0NDA0fDA&ixlib=rb-4.1.0&q=85" as const,
      isPrimary: true
    },
    {
      id: "media-2" as const,
      type: "image" as const,
      url: "https://images.unsplash.com/photo-1466547599693-252e6f5f30b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxsZWF0aGVyJTIwamFja2V0JTIwYmxhY2slMjBqYWNrZXQlMjBmYXNoaW9ufGVufDB8Mnx8YmxhY2t8MTc2MzA5NDQwNHww&ixlib=rb-4.1.0&q=85" as const,
      isPrimary: false
    },
    {
      id: "media-3" as const,
      type: "image" as const,
      url: "https://images.unsplash.com/photo-1635715390924-3936ee04f584?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxqYWNrZXQlMjBsZWF0aGVyJTIwY2xvdGhpbmd8ZW58MHwyfHxibGFja3wxNzYzMDk0NDA0fDA&ixlib=rb-4.1.0&q=85" as const,
      isPrimary: false
    },
    {
      id: "media-4" as const,
      type: "image" as const,
      url: "https://images.unsplash.com/photo-1642486997002-b73aa7f2df72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxqYWNrZXQlMjBsZWF0aGVyJTIwY2xvdGhpbmclMjBmYXNoaW9ufGVufDB8Mnx8YmxhY2t8MTc2MzA5NDQwNXww&ixlib=rb-4.1.0&q=85" as const,
      isPrimary: false
    }
  ]
};