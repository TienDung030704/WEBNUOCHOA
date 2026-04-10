import { NavLink, useNavigate } from "react-router-dom";
import { formatPrice } from "@/utils/formatPrice";
import { ChevronRight, Banknote } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "@/utils/validate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMyCarts } from "@/service/Cart/cartService";
import provinces from "@/mocks/provinces.json";
import wardsByCity from "@/mocks/wards-by-city.json";
import districtsByCity from "@/mocks/districts-by-city.json";
import { createOrder } from "@/service/Order/orderService";
import { toast } from "sonner";

function OrderPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    dispatch(getMyCarts());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      receiverName: "",
      receiverPhone: "",
      email: "",
      city: "",
      district: "",
      ward: "",
      address: "",
      note: "",
    },
    resolver: yupResolver(checkoutSchema),
  });

  // hàm logic chọn thành phố/tỉnh
  const handleCityChange = (e) => {
    const name = e.target.value;
    setValue("city", name);
    setValue("district", "");
    setValue("ward", "");
    const found = provinces.find((p) => p.name === name);
    setDistricts(found ? (districtsByCity[found.code] ?? []) : []);
    setWards([]);
  };

  // hàm logic chọn quận huyện
  const handleDistrictChange = (e) => {
    const name = e.target.value;
    setValue("district", name);
    setValue("ward", "");
    const found = districts.find((d) => d.name === name);
    setWards(found ? (wardsByCity[found.province_code] ?? []) : []);
  };

  const onSubmit = async (data) => {
    try {
      // kh cần gửi sản phẩm cần thanh toán vào trong payload vì ở be đã có phần xử lí lấy token của userId ra để xác thực thì trong token đó có thể lấy đc luôn sp trong giỏ hàng của userId đó r
      const payload = {
        receiverName: data.receiverName,
        receiverPhone: data.receiverPhone,
        note: data.note,
        shippingAddress: `${data.address}, ${data.ward}, ${data.district}, ${data.city}`,
      };
      const res = await dispatch(createOrder(payload)).unwrap();
      toast.success("Đặt hàng thành công");
      navigate(`/dat-hang-thanh-cong/${res.id}`);
    } catch (error) {
      console.log("ERROR FE:", error);
      toast.error("Đặt hàng thất bại ❌");
    }
  };
  return (
    <div className="min-h-screen bg-[#1b1d1e] text-white">
      {/* ── MAIN CONTENT ── */}
      <div className="mx-auto max-w-[1200px] px-6 pt-[116px] pb-14">
        {/* Breadcrumb */}
        <nav className="checkout-banner-enter mb-8 flex items-center gap-2 text-[14px] text-white/55">
          <NavLink to="/" className="transition-colors hover:text-white">
            Trang chủ
          </NavLink>
          <ChevronRight size={14} className="text-white/30" />
          <span className="text-white/90">Thanh toán</span>
        </nav>
        {/* PRODUCT TABLE */}
        <div className="checkout-table-enter mb-10 overflow-hidden rounded-xl border border-white/10 bg-white/4">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_140px_120px_140px] border-b border-white/10 px-6 py-4">
            <span className="text-[14px] font-semibold text-white/80">
              Tên sản phẩm
            </span>
            <span className="text-center text-[14px] font-semibold text-white/80">
              Đơn giá
            </span>
            <span className="text-center text-[14px] font-semibold text-white/80">
              Số lượng
            </span>
            <span className="text-right text-[14px] font-semibold text-white/80">
              Thành tiền
            </span>
          </div>

          {/* Rows */}
          {!cart?.items?.length ? (
            <div className="px-6 py-8 text-center text-[14px] text-white/40">
              Giỏ hàng trống
            </div>
          ) : (
            cart.items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[1fr_140px_120px_140px] items-center border-b border-white/6 px-6 py-5 last:border-0"
              >
                {/* Product info */}
                <div className="flex items-center gap-4">
                  <div className="h-[68px] w-[68px] shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white p-1">
                    <img
                      src={item.variant?.product?.thumbnail}
                      alt={item.variant?.product?.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[14px] font-medium leading-snug text-white/80">
                      {item.variant?.product?.name} – {item.variant?.volume}ml
                    </p>
                    {item.variant?.sku && (
                      <p className="text-[14px] text-white/35">
                        SKU: {item.variant.sku}
                      </p>
                    )}
                  </div>
                </div>
                {/* Unit price */}
                <p className="text-center text-[14px] font-bold text-white">
                  {formatPrice(
                    item.variant?.salePrice ?? item.variant?.price ?? 0,
                  )}
                </p>
                {/* Quantity */}
                <p className="text-center text-[14px] font-bold text-white">
                  {item.quantity}
                </p>
                {/* Subtotal */}
                <p className="text-right text-[14px] font-bold text-white">
                  {formatPrice(
                    (item.variant?.salePrice ?? item.variant?.price ?? 0) *
                      item.quantity,
                  )}
                </p>
              </div>
            ))
          )}

          {/* COUPON — inside the table card */}
          <div className="flex items-center gap-4 border-t border-white/10 px-6 py-5">
            <span className="shrink-0 text-[14px] font-semibold text-white/85">
              Mã khuyến mãi:
            </span>
            <input
              type="text"
              placeholder="Nhập mã khuyến mãi"
              className="flex-1 rounded-full border border-white/20 bg-transparent px-4 py-2 text-[14px] text-white placeholder-white/35 outline-none transition-colors focus:border-white/45"
            />
            <button
              type="button"
              className="rounded-full border border-white/25 bg-transparent px-5 py-2 text-[14px] font-medium text-white/80 transition-all hover:border-white/50 hover:text-white"
            >
              Xác nhận
            </button>
          </div>
        </div>

        {/* FORM + SUMMARY */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_1fr]"
        >
          {/* ── LEFT: Shipping Form ── */}
          <div className="checkout-form-enter overflow-hidden rounded-xl border border-white/10 bg-white/4 p-7 space-y-6">
            <h2 className="text-[22px] font-semibold text-white">
              Thông tin giao hàng
            </h2>

            {/* Row 1: Họ tên + SĐT */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[14px] text-white/60">
                  Họ và tên <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nhập đầy đủ họ và tên của bạn"
                  {...register("receiverName")}
                  className={`w-full rounded-lg border bg-white/5 px-4 py-2.5 text-[14px] text-white placeholder-white/30 outline-none transition-colors focus:bg-white/8 ${
                    errors.receiverName
                      ? "border-red-500/60 focus:border-red-500"
                      : "border-white/12 focus:border-white/35"
                  }`}
                />
                {errors.receiverName && (
                  <p className="text-[14px] text-red-400">
                    {errors.receiverName.message}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="block text-[14px] text-white/60">
                  Số điện thoại <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  {...register("receiverPhone")}
                  className={`w-full rounded-lg border bg-white/5 px-4 py-2.5 text-[14px] text-white placeholder-white/30 outline-none transition-colors focus:bg-white/8 ${
                    errors.receiverPhone
                      ? "border-red-500/60 focus:border-red-500"
                      : "border-white/12 focus:border-white/35"
                  }`}
                />
                {errors.receiverPhone && (
                  <p className="text-[14px] text-red-400">
                    {errors.receiverPhone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Email */}
            <div className="space-y-1.5">
              <label className="block text-[14px] text-white/60">
                Địa chỉ email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder="Nhập email"
                {...register("email")}
                className={`w-full rounded-lg border bg-white/5 px-4 py-2.5 text-[14px] text-white placeholder-white/30 outline-none transition-colors focus:bg-white/8 ${
                  errors.email
                    ? "border-red-500/60 focus:border-red-500"
                    : "border-white/12 focus:border-white/35"
                }`}
              />
              {errors.email && (
                <p className="text-[14px] text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Row 3: Tỉnh/Thành phố */}
            <div className="space-y-1.5">
              <label className="block text-[14px] text-white/60">
                Tỉnh/Thành phố <span className="text-red-400">*</span>
              </label>
              <select
                value={watch("city") ?? ""}
                onChange={handleCityChange}
                className={`w-full rounded-lg border bg-[#1e2022] px-4 py-2.5 text-[14px] text-white outline-none transition-colors focus:bg-white/8 ${
                  errors.city
                    ? "border-red-500/60"
                    : "border-white/12 focus:border-white/35"
                }`}
              >
                <option
                  value=""
                  disabled
                  className="bg-[#1e2022] text-white/40"
                >
                  Chọn tỉnh/thành phố
                </option>
                {provinces.map((p) => (
                  <option
                    key={p.code}
                    value={p.name}
                    className="bg-[#1e2022] text-white"
                  >
                    {p.name}
                  </option>
                ))}
              </select>
              {errors.city && (
                <p className="text-[14px] text-red-400">
                  {errors.city.message}
                </p>
              )}
            </div>

            {/* Row 4: Quận/Huyện + Xã/Phường */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[14px] text-white/60">
                  Quận/Huyện <span className="text-red-400">*</span>
                </label>
                <select
                  value={watch("district") ?? ""}
                  onChange={handleDistrictChange}
                  disabled={!districts.length}
                  className={`w-full rounded-lg border bg-[#1e2022] px-4 py-2.5 text-[14px] text-white outline-none transition-colors focus:bg-white/8 disabled:opacity-40 ${
                    errors.district
                      ? "border-red-500/60"
                      : "border-white/12 focus:border-white/35"
                  }`}
                >
                  <option
                    value=""
                    disabled
                    className="bg-[#1e2022] text-white/40"
                  >
                    Chọn quận/huyện
                  </option>
                  {districts.map((d) => (
                    <option
                      key={d.code}
                      value={d.name}
                      className="bg-[#1e2022] text-white"
                    >
                      {d.name}
                    </option>
                  ))}
                </select>
                {errors.district && (
                  <p className="text-[14px] text-red-400">
                    {errors.district.message}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="block text-[14px] text-white/60">
                  Xã/Phường/Thị trấn <span className="text-red-400">*</span>
                </label>
                <select
                  value={watch("ward") ?? ""}
                  onChange={(e) => setValue("ward", e.target.value)}
                  disabled={!wards.length}
                  className={`w-full rounded-lg border bg-[#1e2022] px-4 py-2.5 text-[14px] text-white outline-none transition-colors focus:bg-white/8 disabled:opacity-40 ${
                    errors.ward
                      ? "border-red-500/60"
                      : "border-white/12 focus:border-white/35"
                  }`}
                >
                  <option
                    value=""
                    disabled
                    className="bg-[#1e2022] text-white/40"
                  >
                    Chọn xã/phường
                  </option>
                  {wards.map((w) => (
                    <option
                      key={w.code}
                      value={w.name}
                      className="bg-[#1e2022] text-white"
                    >
                      {w.name}
                    </option>
                  ))}
                </select>
                {errors.ward && (
                  <p className="text-[14px] text-red-400">
                    {errors.ward.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 5: Địa chỉ cụ thể */}
            <div className="space-y-1.5">
              <label className="block text-[14px] text-white/60">Địa chỉ</label>
              <input
                type="text"
                placeholder="Ví dụ: Số 18 Ngõ 86 Phú Kiều"
                {...register("address")}
                className="w-full rounded-lg border border-white/12 bg-white/5 px-4 py-2.5 text-[14px] text-white placeholder-white/30 outline-none transition-colors focus:border-white/35 focus:bg-white/8"
              />
            </div>

            {/* Row 6: Ghi chú */}
            <div className="space-y-1.5">
              <label className="block text-[14px] text-white/60">
                Ghi chú đơn hàng (nếu có):
              </label>
              <textarea
                rows={4}
                placeholder="Ghi chú..."
                {...register("note")}
                className="w-full resize-none rounded-lg border border-white/12 bg-white/5 px-4 py-2.5 text-[14px] text-white placeholder-white/30 outline-none transition-colors focus:border-white/35 focus:bg-white/8"
              />
            </div>
          </div>

          {/* ── RIGHT: Order Summary ── */}
          <div className="checkout-summary-enter space-y-0">
            <div className="rounded-xl border border-white/10 bg-white/4 overflow-hidden">
              {/* Summary header */}
              <div className="grid grid-cols-2 border-b border-white/10 px-6 py-4">
                <span className="text-[14px] font-medium text-white/55">
                  Sản phẩm
                </span>
                <span className="text-right text-[14px] font-medium text-white/55">
                  Tạm tính
                </span>
              </div>

              {/* Placeholder product row */}
              {!cart?.items?.length ? (
                <div className="border-b border-white/8 px-6 py-5 text-center text-[14px] text-white/35">
                  Không có sản phẩm
                </div>
              ) : (
                cart.items.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-white/8 px-6 py-4"
                  >
                    <div className="flex justify-between gap-3">
                      <div>
                        <p className="text-[14px] leading-snug text-white/70">
                          {item.variant?.product?.name} – {item.variant?.volume}
                          ml
                        </p>
                        <p className="mt-1 text-[14px] text-white/35">
                          {formatPrice(
                            item.variant?.salePrice ?? item.variant?.price ?? 0,
                          )}{" "}
                          × {item.quantity}
                        </p>
                      </div>
                      <span className="text-[14px] font-medium text-white/70">
                        {formatPrice(
                          (item.variant?.salePrice ??
                            item.variant?.price ??
                            0) * item.quantity,
                        )}
                      </span>
                    </div>
                  </div>
                ))
              )}

              {/* Subtotal */}
              <div className="border-b border-white/8 px-6 py-4">
                <div className="flex justify-between">
                  <span className="text-[14px] text-white/55">Tạm tính</span>
                  <span className="text-[14px] font-medium text-white/75">
                    {formatPrice(
                      (cart?.items ?? []).reduce(
                        (sum, i) =>
                          sum +
                          (i.variant?.salePrice ?? i.variant?.price ?? 0) *
                            i.quantity,
                        0,
                      ),
                    )}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="border-b border-white/8 px-6 py-4">
                <div className="flex justify-between">
                  <span className="text-[14px] font-semibold text-white">
                    Tổng
                  </span>
                  <span className="text-[14px] font-bold text-white">
                    {formatPrice(
                      (cart?.items ?? []).reduce(
                        (sum, i) =>
                          sum +
                          (i.variant?.salePrice ?? i.variant?.price ?? 0) *
                            i.quantity,
                        0,
                      ),
                    )}
                  </span>
                </div>
                <p className="mt-2 text-[14px] text-white/35">
                  Giá trên chưa bao gồm phí vận chuyển
                </p>
              </div>

              {/* Payment Method */}
              <div className="px-6 py-5">
                <h3 className="mb-4 text-[14px] font-semibold text-white">
                  Phương thức thanh toán
                </h3>
                <div className="rounded-lg border border-white/15 bg-white/5 p-4">
                  <label className="flex cursor-pointer items-start gap-3">
                    {/* Radio */}
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-white/50 bg-transparent">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Banknote size={16} className="text-white/55" />
                        <span className="text-[14px] font-medium text-white/85">
                          Thanh toán tiền mặt (COD)
                        </span>
                      </div>
                      <p className="text-[14px] leading-relaxed text-white/45">
                        Thanh toán khi nhận hàng. Vui lòng chuẩn bị đúng số tiền
                        để thuận tiện cho việc giao nhận.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="px-6 pb-6">
                <button
                  type="submit"
                  className="contact-submit-btn w-full rounded-lg bg-white px-6 py-3.5 text-[14px] font-semibold tracking-wide text-black transition-all hover:bg-white/90 active:scale-[0.98]"
                >
                  <span>Đặt hàng</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderPage;
