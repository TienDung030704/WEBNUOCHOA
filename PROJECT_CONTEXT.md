# PROJECT_CONTEXT.md — DUWNG Perfume

> Tài liệu ngữ cảnh dành cho các lần làm việc sau với AI. Nội dung mô tả mã nguồn và cấu hình của kho dự án được rà soát ngày 02/10/2026. “Đã triển khai” nghĩa là có mã nguồn và đã kết nối luồng ở mức lập trình; chưa đồng nghĩa với việc đã kiểm thử độc lập trên môi trường thực tế. Khi tạo tài liệu này, không có mã nguồn hay logic nghiệp vụ nào bị thay đổi.

## 1. Tổng quan dự án

DUWNG Perfume là ứng dụng thương mại điện tử nước hoa dành cho thị trường Việt Nam, gồm trang bán hàng, khu vực tài khoản, luồng giỏ hàng/đặt hàng và giao diện quản trị. Kho dự án có hai dự án Node.js riêng biệt: ứng dụng SPA React/Vite tại [app/](app/) và REST API tại [api/](api/). Thư mục gốc không có `package.json`; cần cài đặt và chạy từng dự án từ thư mục tương ứng.

Mã nguồn hiện có các luồng duyệt danh mục, xem chi tiết sản phẩm, đăng nhập/đăng ký, hồ sơ người dùng, giỏ hàng, đặt hàng COD/VNPay, lịch sử đơn và các màn hình quản trị cơ bản. Một số nút trên giao diện chỉ là phần trình bày hoặc chưa kết nối với máy chủ. Hai dự án không khai báo bộ kiểm thử tự động do dự án tự xây dựng. Trạng thái chạy thực tế, triển khai và cơ sở dữ liệu: **Chưa xác định**.

## 2. Công nghệ sử dụng

### Giao diện (Frontend)

- React 19, Vite 7, JavaScript/JSX, Tailwind CSS v4.
- React Router (`HashRouter`), Redux Toolkit / React Redux, Axios.
- React Hook Form, Yup, `@hookform/resolvers`.
- Google OAuth (`@react-oauth/google`), Embla carousel, Sonner, Lucide, Radix UI, `class-variance-authority`, `clsx`, `tailwind-merge`.
- ESLint; chưa tìm thấy bộ chạy kiểm thử hoặc lệnh kiểm thử cho frontend.

### Backend

- Node.js, CommonJS, Express 5.
- Prisma 7 với MariaDB adapter; cơ sở dữ liệu tương thích MySQL.
- `bcrypt`, `jsonwebtoken`, Nodemailer, `mysql2`, Vercel AI SDK (`ai`).
- [api/package.json](api/package.json) chưa khai báo script test/lint/migration/seed/worker. Mã nguồn có dùng `dotenv` nhưng package chưa khai báo đây là dependency trực tiếp; nên khai báo rõ ràng, không phụ thuộc vào package bắc cầu.

## 3. Cấu trúc dự án

