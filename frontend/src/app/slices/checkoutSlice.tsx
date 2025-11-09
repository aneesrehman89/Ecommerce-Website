import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { PaymentMethod, type CardDetails } from "../types/checkout";

export interface CheckoutState {
  selectedPaymentMethod: PaymentMethod | null;
  payFromCountry: string;
  isProcessing: boolean;
  cardDetails: CardDetails;
  paymentError: string | null;
  paymentSuccess: boolean;
}

const initialState: CheckoutState = {
  selectedPaymentMethod: PaymentMethod.CREDIT_DEBIT_CARD,
  payFromCountry: "PK",
  isProcessing: false,
  cardDetails: {
    cardNumber: "",
    cardHolderName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  },
  paymentError: null,
  paymentSuccess: false,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setSelectedPaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
      state.selectedPaymentMethod = action.payload;
    },
    setPayFromCountry: (state, action: PayloadAction<string>) => {
      state.payFromCountry = action.payload;
    },
    setProcessing: (state, action: PayloadAction<boolean>) => {
      state.isProcessing = action.payload;
    },
    setCardDetails: (state, action: PayloadAction<Partial<CardDetails>>) => {
      state.cardDetails = { ...state.cardDetails, ...action.payload };
    },
    setPaymentError: (state, action: PayloadAction<string | null>) => {
      state.paymentError = action.payload;
    },
    setPaymentSuccess: (state, action: PayloadAction<boolean>) => {
      state.paymentSuccess = action.payload;
    },
    resetCheckout: (state) => {
      state.selectedPaymentMethod = PaymentMethod.CREDIT_DEBIT_CARD;
      state.payFromCountry = "PK";
      state.isProcessing = false;
      state.cardDetails = {
        cardNumber: "",
        cardHolderName: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
      };
      state.paymentError = null;
      state.paymentSuccess = false;
    },
  },
});

export const {
  setSelectedPaymentMethod,
  setPayFromCountry,
  setProcessing,
  setCardDetails,
  setPaymentError,
  setPaymentSuccess,
  resetCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;