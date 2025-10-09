import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: String,
    price: Number,
    image: String,
    brand: String,
    category: String,
    countInStock: Number,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
