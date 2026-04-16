/**
 * Chuyển chuỗi tiếng Việt thành slug URL-friendly.
 * VD: "Chanel No.5" → "chanel-no5"
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
