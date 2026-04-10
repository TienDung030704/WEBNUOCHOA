export const formatPrice = (num) => {
  if (!num || Number(num) === 0) return "Liên hệ";
  return Number(num).toLocaleString("vi-VN") + " đ";
};

export const formatVariantPrice = (variants) => {
  if (!variants?.length) return "Liên hệ";
  const min = Math.min(...variants.map((v) => Number(v.price)));
  if (!min || min === 0) return "Liên hệ";
  return min.toLocaleString("vi-VN") + " đ";
};
