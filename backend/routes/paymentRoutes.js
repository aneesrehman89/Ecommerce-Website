import express from "express";
import { processPayment, getPaymentStatus } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/process", processPayment);
router.get("/status/:transactionId", getPaymentStatus);

export default router;