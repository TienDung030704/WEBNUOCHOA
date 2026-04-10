export function buildGalleryImages(product) {
  if (!product) return [];

  return [
    ...(product.thumbnail
      ? [{ url: product.thumbnail, altText: product.name ?? "" }]
      : []),
    ...(product.images ?? []),
  ];
}

export const getNextIndex = (current, total, step = 1) =>
  total > 0 ? (current + step + total) % total : 0;
