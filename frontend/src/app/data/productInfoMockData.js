// Mock data for product detail page

export const mockRootProps = {
  productId: "98342",
  title: "Crew Neck Tee Shirt",
  price: 3850,
  sku: "98342",
  barcode: "WP1S-969",
  availability: "In Stock",
  stockCount: 12,
  design: "SK-0152 (P38-25400-08B 1Pc)",
  color: "Olive",
  fabric: "Scuba",
  description: "The Crew Neck Tee – Olive Green By ambotique Blends Everyday Simplicity With Subtle Sophistication. Crafted From Premium Scuba Fabric, It Offers a Clean Crew Neck Silhouette Coupled With a Soft, Comfortable Fit. The Earthy Olive Green Hue Evokes Effortless Style, Making It Ideal for Everyday Layering, Work Casuals, Or Elevated Off-Duty Looks.",
  features: [
    "Smooth, Premium Scuba Fabric That Balances Structure and Softness",
    "Classic Crew Neck Design for Timeless Versatility",
    "Muted Olive Green Shade for Subtle, Polished Styling"
  ],
  disclaimer: "These Images Are For Illustrative Purpose, Actual Color Of Product May Slight Vary.",
  images: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
    "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800",
    "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800"
  ],
  availableSizes: ["X-Small", "Small", "Medium", "Large"],
  availableColors: ["GREEN"],
  availableFabrics: ["Scuba"],
  selectedSize: "X-Small",
  selectedColor: "GREEN",
  selectedFabric: "Scuba"
};


// product details data for different product IDs
export const productDetailsData = {
  1: {
    id: 1,
    title: "Crew Neck Tee Shirt",
    originalPrice: 3850,
    salePrice: 3850,
    discount: 0,
    rating: 5,
    reviews: 12,
       images: [
      "/asset/productInfo/productInfoImg2.webp",
      "/asset/productInfo/productInfoImg1.webp",
      "/asset/productInfo/productInfoImg3.webp",
    ],
    description:
      "The Crew Neck Tee – Olive Green By SAYA Blends Everyday Simplicity With Subtle Sophistication. Crafted From Premium Scuba Fabric, It Offers a Clean Crew Neck Silhouette Coupled With a Soft, Comfortable Fit. The Earthy Olive Green Hue Evokes Effortless Style, Making It Ideal for Everyday Layering, Work Casuals, Or Elevated Off-Duty Looks.",
    features: [
      "Smooth, Premium Scuba Fabric That Balances Structure and Softness",
      "Classic Crew Neck Design for Timeless Versatility",
      "Muted Olive Green Shade for Subtle, Polished Styling",
    ],
    sizes: ["X-Small", "Small", "Medium", "Large"],
    colors: [
      { name: "Olive", hex: "#808000" },
    ],
    inStock: true,
    category: "T-Shirts",
    sku: "98342",
  },
  2: {
    id: 2,
    title: "Crew Neck Tee Shirt – Side View",
    originalPrice: 3850,
    salePrice: 3850,
    discount: 0,
    rating: 4,
    reviews: 8,
    images: [
      "/asset/productInfo/productInfoImg2.webp",
      "/asset/productInfo/productInfoImg1.webp",
      "/asset/productInfo/productInfoImg3.webp",
    ],
    description:
      "A versatile crew neck tee that's perfect for everyday wear. Crafted with attention to detail and designed for maximum comfort.",
    features: [
      "Premium Cotton Blend",
      "Classic Fit",
      "Durable Construction",
      "Easy Care",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Gray", hex: "#808080" },
      { name: "Black", hex: "#000000" },
    ],
    inStock: true,
    category: "T-Shirts",
    sku: "CNT-002",
  },
  3: {
    id: 3,
    title: "Crew Neck Tee Shirt – Back View",
    originalPrice: 3850,
    salePrice: 3850,
    discount: 0,
    rating: 5,
    reviews: 15,
    images: [
      "/asset/productInfo/productInfoImg3.webp",
      "/asset/productInfo/productInfoImg1.webp",
      "/asset/productInfo/productInfoImg2.webp",
    ],
    description:
      "Essential wardrobe staple featuring a clean back design. Made from soft, breathable fabric for all-day comfort.",
    features: [
      "Soft Cotton Fabric",
      "Regular Fit",
      "Tagless Design",
      "Fade Resistant",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Olive", hex: "#808000" },
      { name: "Burgundy", hex: "#800020" },
      { name: "Navy", hex: "#000080" },
    ],
    inStock: true,
    category: "T-Shirts",
    sku: "CNT-003",
  },
  4: {
    id: 4,
    title: "Crew Neck Tee Shirt – Size Chart",
    originalPrice: 3850,
    salePrice: 3850,
    discount: 0,
    rating: 4.5,
    reviews: 10,
    images: [
      "/asset/productInfo/productInfoImg2.webp",
      "/asset/productInfo/productInfoImg1.webp",
      "/asset/productInfo/productInfoImg3.webp",
      "/asset/productInfo/productInfoImg1.webp",
    ],
    description:
      "Find your perfect fit with our comprehensive size guide. This premium tee is designed to provide comfort across all sizes.",
    features: [
      "True to Size",
      "Detailed Size Chart",
      "Consistent Sizing",
      "Quality Assurance",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
    ],
    inStock: true,
    category: "T-Shirts",
    sku: "CNT-004",
  },
};