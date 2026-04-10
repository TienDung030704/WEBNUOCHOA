SET NAMES utf8mb4;
USE webnuochoa;

-- ─── FIX BRANDS descriptions ──────────────────────────────────────────────────
UPDATE brands SET description = 'Thương hiệu nước hoa hàng đầu thế giới đến từ Pháp, nổi tiếng với những mùi hương bất hủ như Chanel No.5.'              WHERE slug = 'chanel';
UPDATE brands SET description = 'Nhà mốt Christian Dior sở hữu dòng nước hoa đẳng cấp với những bestseller như Sauvage, Miss Dior, J''adore.'            WHERE slug = 'dior';
UPDATE brands SET description = 'Thương hiệu Ý mang phong cách xa hoa, độc đáo với bộ sưu tập nước hoa đa dạng.'                                         WHERE slug = 'gucci';
UPDATE brands SET description = 'Biểu tượng của sự sang trọng và gợi cảm, Tom Ford Private Blend là dòng nước hoa được săn đón nhất thế giới.'            WHERE slug = 'tom-ford';
UPDATE brands SET description = 'Thương hiệu thời trang Ý mang đến những mùi hương mạnh mẽ, quyến rũ và đậm chất Địa Trung Hải.'                         WHERE slug = 'versace';
UPDATE brands SET description = 'YSL Beauté nổi tiếng với Black Opium, Libre và Y – những mùi hương đỉnh cao của nghệ thuật nước hoa Pháp.'               WHERE slug = 'ysl';
UPDATE brands SET description = 'Thương hiệu Ý tinh tế với Acqua di Giò và Sì – biểu tượng của sự thanh lịch, hiện đại và trường tồn.'                   WHERE slug = 'giorgio-armani';
UPDATE brands SET description = 'Dòng Replica của Maison Margiela tái hiện những khoảnh khắc đáng nhớ qua mùi hương, nổi bật với Lazy Sunday Morning và Jazz Club.' WHERE slug = 'maison-margiela';

-- ─── FIX CATEGORIES ───────────────────────────────────────────────────────────
UPDATE categories SET description = 'Bộ sưu tập nước hoa dành cho nam giới'       WHERE slug = 'nuoc-hoa-nam';
UPDATE categories SET description = 'Bộ sưu tập nước hoa dành cho nữ giới'        WHERE slug = 'nuoc-hoa-nu';
UPDATE categories SET description = 'Bộ sưu tập nước hoa dành cho mọi giới tính'  WHERE slug = 'nuoc-hoa-unisex';

-- ─── FIX PRODUCTS (xóa & insert lại với đúng charset) ─────────────────────────
DELETE FROM product_variants;
DELETE FROM products;

INSERT INTO products
  (name, slug, shortDescription, brandId, categoryId, concentration, gender, originCountry,
   topNotes, middleNotes, baseNotes, longevity, sillage, isFeatured, isActive, createdAt, updatedAt)
VALUES
-- Chanel
('Chanel No.5 EDP',
 'chanel-no5-edp',
 'Huyền thoại nước hoa nữ mọi thời đại',
 1, 2, 'EDP', 'FEMALE', 'Pháp',
 'Aldehyde, Chanh bergamot, Neroli',
 'Hoa hồng, Hoa nhài, Diên vĩ',
 'Xạ hương, Gỗ đàn hương, Vani',
 8, 4, 1, 1, NOW(), NOW()),

('Chanel Bleu de Chanel EDP',
 'chanel-bleu-de-chanel-edp',
 'Mùi hương gỗ thơm lịch lãm dành cho nam',
 1, 1, 'EDP', 'MALE', 'Pháp',
 'Chanh, Gừng, Tiêu hồng',
 'Hoa nhài, Nhục đậu khấu, Iso E Super',
 'Gỗ đàn hương, Gỗ tuyết tùng, Hổ phách',
 8, 4, 1, 1, NOW(), NOW()),

-- Dior
('Dior Sauvage EDP',
 'dior-sauvage-edp',
 'Biểu tượng nước hoa nam của thời đại mới',
 2, 1, 'EDP', 'MALE', 'Pháp',
 'Hạt tiêu Sichuan, Chanh bergamot',
 'Lavender, Tiêu',
 'Ambroxan, Gỗ tuyết tùng, Labdanum',
 10, 5, 1, 1, NOW(), NOW()),

('Dior Miss Dior EDP',
 'dior-miss-dior-edp',
 'Tinh tế, lãng mạn – biểu tượng nước hoa nữ của Dior',
 2, 2, 'EDP', 'FEMALE', 'Pháp',
 'Hoa hồng cánh cung, Chanh bergamot',
 'Peony, Grasse Rose',
 'Xạ hương trắng, Hổ phách, Gỗ đàn hương',
 7, 3, 1, 1, NOW(), NOW()),