- [app/src/main.jsx](app/src/main.jsx): điểm vào giao diện trình duyệt và các provider.
- [app/src/components/AppRouter/index.jsx](app/src/components/AppRouter/index.jsx): bảng tuyến điều hướng tập trung của giao diện.
- [app/src/layouts/](app/src/layouts/): khung trang cửa hàng, đầu trang/chân trang và bố cục xác thực.
- [app/src/pages/](app/src/pages/): Trang chủ, sản phẩm, thương hiệu, xác thực, hồ sơ, giỏ hàng, đơn hàng, quản trị, giới thiệu và liên hệ.
- [app/src/components/](app/src/components/): thanh bên/catalog dùng chung, sắp xếp, phân trang, menu giỏ hàng và thành phần giao diện cơ bản.
- [app/src/features/](app/src/features/), [app/src/store/](app/src/store/): các slice Redux và kho trạng thái.
- [app/src/service/](app/src/service/): Redux Toolkit async thunk gọi API.
- [app/src/hooks/](app/src/hooks/), [app/src/utils/](app/src/utils/), [app/src/lib/](app/src/lib/): logic và tiện ích dùng chung phía ứng dụng.
- [app/src/mocks/](app/src/mocks/): dữ liệu địa chỉ cục bộ; [app/public/](app/public/): ảnh và logo tĩnh.
- [api/server.js](api/server.js): điểm vào máy chủ Express; [api/queue.js](api/queue.js): tiến trình dò hàng đợi riêng.
- [api/src/router/](api/src/router/): các tuyến API được tự động gắn theo tên file.
- [api/src/controllers/](api/src/controllers/) và [api/src/services/](api/src/services/): lớp xử lý yêu cầu và nghiệp vụ.
- [api/src/config/](api/src/config/), [api/src/middlewares/](api/src/middlewares/), [api/src/lib/prisma.js](api/src/lib/prisma.js), [api/src/utils/](api/src/utils/), [api/src/tasks/](api/src/tasks/): các module hỗ trợ backend.
- [api/prisma/schema.prisma](api/prisma/schema.prisma), [api/prisma/migrations/](api/prisma/migrations/): schema và lịch sử thay đổi database.
- [api/generated/prisma/](api/generated/prisma/): Prisma Client tự sinh; không chỉnh sửa thủ công.
- [backup.sql](backup.sql), [backup-railway.sql](backup-railway.sql): bản xuất cơ sở dữ liệu, không phải migration; xem đây là dữ liệu có thể nhạy cảm.

## 4. Kiến trúc

### Frontend

Luồng khởi tạo: `main.jsx` → `App.jsx` → `AppRouter`. `main.jsx` bọc ứng dụng bằng `HashRouter`, Redux Provider và Google OAuth provider. Bố cục cửa hàng hiển thị đầu trang/chân trang dùng chung và gọi nạp người dùng, thương hiệu, danh mục, giỏ hàng. Trang xác thực dùng bố cục riêng; trang xác minh email độc lập; trang quản trị dùng bố cục thanh bên.

Kho trạng thái Redux có các slice `auth`, `product`, `common`, `cart`, `order`, `admin`. Các thao tác API thường được triển khai dưới dạng Redux Toolkit thunks trong `app/src/service/`. [app/src/utils/http.js](app/src/utils/http.js) dùng `VITE_BASE_API`, trả về nội dung body của phản hồi và gắn bearer token lấy từ `localStorage`.

### Backend

[api/server.js](api/server.js) nạp biến môi trường, bật CORS, phân tích JSON/urlencoded, gắn các hàm hỗ trợ phản hồi, phục vụ thư mục `api/public`, gắn bộ định tuyến động ở `/api`, xử lý 404 và lắng nghe trên `PORT` hoặc cổng 3000. Luồng tiêu chuẩn: bộ định tuyến → controller → service → Prisma. Các file tuyến có hậu tố `.route.js` được tự động gắn theo tên file; ví dụ `cart.route.js` thành `/api/cart`.

Phản hồi thành công thường có dạng `{ status: "success", data }`; phản hồi lỗi giữa các controller chưa thống nhất. Kết nối cơ sở dữ liệu khi chạy trong [api/src/lib/prisma.js](api/src/lib/prisma.js) dùng `DB_*`; cấu hình Prisma CLI [api/prisma.config.ts](api/prisma.config.ts) dùng `DATABASE_URL`. Cần đảm bảo hai cấu hình cùng trỏ tới cơ sở dữ liệu dự định sử dụng.

### Nhóm tuyến điều hướng giao diện

Các tuyến điều hướng trong mã nguồn được khai báo tại [app/src/components/AppRouter/index.jsx](app/src/components/AppRouter/index.jsx):

