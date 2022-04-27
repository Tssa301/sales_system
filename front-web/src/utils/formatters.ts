export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('usd', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString();
};

export const formatDateToServer = (date?: Date) => {
  if (date) {
    return date?.toISOString().substring(0, 10);
  }
};
