import mongoose from "mongoose";

const mediaFileSchema = mongoose.Schema({
  id: { type: String, required: true },
  type: { type: String, enum: ['image', 'video'], required: true },
  url: { type: String, required: true },
  isPrimary: { type: Boolean, default: false }
});

const productSchema = mongoose.Schema(
  {
    title: { 
      type: String, 
      required: [true, "Product title is required"],
      trim: true
    },
    price: { 
      type: Number, 
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"]
    },
    discountPrice: {
      type: Number,
      min: [0, "Discount price cannot be negative"]
    },
    currency: { 
      type: String, 
      enum: ['PKR (₨)'],
      default: 'PKR (₨)'
    },
    description: { 
      type: String,
      trim: true
    },
    sku: { 
      type: String, 
      required: [true, "SKU is required"],
      unique: true,
      trim: true
    },
    status: { 
      type: String, 
      enum: ['Active', 'Inactive', 'Draft'],
      default: 'Active'
    },
    category: { 
      type: String, 
      enum: [
        'Default',
        'Bridal Lehengas',
        'Bridal Maxi/Gowns',
        'Bridal Sharara/Gharara',
        'Bridal Sarees',
        'Bridal Suits'
      ],
      default: 'Default'
    },
    stockQuantity: { 
      type: Number, 
      default: 0,
      min: [0, "Stock quantity cannot be negative"]
    },
    stockUnit: { 
      type: String, 
      enum: ['Units', 'Pieces', 'Items'],
      default: 'Units'
    },
    tags: [{ 
      type: String,
      trim: true
    }],
    showOnStoreFront: { 
      type: Boolean, 
      default: true 
    },
    mediaFiles: [mediaFileSchema]
  },
  { 
    timestamps: true 
  }
);

// Index for faster queries
productSchema.index({ category: 1, status: 1 });
productSchema.index({ sku: 1 });

export default mongoose.model("Product", productSchema);