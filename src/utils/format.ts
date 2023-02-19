export const formatToUSD = (
  value?: number | bigint,
  maximumFractionDigits?: number
): string => {
  const usd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: maximumFractionDigits || 2,
  });

  return usd.format(value || 0);
};

export const formatNumber = (value?: number): string => {
  return new Intl.NumberFormat().format(value || 0);
};

export const formatPercentage = (
  value?: number,
  maximumFractionDigits?: number
): string => {
  const percentage = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: maximumFractionDigits || 2,
  });

  return percentage.format((value || 0) / 100);
};

export const shouldAddDecimals = (value: number): number => (value < 1 ? 4 : 2);
