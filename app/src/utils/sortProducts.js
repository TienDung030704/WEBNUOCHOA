export const SORT_OPTIONS = [
  { key: "newest", label: "Mới nhất" },
  { key: "price_asc", label: "Giá thấp đến cao" },
  { key: "price_desc", label: "Giá cao đến thấp" },
];

const getMinPrice = (product) => {
  if (!product.variants?.length) {
    return Infinity;
  }
  return Math.min(...product.variants.map((v) => Number(v.price)));
};

export function sortProducts(products, sortKey) {
  const list = [...products];
  switch (sortKey) {
    case "newest":
      // id cao hơn = mới hơn (auto-increment)
      return list.sort((a, b) => b.id - a.id);
    case "price_asc":
      return list.sort((a, b) => getMinPrice(a) - getMinPrice(b));
    case "price_desc":
      return list.sort((a, b) => getMinPrice(b) - getMinPrice(a));
    default:
      return list;
  }
}