- Cửa hàng/danh mục: `/`, `/nuoc-hoa-nam`, `/nuoc-hoa-nu`, `/nuoc-hoa-unisex`, `/gioi-thieu`, `/lien-he`, `/thuong-hieu`, `/thuong-hieu/:slug`, `/san-pham/:slug`.
- Tài khoản/giỏ hàng/thanh toán: `/tai-khoan` và các route con `/doi-mat-khau`, `/don-hang`; `/gio-hang`, `/thanh-toan`, `/dat-hang-thanh-cong/:id`.
- Xác thực: `/auth/login`, `/auth/register`, `/verify-email`.
- Quản trị: các route sản phẩm, đơn hàng, người dùng, thương hiệu (danh sách/chi tiết/tạo/sửa) dưới `/admin`.

Giao diện chưa có tuyến bắt tất cả để hiển thị trang 404. `/tin-tuc` có trong thanh điều hướng nhưng chưa đăng ký. Tuyến gốc quản trị hiện hiển thị chức năng quản lý sản phẩm, không phải dashboard mẫu.

## 5. Cơ sở dữ liệu

Schema chuẩn hiện tại ở [api/prisma/schema.prisma](api/prisma/schema.prisma), dùng MySQL. Các model dữ liệu và quan hệ chính:

- `User`: email/username duy nhất; mật khẩu và thông tin hồ sơ có thể null; có role, auth provider, cờ active/xác minh email; liên kết refresh tokens, một cart và các order.
- `RefreshToken`: token, thời hạn và quan hệ với user; tự cascade khi user bị xóa.
- `Brand` có nhiều `Product`; `Category` hỗ trợ cây cha/con và có nhiều product.
- `Product`: slug duy nhất, brand/category, giới tính/nồng độ, xuất xứ, tầng hương, độ lưu/tỏa, mô tả/cách dùng/chính sách, thumbnail và cờ active/featured.
- `ProductImage`, `ProductVariant`: ảnh sản phẩm; biến thể chứa dung tích, giá, giá khuyến mãi/SKU tùy chọn và tồn kho.
- `Cart` → `CartItem`: mỗi người dùng có một giỏ; cặp giỏ/biến thể là duy nhất.
- `Order` → `OrderItem`: người nhận/địa chỉ, tổng tiền/phí giao hàng, trạng thái thanh toán/đơn; mặt hàng lưu bản chụp tên sản phẩm, dung tích, giá, số lượng; quan hệ biến thể có thể rỗng.
- `Queue`: loại tác vụ, dữ liệu gửi kèm dạng JSON text và trạng thái.

Các enum gồm `Role`, `AuthProvider`, `Gender`, `Concentration`, `OrderStatus`, `PaymentMethod` (`COD`, `VNPAY`), `PaymentStatus`, `QueueStatus`. Lịch sử migration từng tạo schema blog/post cũ rồi xóa; schema hiện tại không có model blog/post. Các script SQL trong [api/prisma/](api/prisma/) dùng để nạp dữ liệu mẫu, bổ sung catalog, sửa encoding/cập nhật thumbnail. Cần xem kỹ trước khi chạy: [api/prisma/fix_encoding.sql](api/prisma/fix_encoding.sql) xóa rồi chèn lại dữ liệu sản phẩm và biến thể. Nội dung cơ sở dữ liệu thật và tình trạng đã áp dụng migration: **Chưa xác định**.

## 6. Xác thực và phân quyền

