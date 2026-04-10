USE webnuochoa;

-- ─── UPDATE PRODUCT THUMBNAILS ───────────────────────────────────────────────
-- Cập nhật thumbnail cho các sản phẩm dựa trên slug

UPDATE products SET thumbnail = 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop&crop=center' WHERE slug = 'chanel-no5-edp';

UPDATE products SET thumbnail = 'https://images.unsplash.com/photo-1558618047-51c0c8a82ba8?w=500&h=500&fit=crop&crop=center' WHERE slug = 'chanel-bleu-de-chanel-edp';

UPDATE products SET thumbnail = 'https://images.unsplash.com/photo-1594736797933-d0981ba8fe89?w=500&h=500&fit=crop&crop=center' WHERE slug = 'dior-sauvage-edp';

UPDATE products SET thumbnail = 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=500&h=500&fit=crop&crop=center' WHERE slug = 'dior-miss-dior-edp';

UPDATE products SET thumbnail = 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop&crop=center' WHERE slug = 'gucci-guilty-edp';

UPDATE products SET thumbnail = 'https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?w=500&h=500&fit=crop&crop=center' WHERE slug = 'tom-ford-black-orchid-edp';

UPDATE products SET thumbnail = 'https://images.unsplash.com/photo-1577221866411-1c77af8d81b3?w=500&h=500&fit=crop&crop=center' WHERE slug = 'tom-ford-oud-wood-edp';

UPDATE products SET thumbnail = 'https://images.unsplash.com/photo-1619709114329-b595101c5342?w=500&h=500&fit=crop&crop=center' WHERE slug = 'versace-eros-edt';

UPDATE products SET thumbnail = 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500&h=500&fit=crop&crop=center' WHERE slug = 'ysl-black-opium-edp';

UPDATE products SET thumbnail = 'https://images.unsplash.com/photo-1588134818669-d7b6bd76e41f?w=500&h=500&fit=crop&crop=center' WHERE slug = 'ysl-libre-edp';

UPDATE products SET thumbnail = 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&h=500&fit=crop&crop=center' WHERE slug = 'armani-acqua-di-gio-edt';

UPDATE products SET thumbnail = 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&h=500&fit=crop&crop=center' WHERE slug = 'armani-si-edp';

UPDATE products SET thumbnail = 'https://images.unsplash.com/photo-1564805356-b7b334b50b2c?w=500&h=500&fit=crop&crop=center' WHERE slug = 'maison-margiela-replica-jazz-club-edt';

UPDATE products SET thumbnail = 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&h=500&fit=crop&crop=center' WHERE slug = 'maison-margiela-replica-lazy-sunday-morning-edt';

-- Kiểm tra kết quả
SELECT id, name, slug, thumbnail FROM products ORDER BY id;