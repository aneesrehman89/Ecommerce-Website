

export interface OrderDetails {
  orderNumber: string;
  productName: string;
  productImage: string;
  quantity: number;
  unitPrice: number;
  productAmount: number;
  logisticsFee: number;
  transactionFee: number;
  totalAmount: number;
}

// Payment method types
export enum PaymentMethod {
  CREDIT_DEBIT_CARD = "credit_debit_card",
  PAYPAL = "paypal",
  APPLE_PAY = "apple_pay",
  WIRE_TRANSFER = "wire_transfer",
  TRUSTLY = "trustly",
  GOOGLE_PAY = "google_pay"
}


// Props types (data passed to components)
export interface CheckoutPageProps {
  orderDetails: OrderDetails;
  paymentMethods: PaymentMethodOption[];
  payFromCountry: CountryInfo;
  onPaymentMethodChange?: (methodId: PaymentMethod) => void;
  onCountryChange?: (countryCode: string) => void;
  onPayNow?: () => void;
}

export interface PaymentMethodOption {
  id: PaymentMethod;
  name: string;
  logos?: readonly string[];
  description?: string;
  fundingTime?: string;
  enabled: boolean;
  selected?: boolean;
}

export interface CountryInfo {
  name: string;
  code: string;
  flagUrl: string;
}

// Order status
export enum OrderStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  COMPLETED = "completed",
  FAILED = "failed"
}

// Card payment details
export interface CardDetails {
  cardNumber: string;
  cardHolderName: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
}

// Payment response
export interface PaymentResponse {
  success: boolean;
  message: string;
  transactionId?: string;
  orderId?: string;
}