- Mật khẩu local được băm bằng bcrypt. Access JWT dùng `AUTH_JWT_SECRET`; chuỗi refresh token được lưu trong database. Xác minh email dùng JWT secret riêng, token có hạn 24 giờ.
- Đăng nhập Google gửi access token do ứng dụng phía client cung cấp tới Google userinfo, sau đó tìm/tạo người dùng nội bộ và cấp token của API.
- [api/src/middlewares/authRequire.js](api/src/middlewares/authRequire.js) xác minh bearer JWT, tải user và gắn vào `req.auth`. [api/src/middlewares/adminRequired.js](api/src/middlewares/adminRequired.js) yêu cầu role `ADMIN`.
- Các tuyến người dùng/giỏ hàng/đơn hàng yêu cầu đăng nhập; tuyến quản trị yêu cầu đăng nhập và role admin. Tuyến giao diện chưa tự chặn quyền; backend là lớp phân quyền thực tế.
- Giao diện lưu access token và refresh token trong `localStorage`, nhưng Axios client chưa có luồng làm mới token hoặc gửi lại yêu cầu khi gặp 401.
- Đăng nhập bằng email/mật khẩu được thiết kế để yêu cầu email đã xác minh. User tạo từ Google được đánh dấu đã xác minh.
- Lỗi đáng chú ý: điểm cuối làm mới token tham chiếu biến `user` chưa khai báo; chưa có logic kiểm tra, luân chuyển hoặc thu hồi refresh token.
- Rủi ro bảo mật đáng chú ý: một số phản hồi xác thực/hồ sơ trả cả bản ghi user của Prisma, có thể bao gồm password hash; thao tác đăng nhập còn ghi thông tin user vào log. Cần rà soát ngay.

## 7. Các tính năng quan trọng

- Catalog nước hoa theo giới tính, danh sách/chi tiết thương hiệu, lọc, sắp xếp và phân trang.
- Chi tiết sản phẩm theo slug, gallery, chọn variant/dung tích, thêm giỏ và mua ngay.
- Đăng ký/đăng nhập bằng email và Google, xác minh email, sửa hồ sơ và đổi mật khẩu.
- Giỏ hàng cần đăng nhập; thanh toán COD/VNPay; endpoint lịch sử/chi tiết/hủy đơn.
- Quản trị có thao tác CRUD sản phẩm/thương hiệu, quản lý người dùng và trạng thái đơn hàng.
- Nội dung tĩnh About/Contact, carousel và các khu vực giới thiệu lợi ích.
- Các trang không thuộc `/admin` có cụm nút liên hệ nổi Messenger/Zalo và nút cuộn lên đầu trang; ban đầu ẩn, hiện khi cuộn xuống qua ngưỡng 100px, giữ hiện khi cuộn lên và ẩn lại khi về gần đầu trang.
- Backend có module hỗ trợ email, polling queue, sinh văn bản/tìm kiếm/tạo ảnh bằng AI; chưa phải module nào cũng được nối hoặc hoạt động đầy đủ.

## 8. Các tính năng đã triển khai

“Đã triển khai” ở đây có nghĩa là tồn tại mã nguồn và có kết nối giữa giao diện/API; không khẳng định sẵn sàng đưa vào production hoặc đã được kiểm thử bao phủ.

- Khung ứng dụng React, layout cửa hàng/auth/admin và route tập trung.
- Duyệt danh mục/chi tiết sản phẩm, trang thương hiệu, lọc/sắp xếp/phân trang, carousel sản phẩm nổi bật ở trang chủ.
- Đăng ký/đăng nhập người dùng, đăng nhập Google, xác minh email ở giao diện/API, hồ sơ và form đổi mật khẩu.
- Thao tác giỏ hàng và form thanh toán có luồng gọi COD/VNPay.
- Tạo đơn từ giỏ hàng, API lịch sử/chi tiết/hủy đơn và trang thông báo đặt hàng.
- Quản trị CRUD sản phẩm/thương hiệu, danh sách/xóa người dùng và API danh sách/cập nhật trạng thái đơn.
- Nút Messenger/Zalo mở liên kết liên hệ đã cấu hình; nút mũi tên cuộn mượt về đầu trang trên các trang không thuộc admin.
- Prisma schema và lịch sử migration cho người dùng, catalog, giỏ hàng, đơn hàng, thanh toán và hàng đợi.

## 9. Đang phát triển

Không tìm thấy công cụ theo dõi công việc, danh sách việc cần làm đáng tin cậy hoặc dấu hiệu rõ ràng cho biết developer đang thực hiện việc nào. Vì vậy, công việc đang làm thực tế là **Chưa xác định**.

