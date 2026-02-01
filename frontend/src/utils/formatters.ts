// Format currency with PKR symbol and amount
export const formatCurrency = (amount: number): string => {
  return `Rs ${amount.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

// Format price with PKR symbol and commas (no decimals)
export const formatPrice = (amount: number): string => {
  return amount.toLocaleString('en-PK');
};

// Calculate discount percentage
export const calculateDiscountPercentage = (
  originalPrice: number,
  discountPrice: number
): number => {
  if (originalPrice <= 0 || discountPrice >= originalPrice) return 0;
  return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
};

// Format order number
export const formatOrderNumber = (orderNo: string): string => {
  return `Order No. ${orderNo}`;
};

// Format time duration
export const formatDuration = (hours: string): string => {
  return `${hours} hours`;
};