"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { 
  setSelectedPaymentMethod, 
  setPayFromCountry, 
  setProcessing,
  setPaymentError,
  setPaymentSuccess 
} from "../slices/checkoutSlice";
import type { PaymentMethod } from "../types/checkout";
import CheckoutHeader from "../components/checkout/CheckoutHeader";
import PaymentMethodList from "../components/checkout/PaymentMethodList";
import CardPaymentForm from "../components/checkout/CardPaymentForm";
import OrderSummaryCard from "../components/checkout/OrderSummaryCard";
import { mockRootProps } from "./checkoutMockData";
import axios from "axios";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const { 
    selectedPaymentMethod, 
    payFromCountry, 
    isProcessing,
    cardDetails,
    paymentError,
    paymentSuccess 
  } = useSelector((state: RootState) => state.checkout);

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    dispatch(setSelectedPaymentMethod(method));
  };

  const handleCountryChange = (countryCode: string) => {
    dispatch(setPayFromCountry(countryCode));
  };

  const validateCardDetails = () => {
    const errors: string[] = [];

    if (!cardDetails.cardNumber || cardDetails.cardNumber.replace(/\s/g, "").length !== 16) {
      errors.push("Valid card number is required");
    }

    if (!cardDetails.cardHolderName || cardDetails.cardHolderName.trim().length < 3) {
      errors.push("Card holder name is required");
    }

    if (!cardDetails.expiryMonth) {
      errors.push("Expiry month is required");
    }

    if (!cardDetails.expiryYear) {
      errors.push("Expiry year is required");
    }

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const expYear = parseInt(cardDetails.expiryYear);
    const expMonth = parseInt(cardDetails.expiryMonth);

    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
      errors.push("Card has expired");
    }

    if (!cardDetails.cvv || cardDetails.cvv.length < 3) {
      errors.push("Valid CVV is required");
    }

    return errors;
  };

  const handlePayNow = async () => {
    dispatch(setPaymentError(null));
    dispatch(setPaymentSuccess(false));

    const validationErrors = validateCardDetails();
    if (validationErrors.length > 0) {
      dispatch(setPaymentError(validationErrors.join(", ")));
      return;
    }

    dispatch(setProcessing(true));

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/payment/process`,
        {
          cardDetails: {
            cardNumber: cardDetails.cardNumber.replace(/\s/g, ""),
            cardHolderName: cardDetails.cardHolderName,
            expiryMonth: cardDetails.expiryMonth,
            expiryYear: cardDetails.expiryYear,
            cvv: cardDetails.cvv,
          },
          orderDetails: mockRootProps.orderDetails,
          country: "Pakistan",
        }
      );

      if (response.data.success) {
        dispatch(setPaymentSuccess(true));
        dispatch(setPaymentError(null));
        alert(`Payment successful! Transaction ID: ${response.data.transactionId}`);
      } else {
        dispatch(setPaymentError(response.data.message || "Payment failed"));
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Payment processing failed. Please try again.";
      dispatch(setPaymentError(errorMessage));
    } finally {
      dispatch(setProcessing(false));
    }
  };

  return (
    <div className="min-h-screen bg-checkout-gray-50">
      {/* Header */}
      {/* <CheckoutHeader
        countryName={mockRootProps.payFromCountry.name}
        countryCode={mockRootProps.payFromCountry.code}
        onCountryChange={handleCountryChange}
      /> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Payment Methods */}
          <div className="lg:col-span-2 space-y-6">
            <PaymentMethodList
              paymentMethods={mockRootProps.paymentMethods.filter(
                (method) => method.id === "credit_debit_card"
              )}
              selectedMethod={selectedPaymentMethod}
              onSelectMethod={handlePaymentMethodChange}
            />

            {/* Card Payment Form */}
            <CardPaymentForm />

            {/* Payment Error */}
            {paymentError && (
              <div className="bg-red-50 border-2 border-saya-red rounded-checkout-card p-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-saya-red flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm text-saya-red font-medium">{paymentError}</p>
                </div>
              </div>
            )}

            {/* Payment Success */}
            {paymentSuccess && (
              <div className="bg-security-green-light border-2 border-security-green rounded-checkout-card p-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-security-green flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm text-security-green font-medium">
                    Payment processed successfully!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummaryCard
              orderDetails={mockRootProps.orderDetails}
              onPayNow={handlePayNow}
              isProcessing={isProcessing}
            />
          </div>
        </div>
      </div>
    </div>
  );
}