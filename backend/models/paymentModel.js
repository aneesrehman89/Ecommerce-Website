import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      required: true,
      unique: true,
    },
    orderId: {
      type: String,
      required: true,
    },
    cardHolderName: {
      type: String,
      required: true,
    },
    cardLastFourDigits: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      default: "PKR",
    },
    country: {
      type: String,
      default: "Pakistan",
    },
    status: {
      type: String,
      enum: ["pending", "processing", "completed", "failed"],
      default: "pending",
    },
    orderDetails: {
      productName: String,
      quantity: Number,
      unitPrice: Number,
      productAmount: Number,
      logisticsFee: Number,
      transactionFee: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;