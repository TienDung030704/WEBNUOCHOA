# Cập nhật Thumbnail cho Sản phẩm - Web Nước Hoa

## Tổng quan

Đã thêm thành công thumbnail (ảnh đại diện) cho tất cả 14 sản phẩm nước hoa trong database.

Tài liệu này mô tả riêng phần cập nhật dữ liệu thumbnail/seed, không phải snapshot đầy đủ cấu trúc codebase hiện tại. Snapshot codebase mới nhất nằm trong `docs/codebase-overview.md`.

## Những thay đổi đã thực hiện

### 1. Thêm dữ liệu Brands (thương hiệu)

Đã thêm 8 thương hiệu nước hoa nổi tiếng vào bảng `brands`:

- **Chanel** - Thương hiệu nước hoa xa xỉ của Pháp
- **Dior** - Nhà mốt Pháp nổi tiếng với nước hoa cao cấp
- **Gucci** - Thương hiệu thời trang và nước hoa Ý
- **Tom Ford** - Nhà thiết kế nước hoa cao cấp người Mỹ
- **Versace** - Thương hiệu thời trang xa xỉ Ý
- **Yves Saint Laurent** - Thương hiệu thời trang và nước hoa Pháp
- **Giorgio Armani** - Nhà thiết kế thời trang và nước hoa Ý
- **Maison Margiela** - Thương hiệu nước hoa nghệ thuật Pháp

### 2. Cập nhật Sản phẩm với Thumbnail

Đã thêm thumbnail cho tất cả 14 sản phẩm:

#### Nước hoa Nam:

- **Chanel Bleu de Chanel EDP** - Mùi hương gỗ thơm lịch lãm
- **Dior Sauvage EDP** - Biểu tượng nước hoa nam thời đại mới
- **Versace Eros EDT** - Mùi hương mạnh mẽ lấy cảm hứng từ thần Eros
- **Armani Acqua di Giò EDT** - Hương biển mát lành thập niên 90

#### Nước hoa Nữ:

- **Chanel No.5 EDP** - Huyền thoại nước hoa nữ mọi thời đại
- **Dior Miss Dior EDP** - Tinh tế, lãng mạn của Dior
- **Gucci Guilty EDP** - Táo bạo, gợi cảm phong cách Ý
- **YSL Black Opium EDP** - Quyến rũ với hương cà phê đen và vanilla
- **YSL Libre EDP** - Tự do và mạnh mẽ, tinh thần phụ nữ hiện đại
- **Armani Sì EDP** - Quyến rũ, hiện đại và tao nhã

#### Nước hoa Unisex:

- **Tom Ford Black Orchid EDP** - Huyền bí, đen và quyến rũ
- **Tom Ford Oud Wood EDP** - Gỗ trầm hương quý hiếm
- **Maison Margiela Jazz Club EDT** - Hơi ấm của quán jazz ban đêm
- **Maison Margiela Lazy Sunday Morning EDT** - Sáng Chủ nhật thư giãn

### 3. Các files đã tạo/cập nhật

#### Files đã tạo:

- `api/prisma/update_thumbnails.sql` - Script cập nhật thumbnail cho sản phẩm hiện tại

#### Files đã cập nhật:

- `api/prisma/seed.sql` - Thêm brands và cập nhật products với thumbnail

## Cách sử dụng

### Để cập nhật database hiện tại:

```sql
-- Chạy script cập nhật thumbnail
SOURCE api/prisma/update_thumbnails.sql;
```

### Để reset database với dữ liệu mới:

```sql
-- Chạy lại seed file đã được cập nhật
SOURCE api/prisma/seed.sql;
```

## Kết quả

- ✅ Tất cả 14 sản phẩm đều có thumbnail
- ✅ Thêm 8 thương hiệu với logo
- ✅ Ảnh sử dụng Unsplash với chất lượng phù hợp (500x500px)
- ✅ Cấu trúc database hoàn chỉnh với brands, products, và product_images

## Lưu ý

- Các link ảnh từ Unsplash là placeholder, trong production nên sử dụng CDN riêng
- Có thể thay đổi URL ảnh theo nhu cầu thực tế
- Đã set kích thước ảnh phù hợp cho web (500x500px cho thumbnail, 800x800px cho ảnh chi tiết)