Các phần sau mới là triển khai dở dang trong mã nguồn, không thể khẳng định là công việc đang được thực hiện: refresh token, toàn bộ vòng đời VNPay, xử lý email qua hàng đợi, tích hợp AI, tải ảnh đại diện lên và một số điều khiển giao diện. Xem thêm mục 10–11.

## 10. TODO / Tính năng dự kiến

Không tìm thấy lộ trình sản phẩm có xác nhận; ưu tiên nghiệp vụ là **Chưa xác định**. Các phần còn thiếu hoặc chưa hoàn chỉnh thể hiện trong mã nguồn:

- Giới hạn dữ liệu người dùng được trả về; triển khai và kiểm thử việc xác minh/luân chuyển refresh token cùng cơ chế gửi lại yêu cầu ở giao diện.
- Triển khai xử lý VNPay return/IPN, xác minh chữ ký và đồng bộ thanh toán/đơn hàng trước khi đưa vào production.
- Sửa hoặc loại bỏ mã xử lý queue/task; nếu cần hàng đợi thì bổ sung nơi đưa tác vụ vào, lệnh chạy worker và cơ chế phục hồi lỗi.
- Quyết định triển khai hay gỡ bỏ các phần đang để mẫu: tìm kiếm, coupon, quên mật khẩu, gửi form liên hệ, tải ảnh đại diện, blog/tin tức và chia sẻ mạng xã hội.
- Thêm bộ chặn route giao diện cho tài khoản/quản trị (đồng thời giữ nguyên phân quyền backend).
- Bổ sung kiểm thử và CI cho xác thực, transaction tồn kho/đơn hàng, quyền admin và callback thanh toán.
- Đồng bộ hợp đồng dữ liệu giao diện/máy chủ, bộ lọc, giá hiển thị và đường dẫn tài nguyên khi triển khai.

Đây là đề xuất dựa trên rà soát mã nguồn, không phải cam kết đã được bên liên quan xác nhận.

## 11. Lỗi / Vấn đề đã biết

Các phát hiện từ mã nguồn; chưa tái hiện khi chạy ứng dụng.

### Ưu tiên cao

1. `POST /api/auth/refresh-token` truyền biến `user` chưa khai báo vào auth service; yêu cầu sẽ lỗi. Chưa có xác minh hoặc luân chuyển refresh token.
2. Login/current-user/profile có thể trả toàn bộ bản ghi user, gồm password hash; login còn ghi log user. Nên chỉ trả tập trường an toàn và bỏ log dữ liệu nhạy cảm.
3. VNPay tạo đơn, trừ tồn kho và xóa giỏ hàng trước khi chuyển hướng, nhưng không có callback/IPN xác minh thanh toán hoặc cập nhật trạng thái thành công/thất bại.
4. API gửi lại email không `await` việc tạo token xác minh bất đồng bộ. URL xác minh được tạo dạng path/query, trong khi giao diện dùng `HashRouter`; link email có thể không mở đúng tuyến.
5. Yup checkout yêu cầu email nhưng dữ liệu tạo order không gửi email; backend hiện cũng không sử dụng email. Địa chỉ đường phố là tùy chọn nhưng vẫn được ghép vào chuỗi địa chỉ nhận hàng.
6. Có tranh chấp đồng thời: tồn kho được kiểm tra trước transaction rồi mới giảm không điều kiện; nhiều checkout cùng lúc có thể bán vượt tồn kho. Thao tác giỏ hàng cũng chưa giới hạn số lượng theo tồn kho.

### Contract frontend/backend và giao diện

