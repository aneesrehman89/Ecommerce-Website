import Payment from "../models/paymentModel.js";
import { validateCardNumber, validateCVV, validateExpiryDate } from "../utils/cardValidation.js";

// @desc    Process payment
// @route   POST /api/payment/process
// @access  Public
export const processPayment = async (req, res) => {
  try {
    const { cardDetails, orderDetails, country } = req.body;

    // Validate required fields
    if (!cardDetails || !orderDetails) {
      return res.status(400).json({
        success: false,
        message: "Card details and order details are required",
      });
    }

    // Validate card number
    if (!validateCardNumber(cardDetails.cardNumber)) {
      return res.status(400).json({
        success: false,
        message: "Invalid card number",
      });
    }

    // Validate CVV
    if (!validateCVV(cardDetails.cvv)) {
      return res.status(400).json({
        success: false,
        message: "Invalid CVV",
      });
    }

    // Validate expiry date
    if (!validateExpiryDate(cardDetails.expiryMonth, cardDetails.expiryYear)) {
      return res.status(400).json({
        success: false,
        message: "Card has expired or invalid expiry date",
      });
    }

    // Validate card holder name
    if (!cardDetails.cardHolderName || cardDetails.cardHolderName.trim().length < 3) {
      return res.status(400).json({
        success: false,
        message: "Invalid card holder name",
      });
    }

    // Generate transaction ID
    const transactionId = `TXN${Date.now()}${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

    // Create payment record
    const payment = await Payment.create({
      transactionId,
      orderId: orderDetails.orderNumber,
      cardHolderName: cardDetails.cardHolderName,
      cardLastFourDigits: cardDetails.cardNumber.slice(-4),
      amount: orderDetails.totalAmount,
      currency: "PKR",
      country: country || "Pakistan",
      status: "completed",
      orderDetails: {
        productName: orderDetails.productName,
        quantity: orderDetails.quantity,
        unitPrice: orderDetails.unitPrice,
        productAmount: orderDetails.productAmount,
        logisticsFee: orderDetails.logisticsFee,
        transactionFee: orderDetails.transactionFee,
      },
    });

    // In a real application, you would integrate with a payment gateway here
    // For now, we'll simulate a successful payment
    // The payment will be stored in your MongoDB database

    res.status(200).json({
      success: true,
      message: "Payment processed successfully",
      transactionId: payment.transactionId,
      orderId: payment.orderId,
      amount: payment.amount,
      currency: payment.currency,
    });
  } catch (error) {
    console.error("Payment processing error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Payment processing failed",
    });
  }
};

// @desc    Get payment status
// @route   GET /api/payment/status/:transactionId
// @access  Public
export const getPaymentStatus = async (req, res) => {
  try {
    const { transactionId } = req.params;

    const payment = await Payment.findOne({ transactionId });

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    res.status(200).json({
      success: true,
      payment: {
        transactionId: payment.transactionId,
        orderId: payment.orderId,
        amount: payment.amount,
        currency: payment.currency,
        status: payment.status,
        createdAt: payment.createdAt,
      },
    });
  } catch (error) {
    console.error("Get payment status error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to get payment status",
    });
  }
};