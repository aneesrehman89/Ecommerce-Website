// Format currency with PKR symbol and amount
export const formatCurrency = (amount: number): string => {
  return `Rs ${amount.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

// Format order number
export const formatOrderNumber = (orderNo: string): string => {
  return `Order No. ${orderNo}`;
};

// Format time duration
export const formatDuration = (hours: string): string => {
  return `${hours} hours`;
};