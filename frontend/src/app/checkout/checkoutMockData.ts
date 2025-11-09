import { PaymentMethod } from '../types/checkout';

// Data passed as props to the root component
export const mockRootProps = {
  
  orderDetails: {
    orderNumber: "140578887001028745" as const,
    productName: "2021 Customized Students Bags ..." as const,
    productImage: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHN0dWRlbnQlMjBiYWclMjBzY2hvb2wlMjBiYWd8ZW58MHwyfHx8MTc2MTU4MjE2MHww&ixlib=rb-4.1.0&q=85" as const,
    quantity: 22 as const,
    unitPrice: 2890 as const,
    productAmount: 63580 as const,
    logisticsFee: 2500 as const,
    transactionFee: 1500 as const,
    totalAmount: 67580 as const
  },


  paymentMethods: [
    {
      id: PaymentMethod.CREDIT_DEBIT_CARD,
      name: "Credit/Debit Card" as const,
      logos: ["visa", "mastercard", "amex", "discover", "jcb", "diners"] as const,
      enabled: true as const,
      selected: true as const
    }
  ],

  payFromCountry: {
    name: "Pakistan" as const,
    code: "PK" as const,
    flagUrl: "" as const
  }
};