- Thanh lọc bên ghi `categoryId` vào query params, nhưng `useProductFilter` và trang chi tiết thương hiệu đọc `category`; bộ lọc danh mục không được truyền như dự kiến. Khi lọc trả kết quả rỗng, `useProductFilter` lấy lại danh sách chưa lọc theo giới tính.
- Form đăng ký gửi firstname/lastname và trường xác nhận mật khẩu, nhưng API hiện chỉ đọc username/email/password.
- Login thunk lưu toàn bộ API envelope làm `auth.user`, trong khi `/auth/me` lưu user object; đầu trang có thể đọc sai dữ liệu sau login cho đến khi tải lại thông tin người dùng.
- Một số phần hiển thị/sắp xếp giá danh mục dùng giá gốc, trong khi giỏ hàng/thanh toán ưu tiên `salePrice`.
- Dữ liệu địa chỉ mẫu lấy danh sách phường theo mã tỉnh sau khi chọn quận/huyện, không theo quận/huyện; độ chính xác dữ liệu địa giới chưa được xác minh.
- Số lượng ở chi tiết sản phẩm có thể giảm xuống dưới 1. Tuyến tài khoản chưa có bộ chặn đăng nhập phía giao diện; trang admin cũng chưa tự kiểm tra role ở phía client.
- Tìm kiếm ở đầu trang, nút “xem thêm/mua ngay” ở Home/About, form liên hệ, coupon, quên mật khẩu, checkbox ghi nhớ mật khẩu, nút chọn ảnh đại diện và một số chức năng lọc/phân trang admin còn trơ hoặc chưa nối đầy đủ. Trong trang sản phẩm admin, ô tìm kiếm lọc cục bộ theo tên sản phẩm/thương hiệu với debounce 200 ms, không phân biệt chữ hoa/thường; bộ lọc giới tính cũng hoạt động và kết hợp với từ khóa tìm kiếm. Trong trang đơn hàng admin, ô tìm kiếm lọc cục bộ danh sách đã tải theo mã đơn, tên khách/người nhận hoặc email với debounce 100 ms; bộ lọc này không thay thế phân trang phía máy chủ. Trang người dùng admin tìm cục bộ theo tên, email hoặc số điện thoại với debounce 200 ms. Trang thương hiệu admin tìm theo tên/slug với debounce 200 ms, bỏ khoảng trắng đầu/cuối từ khóa và báo riêng khi không có kết quả khớp. `/tin-tuc` có liên kết nhưng chưa đăng ký; một số liên kết chân trang cũ/sai đích.
- Vite base là `/WEBNUOCHOA/`, nhưng một số ảnh dùng đường dẫn từ gốc domain/đường dẫn tương đối; tài nguyên có thể lỗi khi triển khai lên GitHub Pages. HTML tham chiếu `/favicon.svg`, không tìm thấy file này trong danh sách public đã rà soát.

### Backend/vận hành

- [api/queue.js](api/queue.js) không có lệnh npm khởi chạy; bộ tìm task yêu cầu hậu tố `.task.js` nhưng file hiện tại là `sendVerifyEmailTask.js`; task import sai đường dẫn singular `../service/` và gọi email service sai dạng tham số. Worker không có cơ chế phục hồi các job bị kẹt ở trạng thái đang xử lý.
- AI service có vẻ chưa được dùng; import `sharp` nhưng package API không khai báo thư viện này, đồng thời alias `@/` có thể không được Node CommonJS phân giải khi chạy.
- API dùng CORS mặc định khá rộng; thiếu lớp kiểm tra dữ liệu đầu vào/giới hạn tần suất tập trung; phản hồi lỗi/mã trạng thái chưa thống nhất. Middleware xác thực không kiểm tra user active và truy vấn catalog không nhất quán trong việc loại các bản ghi inactive.
- Admin có thể tự đổi payment status mà không cần xác nhận từ cổng thanh toán; admin hủy order không hoàn stock; một số chuyển trạng thái cho phép đi ngược; `shippingFee` chưa được cộng vào tổng tiền.
- Package backend không khai báo trực tiếp `dotenv`, dù server/worker yêu cầu thư viện này. Không tìm thấy bộ test/lệnh kiểm thử.
- Cơ sở dữ liệu lúc chạy dùng `DB_*`, còn Prisma CLI dùng `DATABASE_URL`; có nguy cơ hai luồng trỏ đến hai cơ sở dữ liệu khác nhau.
- Bản xuất SQL ở thư mục gốc có thể chứa dữ liệu khách hàng/cơ sở dữ liệu. Không chia sẻ hoặc chạy nếu chưa kiểm tra. Tình trạng thông tin bí mật/dữ liệu production thực tế: **Chưa xác định**.