-- Gucci
('Gucci Guilty EDP',
 'gucci-guilty-edp',
 'Nước hoa nữ táo bạo, gợi cảm mang phong cách Ý',
 3, 2, 'EDP', 'FEMALE', 'Ý',
 'Hoa cam, Chanh bergamot, Hoa oải hương',
 'Hoa hồng, Hoa đào',
 'Xạ hương, Gỗ đàn hương, Hổ phách',
 7, 3, 0, 1, NOW(), NOW()),

-- Tom Ford
('Tom Ford Black Orchid EDP',
 'tom-ford-black-orchid-edp',
 'Huyền bí, đen và quyến rũ — kiệt tác của Tom Ford',
 4, 3, 'EDP', 'UNISEX', 'Mỹ',
 'Nấm truffle, Bergamot, Hoa cúc Pháp',
 'Hoa lan đen, Hoa sen',
 'Patchouli đen, Vanilla, Nhựa cây benzoin',
 10, 5, 1, 1, NOW(), NOW()),

('Tom Ford Oud Wood EDP',
 'tom-ford-oud-wood-edp',
 'Gỗ trầm hương quý hiếm trong dòng Private Blend',
 4, 3, 'EDP', 'UNISEX', 'Mỹ',
 'Hoa hồi, Cardamom, Tiêu Sichuan',
 'Gỗ oud, Gỗ tuyết tùng, Gỗ đàn hương',
 'Vani, Hổ phách, Tonka bean',
 12, 4, 1, 1, NOW(), NOW()),

-- Versace
('Versace Eros EDT',
 'versace-eros-edt',
 'Mùi hương nam mạnh mẽ lấy cảm hứng từ thần tình yêu Eros',
 5, 1, 'EDT', 'MALE', 'Ý',
 'Bạc hà, Táo xanh, Chanh',
 'Tonka bean, Hoa nhài, Geranium',
 'Vanilla, Vetiver, Gỗ tuyết tùng',
 7, 4, 0, 1, NOW(), NOW()),

-- YSL
('YSL Black Opium EDP',
 'ysl-black-opium-edp',
 'Nước hoa nữ quyến rũ với hương cà phê đen và vanilla',
 6, 2, 'EDP', 'FEMALE', 'Pháp',
 'Hoa cam hồng, Lê',
 'Cà phê đen, Hoa nhài, Cam bergamot',
 'Vanilla, Patchouli, Gỗ tuyết tùng',
 8, 4, 1, 1, NOW(), NOW()),

('YSL Libre EDP',
 'ysl-libre-edp',
 'Tự do và mạnh mẽ — tinh thần phụ nữ hiện đại',
 6, 2, 'EDP', 'FEMALE', 'Pháp',
 'Lavender Marocco, Mandarin',
 'Tuberose, Hoa cam',
 'Xạ hương, Ambergris, Vanilla Bourbon',
 8, 4, 0, 1, NOW(), NOW()),

-- Giorgio Armani
('Armani Acqua di Gio EDT',
 'armani-acqua-di-gio-edt',
 'Hương biển mát lành, biểu tượng nước hoa nam thập niên 90',
 7, 1, 'EDT', 'MALE', 'Ý',
 'Chanh Sicily, Lá limes, Bergamot',
 'Hyacinth, Sage, Jasmine biển',
 'Gỗ tuyết tùng, Xạ hương, Amber',
 6, 3, 0, 1, NOW(), NOW()),

('Armani Si EDP',
 'armani-si-edp',
 'Quyến rũ, hiện đại và tao nhã – dành cho phụ nữ mạnh mẽ',
 7, 2, 'EDP', 'FEMALE', 'Ý',
 'Nước hoa hồng, Berries đen',
 'Hoa hồng, Freesia',
 'Vanilla, Xạ hương trắng, Gỗ đàn hương',
 7, 3, 0, 1, NOW(), NOW()),

-- Maison Margiela
('Maison Margiela Replica Jazz Club EDT',
 'maison-margiela-replica-jazz-club-edt',
 'Hơi ấm của quán jazz ban đêm — rum, thuốc lá và gỗ',
 8, 3, 'EDT', 'UNISEX', 'Pháp',
 'Hạt tiêu hồng, Neroli, Tiểu hồi',
 'Clary sage, Hoa ylang-ylang',
 'Rum, Thuốc lá, Vanilla, Gỗ đàn hương',
 8, 3, 1, 1, NOW(), NOW()),

('Maison Margiela Replica Lazy Sunday Morning EDT',
 'maison-margiela-replica-lazy-sunday-morning-edt',
 'Sáng Chủ nhật thư giãn — hương sữa, xạ hương và hoa tinh khiết',
 8, 3, 'EDT', 'UNISEX', 'Pháp',
 'Ý dĩ, Mộc lan',
 'Hoa hồng, Xạ hương',
 'Xạ hương trắng, Vải bông, Kem sữa',
 6, 2, 0, 1, NOW(), NOW());

