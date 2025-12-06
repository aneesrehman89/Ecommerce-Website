import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/productModel.js";
import connectDB from "../config/db.js";

dotenv.config();

const bridalProducts = [
  {
    title: "Royal Red Embroidered Bridal Lehenga",
    price: 125000,
    currency: "PKR (₨)",
    description: "Exquisite red bridal lehenga featuring intricate gold embroidery and traditional craftsmanship. This stunning piece showcases detailed zardozi work, sequins, and stone embellishments. Perfect for the modern bride who wants to embrace traditional elegance on her special day. The lehenga comes with a matching dupatta and blouse, all crafted from premium silk fabric.",
    sku: "BRL-LEH-001",
    status: "Active",
    category: "Bridal Lehengas",
    stockQuantity: 8,
    stockUnit: "Pieces",
    tags: ["Bridal", "Traditional", "Red", "Embroidered", "Luxury", "Wedding"],
    showOnStoreFront: true,
    mediaFiles: [
      {
        id: "media-lehenga-1",
        type: "image",
        url: "https://images.unsplash.com/photo-1709979773998-2655b3dfa124?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVkJTIwYnJpZGFsJTIwbGVoZW5nYSUyMHdpdGglMjBpbnRyaWNhdGUlMjBnb2xkJTIwZW1icm9pZGVyeSUyQyUyMHRyYWRpdGlvbmFsJTIwSW5kaWFuJTIwd2VkZGluZyUyMGRyZXNzJTJDJTIwb3JuYXRlJTIwZGVzaWdufGVufDB8MXx8cmVkfDE3NjUwMTYxODN8MA&ixlib=rb-4.1.0&q=85",
        isPrimary: true
      }
    ]
  },
  {
    title: "Ivory Pearl Bridal Gown",
    price: 95000,
    currency: "PKR (₨)",
    description: "Elegant ivory white bridal gown with delicate pearl embellishments and flowing fabric. This contemporary bridal masterpiece combines Western elegance with Eastern grace. Features a fitted bodice with intricate beadwork, flowing skirt with subtle train, and exquisite pearl detailing throughout. Made from premium satin and organza fabrics for a luxurious feel and stunning silhouette.",
    sku: "BRL-GWN-001",
    status: "Active",
    category: "Bridal Maxi/Gowns",
    stockQuantity: 12,
    stockUnit: "Pieces",
    tags: ["Bridal", "Gown", "Ivory", "Pearl", "Elegant", "Modern", "Wedding"],
    showOnStoreFront: true,
    mediaFiles: [
      {
        id: "media-gown-1",
        type: "image",
        url: "https://images.unsplash.com/photo-1585630874675-f1d794c3d709?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxpdm9yeSUyMHdoaXRlJTIwYnJpZGFsJTIwZ293biUyQyUyMGVsZWdhbnQlMjB3ZWRkaW5nJTIwZHJlc3MlMkMlMjBmbG93aW5nJTIwZmFicmljJTJDJTIwcGVhcmwlMjBkZXRhaWxzJTJDJTIwbHV4dXJ5JTIwYnJpZGFsJTIwd2VhcnxlbnwwfDF8fHdoaXRlfDE3NjUwMTYxODJ8MA&ixlib=rb-4.1.0&q=85",
        isPrimary: true
      }
    ]
  },
  {
    title: "Golden Zari Sharara Set",
    price: 85000,
    currency: "PKR (₨)",
    description: "Traditional Pakistani bridal sharara gharara set with exquisite golden zari work. This festive ensemble features intricate threadwork, sequins, and traditional motifs. The set includes a beautifully embroidered kurta, flowing sharara pants, and a matching dupatta. Crafted from premium silk and adorned with golden zari, this outfit is perfect for mehndi, walima, or reception ceremonies.",
    sku: "BRL-SHR-001",
    status: "Active",
    category: "Bridal Sharara/Gharara",
    stockQuantity: 15,
    stockUnit: "Pieces",
    tags: ["Bridal", "Sharara", "Golden", "Zari", "Traditional", "Pakistani", "Festive"],
    showOnStoreFront: true,
    mediaFiles: [
      {
        id: "media-sharara-1",
        type: "image",
        url: "https://images.unsplash.com/photo-1611250717415-75e39130bbd9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxnb2xkZW4lMjBzaGFyYXJhJTIwZ2hhcmFyYSUyMHNldCUyQyUyMHRyYWRpdGlvbmFsJTIwUGFraXN0YW5pJTIwYnJpZGFsJTIwb3V0Zml0JTJDJTIwemFyaSUyMHdvcmslMkMlMjBmZXN0aXZlJTIwd2VhcnxlbnwwfDF8fHwxNzY1MDE2MTgyfDA&ixlib=rb-4.1.0&q=85",
        isPrimary: true
      }
    ]
  },
  {
    title: "Silk Banarasi Bridal Saree",
    price: 75000,
    currency: "PKR (₨)",
    description: "Luxurious red and gold silk Banarasi bridal saree with ornate traditional border. This timeless piece showcases the finest Banarasi weaving techniques with intricate brocade work, golden zari patterns, and rich silk fabric. The saree features traditional motifs and a heavily embellished pallu. Comes with a matching blouse piece. Perfect for the bride who wants to honor tradition with elegance.",
    sku: "BRL-SAR-001",
    status: "Active",
    category: "Bridal Sarees",
    stockQuantity: 10,
    stockUnit: "Pieces",
    tags: ["Bridal", "Saree", "Banarasi", "Silk", "Traditional", "Red", "Gold"],
    showOnStoreFront: true,
    mediaFiles: [
      {
        id: "media-saree-1",
        type: "image",
        url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw5fHxzaWxrJTIwYmFuYXJhc2klMjBicmlkYWwlMjBzYXJlZSUyQyUyMHJlZCUyMGFuZCUyMGdvbGQlMjB0cmFkaXRpb25hbCUyMEluZGlhbiUyMHdlZGRpbmclMjBzYXJlZSUyQyUyMG9ybmF0ZSUyMGJvcmRlcnxlbnwwfDF8fHJlZHwxNzY1MDE2MTgyfDA&ixlib=rb-4.1.0&q=85",
        isPrimary: true
      }
    ]
  },
  {
    title: "Velvet Maroon Bridal Suit",
    price: 110000,
    currency: "PKR (₨)",
    description: "Opulent velvet maroon bridal suit with intricate embroidery and luxury fabric. This Pakistani wedding masterpiece features premium velvet material adorned with detailed threadwork, sequins, stone embellishments, and traditional motifs. The three-piece ensemble includes an embroidered kurta, matching pants, and a heavily embellished dupatta. Perfect for winter weddings and formal bridal events.",
    sku: "BRL-SUT-001",
    status: "Active",
    category: "Bridal Suits",
    stockQuantity: 6,
    stockUnit: "Pieces",
    tags: ["Bridal", "Suit", "Velvet", "Maroon", "Embroidered", "Luxury", "Pakistani"],
    showOnStoreFront: true,
    mediaFiles: [
      {
        id: "media-suit-1",
        type: "image",
        url: "https://images.pexels.com/photos/27817076/pexels-photo-27817076.jpeg",
        isPrimary: true
      }
    ]
  }
];

const seedProducts = async () => {
  try {
    await connectDB();

    // Clear existing products
    await Product.deleteMany({});
    console.log("Cleared existing products");

    // Insert new products
    const createdProducts = await Product.insertMany(bridalProducts);
    console.log(`Successfully seeded ${createdProducts.length} bridal wear products`);

    console.log("\nSeeded Products:");
    createdProducts.forEach((product) => {
      console.log(`- ${product.title} (${product.category}) - ${product.currency} ${product.price}`);
    });

    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
};

seedProducts();