## 12. Các file quan trọng

| Tệp                                                                                  | Chức năng                                                                                       |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| [app/src/main.jsx](app/src/main.jsx)                                                 | Các provider giao diện và khởi tạo router.                                                      |
| [app/src/components/AppRouter/index.jsx](app/src/components/AppRouter/index.jsx)     | Các tuyến điều hướng frontend.                                                                  |
| [app/src/layouts/DefaultLayouts/index.jsx](app/src/layouts/DefaultLayouts/index.jsx) | Khung cửa hàng và nạp dữ liệu ban đầu.                                                          |
| [app/src/store/store.js](app/src/store/store.js)                                     | Đăng ký kho trạng thái Redux.                                                                   |
| [app/src/utils/http.js](app/src/utils/http.js)                                       | Axios client dùng chung và bearer token.                                                        |
| [app/src/service/](app/src/service/)                                                 | Các thunk frontend gọi API, chia theo miền nghiệp vụ.                                           |
| [app/src/utils/validate.js](app/src/utils/validate.js)                               | Yup schema cho xác thực/thanh toán.                                                             |
| [api/server.js](api/server.js)                                                       | Thiết lập API server và thứ tự middleware.                                                      |
| [api/src/router/index.js](api/src/router/index.js)                                   | Tự động gắn các tuyến backend.                                                                  |
| [api/src/middlewares/authRequire.js](api/src/middlewares/authRequire.js)             | Xác thực JWT.                                                                                   |
| [api/src/middlewares/adminRequired.js](api/src/middlewares/adminRequired.js)         | Phân quyền quản trị.                                                                            |
| [api/src/services/auth.service.js](api/src/services/auth.service.js)                 | Xác thực local/Google và tạo token.                                                             |
| [api/src/services/order.service.js](api/src/services/order.service.js)               | Transaction chuyển giỏ hàng thành đơn, cập nhật tồn kho và hủy đơn.                             |
| [api/src/services/vnpay.service.js](api/src/services/vnpay.service.js)               | Ký URL thanh toán.                                                                              |
| [api/prisma/schema.prisma](api/prisma/schema.prisma)                                 | Model dữ liệu hiện tại.                                                                         |
| [api/prisma.config.ts](api/prisma.config.ts)                                         | Cấu hình Prisma CLI.                                                                            |
| [CLAUDE.md](CLAUDE.md)                                                               | Ghi chú cài đặt/quy ước hiện có; một số thông tin tuyến/khởi tạo đã cũ, cần đối chiếu mã nguồn. |

## 13. Quy tắc / Quy ước phát triển

