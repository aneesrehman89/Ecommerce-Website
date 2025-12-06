import Product from "../models/productModel.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// @desc    Create a new product
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = async (req, res) => {
  try {
    const {
      title,
      price,
      discountPrice,
      currency,
      description,
      sku,
      status,
      category,
      stockQuantity,
      stockUnit,
      tags,
      showOnStoreFront
    } = req.body;

    // Check if product with SKU already exists
    const existingProduct = await Product.findOne({ sku });
    if (existingProduct) {
      return res.status(400).json({ message: "Product with this SKU already exists" });
    }

    // Handle uploaded files
    const mediaFiles = [];
    if (req.files && req.files.length > 0) {
      req.files.forEach((file, index) => {
        mediaFiles.push({
          id: `media-${Date.now()}-${index}`,
          type: 'image',
          url: `/uploads/products/${file.filename}`,
          isPrimary: index === 0
        });
      });
    }

    // Parse tags if it's a string
    let parsedTags = tags;
    if (typeof tags === 'string') {
      try {
        parsedTags = JSON.parse(tags);
      } catch (e) {
        parsedTags = tags.split(',').map(tag => tag.trim());
      }
    }

    const product = await Product.create({
      title,
      price: Number(price),
      discountPrice: discountPrice ? Number(discountPrice) : undefined,
      currency,
      description,
      sku,
      status,
      category,
      stockQuantity: Number(stockQuantity),
      stockUnit,
      tags: parsedTags || [],
      showOnStoreFront: showOnStoreFront === 'true' || showOnStoreFront === true,
      mediaFiles
    });

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error("Create product error:", error);
    res.status(500).json({ 
      success: false,
      message: error.message || "Server error during product creation" 
    });
  }
};

// @desc    Get all products with filters
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    const { search, status, category, page = 1, limit = 10 } = req.query;

    // Build query
    const query = {};
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } },
        { sku: { $regex: search, $options: 'i' } }
      ];
    }

    if (status && status !== 'All Status') {
      query.status = status;
    }

    if (category && category !== 'All Categories') {
      query.category = category;
    }

    // Execute query with pagination
    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    const total = await Product.countDocuments(query);

    res.status(200).json({
      success: true,
      data: products,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error("Get products error:", error);
    res.status(500).json({ 
      success: false,
      message: error.message || "Server error fetching products" 
    });
  }
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ 
        success: false,
        message: "Product not found" 
      });
    }

    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error("Get product error:", error);
    res.status(500).json({ 
      success: false,
      message: error.message || "Server error fetching product" 
    });
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private/Admin
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ 
        success: false,
        message: "Product not found" 
      });
    }

    const {
      title,
      price,
      discountPrice,
      currency,
      description,
      sku,
      status,
      category,
      stockQuantity,
      stockUnit,
      tags,
      showOnStoreFront,
      existingMediaFiles
    } = req.body;

    // Check if new SKU conflicts with another product
    if (sku && sku !== product.sku) {
      const existingProduct = await Product.findOne({ sku });
      if (existingProduct) {
        return res.status(400).json({ 
          success: false,
          message: "Product with this SKU already exists" 
        });
      }
    }

    // Handle media files
    let mediaFiles = [];
    
    // Parse existing media files if provided
    if (existingMediaFiles) {
      try {
        mediaFiles = typeof existingMediaFiles === 'string' 
          ? JSON.parse(existingMediaFiles) 
          : existingMediaFiles;
      } catch (e) {
        console.error("Error parsing existing media files:", e);
      }
    }

    // Add new uploaded files
    if (req.files && req.files.length > 0) {
      req.files.forEach((file, index) => {
        mediaFiles.push({
          id: `media-${Date.now()}-${index}`,
          type: 'image',
          url: `/uploads/products/${file.filename}`,
          isPrimary: mediaFiles.length === 0 && index === 0
        });
      });
    }

    // Parse tags if it's a string
    let parsedTags = tags;
    if (typeof tags === 'string') {
      try {
        parsedTags = JSON.parse(tags);
      } catch (e) {
        parsedTags = tags.split(',').map(tag => tag.trim());
      }
    }

    // Update product
    product.title = title || product.title;
    product.price = price !== undefined ? Number(price) : product.price;
    product.discountPrice = discountPrice !== undefined ? (discountPrice ? Number(discountPrice) : undefined) : product.discountPrice;
    product.currency = currency || product.currency;
    product.description = description !== undefined ? description : product.description;
    product.sku = sku || product.sku;
    product.status = status || product.status;
    product.category = category || product.category;
    product.stockQuantity = stockQuantity !== undefined ? Number(stockQuantity) : product.stockQuantity;
    product.stockUnit = stockUnit || product.stockUnit;
    product.tags = parsedTags !== undefined ? parsedTags : product.tags;
    product.showOnStoreFront = showOnStoreFront !== undefined 
      ? (showOnStoreFront === 'true' || showOnStoreFront === true)
      : product.showOnStoreFront;
    product.mediaFiles = mediaFiles.length > 0 ? mediaFiles : product.mediaFiles;

    const updatedProduct = await product.save();

    res.status(200).json({
      success: true,
      data: updatedProduct
    });
  } catch (error) {
    console.error("Update product error:", error);
    res.status(500).json({ 
      success: false,
      message: error.message || "Server error updating product" 
    });
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private/Admin
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ 
        success: false,
        message: "Product not found" 
      });
    }

    // Delete associated media files
    if (product.mediaFiles && product.mediaFiles.length > 0) {
      product.mediaFiles.forEach(media => {
        const filePath = path.join(__dirname, '..', media.url);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully"
    });
  } catch (error) {
    console.error("Delete product error:", error);
    res.status(500).json({ 
      success: false,
      message: error.message || "Server error deleting product" 
    });
  }
};