-- ─── RE-INSERT VARIANTS ───────────────────────────────────────────────────────
INSERT INTO product_variants (productId, volume, price, stock, sku)
SELECT p.id, v.volume, v.price, v.stock, v.sku
FROM products p
JOIN (
  SELECT 'chanel-no5-edp' AS slug, 35 AS volume, 2800000 AS price, 50 AS stock, 'CHA-NO5-35' AS sku   UNION ALL
  SELECT 'chanel-no5-edp', 50, 3800000, 80, 'CHA-NO5-50'    UNION ALL
  SELECT 'chanel-no5-edp', 100, 5500000, 40, 'CHA-NO5-100'  UNION ALL
  SELECT 'chanel-bleu-de-chanel-edp', 50, 3900000, 60, 'CHA-BDC-50'   UNION ALL
  SELECT 'chanel-bleu-de-chanel-edp', 100, 5800000, 45, 'CHA-BDC-100' UNION ALL
  SELECT 'dior-sauvage-edp', 60, 3500000, 100, 'DIO-SAU-60'  UNION ALL
  SELECT 'dior-sauvage-edp', 100, 5200000, 70, 'DIO-SAU-100' UNION ALL
  SELECT 'dior-sauvage-edp', 200, 8500000, 20, 'DIO-SAU-200' UNION ALL
  SELECT 'dior-miss-dior-edp', 30, 2500000, 60, 'DIO-MD-30'   UNION ALL
  SELECT 'dior-miss-dior-edp', 50, 3600000, 80, 'DIO-MD-50'   UNION ALL
  SELECT 'dior-miss-dior-edp', 100, 5300000, 50, 'DIO-MD-100' UNION ALL
  SELECT 'gucci-guilty-edp', 50, 2900000, 45, 'GUC-GUI-50' UNION ALL
  SELECT 'gucci-guilty-edp', 90, 4200000, 30, 'GUC-GUI-90' UNION ALL
  SELECT 'tom-ford-black-orchid-edp', 50, 5500000, 30, 'TF-BO-50'    UNION ALL
  SELECT 'tom-ford-black-orchid-edp', 100, 8800000, 20, 'TF-BO-100'  UNION ALL
  SELECT 'tom-ford-oud-wood-edp', 50, 7200000, 25, 'TF-OW-50'    UNION ALL
  SELECT 'tom-ford-oud-wood-edp', 100, 11500000, 15, 'TF-OW-100' UNION ALL
  SELECT 'versace-eros-edt', 50, 1800000, 80, 'VER-ERO-50'   UNION ALL
  SELECT 'versace-eros-edt', 100, 2700000, 60, 'VER-ERO-100' UNION ALL
  SELECT 'versace-eros-edt', 200, 4200000, 25, 'VER-ERO-200' UNION ALL
  SELECT 'ysl-black-opium-edp', 30, 2200000, 60, 'YSL-BO-30' UNION ALL
  SELECT 'ysl-black-opium-edp', 50, 3100000, 70, 'YSL-BO-50' UNION ALL
  SELECT 'ysl-black-opium-edp', 90, 4600000, 40, 'YSL-BO-90' UNION ALL
  SELECT 'ysl-libre-edp', 30, 2400000, 50, 'YSL-LIB-30' UNION ALL
  SELECT 'ysl-libre-edp', 50, 3400000, 60, 'YSL-LIB-50' UNION ALL
  SELECT 'ysl-libre-edp', 90, 5000000, 30, 'YSL-LIB-90' UNION ALL
  SELECT 'armani-acqua-di-gio-edt', 50, 1900000, 90, 'ARM-ADG-50'   UNION ALL
  SELECT 'armani-acqua-di-gio-edt', 100, 2800000, 70, 'ARM-ADG-100' UNION ALL
  SELECT 'armani-acqua-di-gio-edt', 200, 4400000, 30, 'ARM-ADG-200' UNION ALL
  SELECT 'armani-si-edp', 30, 2100000, 55, 'ARM-SI-30'  UNION ALL
  SELECT 'armani-si-edp', 50, 3000000, 65, 'ARM-SI-50'  UNION ALL
  SELECT 'armani-si-edp', 100, 4500000, 40, 'ARM-SI-100' UNION ALL
  SELECT 'maison-margiela-replica-jazz-club-edt', 30, 1900000, 40, 'MM-JC-30'   UNION ALL
  SELECT 'maison-margiela-replica-jazz-club-edt', 100, 4200000, 35, 'MM-JC-100' UNION ALL
  SELECT 'maison-margiela-replica-lazy-sunday-morning-edt', 30, 1800000, 35, 'MM-LSM-30'  UNION ALL
  SELECT 'maison-margiela-replica-lazy-sunday-morning-edt', 100, 3900000, 30, 'MM-LSM-100'
) AS v ON p.slug = v.slug;