- Tài liệu ngữ cảnh này không cho phép thay đổi logic/mã nguồn; khi làm việc bình thường cần tuân thủ đúng phạm vi yêu cầu của người dùng.
- Chạy lệnh bên trong `app/` hoặc `api/`; thư mục gốc không có tệp khai báo package.
- Giao diện: khai báo/cập nhật tuyến tập trung tại [app/src/components/AppRouter/index.jsx](app/src/components/AppRouter/index.jsx); dùng alias `@/`, Axios client dùng chung, Redux feature slices/thunks và helper `cn()` hiện có thay vì tạo hệ thống song song.
- Tổ chức API frontend theo miền nghiệp vụ trong `app/src/service/`, state trong `app/src/features/`.
- Backend: theo mô hình router/controller/service; thêm file tuyến có hậu tố `.route.js` trong `api/src/router/` vì tên file quyết định prefix `/api`; bảo vệ tuyến riêng tư/quản trị bằng middleware hiện có.
- Thay đổi cơ sở dữ liệu cần cập nhật Prisma schema và migration/client theo quy trình; không sửa thủ công mã client được sinh tự động.
- Không commit thông tin bí mật. Xem bản xuất SQL và script SQL có lệnh xóa dữ liệu là nhạy cảm/rủi ro cao. Không chạy seed/repair SQL trên production nếu chưa kiểm tra và backup rõ ràng.
- Giữ đúng hợp đồng dữ liệu/phản hồi API và bổ sung kiểm thử khi có hạ tầng. Không khẳng định hành vi lúc chạy khi chưa kiểm tra.

## 14. Trạng thái hiện tại của dự án

Mã nguồn thể hiện một MVP thương mại điện tử có nhiều luồng đã được triển khai, nhưng chưa có cơ sở để gọi là bản production đã được xác minh. Các luồng khách hàng/quản trị chính và model cơ sở dữ liệu đã có; tuy nhiên các phần thanh toán, xác thực/bảo mật và một số hợp đồng form/bộ lọc/giao diện vẫn còn thiếu hoặc có lỗi. Không có bộ kiểm thử và chưa ghi nhận kết quả build/lúc chạy trong lần rà soát này.

Đầu việc developer đang thực hiện và mục tiêu phát hành: **Chưa xác định**. Hướng tiếp tục ưu tiên theo rà soát mã nguồn: trước hết ngăn dữ liệu người dùng/password hash nhạy cảm bị trả về hoặc ghi log; tiếp theo sửa luồng refresh token đang lỗi; trước khi nhận thanh toán thật cần triển khai và kiểm thử xử lý VNPay return/IPN có xác minh chữ ký, đồng thời xác định cách hoàn tồn kho. Sau đó bổ sung kiểm thử trọng điểm và xử lý các hợp đồng giao diện/máy chủ ở trên.

## 15. Cập nhật lần cuối

2026-10-03 — cụm liên hệ nổi được gắn ở App để dùng trên mọi trang ngoài `/admin`; chỉ ẩn gần đầu trang, không ẩn khi cuộn lên ở giữa trang. ESLint chạy không có lỗi (còn một cảnh báo dependency `dispatch` sẵn có ở layout); build trước đó thành công với cảnh báo bundle JS lớn hơn 500 kB. Chưa xác minh trực quan luồng trang trong trình duyệt sau thay đổi này.

## AI Working Rules

### Khi bắt đầu session

- Đọc `PROJECT_CONTEXT.md` trước để nắm context của project.
- Đọc/kiểm tra source code cần thiết để đối chiếu với context.
- Mặc định chỉ đọc và phân tích để hiểu project.
- Không tự ý sửa, thêm, xóa hoặc refactor code.

### Khi nào được sửa code

- Chỉ sửa code khi tôi yêu cầu rõ ràng.
- Không tự suy đoán task tiếp theo.
- Không tự thực hiện các chức năng hoặc thay đổi mà tôi chưa yêu cầu.
- Nếu tôi chỉ yêu cầu đọc, phân tích hoặc tìm hiểu project thì tuyệt đối không thay đổi code.

### Sau khi được yêu cầu sửa code

- Chỉ thay đổi những phần liên quan trực tiếp đến task tôi yêu cầu.
- Không tự ý thay đổi architecture hoặc những phần không liên quan.
- Sau khi hoàn thành, kiểm tra lại code để đảm bảo thay đổi hoạt động đúng.

### Sau khi hoàn thành task

- Nếu task làm thay đổi trạng thái, chức năng, architecture, bug hoặc TODO của project thì cập nhật lại `PROJECT_CONTEXT.md`.
- Không tự thêm thông tin chưa được xác định hoặc chưa thực hiện.
