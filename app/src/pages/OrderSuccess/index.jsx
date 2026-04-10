import { NavLink, useParams } from "react-router-dom";
import { formatPrice } from "@/utils/formatPrice";
import { ChevronRight, Check } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "@/service/Order/orderService";

function OrderSuccessPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const order = useSelector((state) => state.order.currentOrder);
  console.log(order);
  useEffect(() => {
    if (id) {
      dispatch(getOrderById(id));
    }
  }, [dispatch, id]);

  return (
    <div className="min-h-screen bg-[#1b1d1e] text-white">
      <div className="mx-auto max-w-[1200px] px-6 pt-[116px] pb-16">
        <nav className="checkout-banner-enter mb-10 flex items-center gap-2 text-[14px] text-white/55">
          <NavLink to="/" className="transition-colors hover:text-white">
            Trang chủ
          </NavLink>
          <ChevronRight size={14} className="text-white/30" />
          <span className="text-white/90">Thanh toán</span>
        </nav>

        {/* Success */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="success-icon-enter mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 bg-white/8">
            <Check size={28} className="text-white" strokeWidth={2.5} />
          </div>
          <h1 className="success-title-enter mb-3 text-[34px] font-bold tracking-tight text-white">
            Đặt hàng thành công
          </h1>
          <p className="success-title-enter text-[14px] text-white/50">
            Đơn hàng đã thiết lập thành công. Chúng tôi sẽ liên hệ trực tiếp với
            quý khách để xác nhận.
          </p>
        </div>

        {/* Meta */}
        <div className="success-meta-enter mb-8 grid grid-cols-4 overflow-hidden rounded-xl border border-white/10 bg-white/4">
          <div className="border-r border-white/10 px-6 py-5">
            <p className="mb-1.5 text-[12px] text-white/45">Mã đơn hàng</p>
            <p className="text-[14px] font-semibold text-white break-all">
              {order?.id}
            </p>
          </div>
          <div className="border-r border-white/10 px-6 py-5">
            <p className="mb-1.5 text-[12px] text-white/45">Ngày mua</p>
            <p className="text-[14px] font-semibold text-white">
              {order?.createdAt
                ? new Date(order.createdAt).toLocaleString("vi-VN")
                : ""}
            </p>
          </div>
          <div className="border-r border-white/10 px-6 py-5">
            <p className="mb-1.5 text-[12px] text-white/45">Tổng cộng</p>
            <p className="text-[14px] font-semibold text-white">
              {formatPrice(order?.totalAmount)}
            </p>
          </div>
          <div className="px-6 py-5">
            <p className="mb-1.5 text-[12px] text-white/45">Thanh toán</p>
            <p className="text-[14px] font-semibold text-white">
              {order?.paymentMethod}
            </p>
          </div>
        </div>

        {/* Detail */}
        <div>
          <div className="success-left-enter overflow-hidden rounded-xl border border-white/10 bg-white/4">
            <div className="grid grid-cols-[1fr_100px_130px] border-b border-white/10 px-6 py-4">
              <span className="text-[14px] font-semibold text-white/80">
                Tên sản phẩm
              </span>
              <span className="text-center text-[14px] font-semibold text-white/80">
                Số lượng
              </span>
              <span className="text-right text-[14px] font-semibold text-white/80">
                Thành tiền
              </span>
            </div>

            {/* Render items */}
            {order?.items?.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[1fr_100px_130px] items-center border-b border-white/8 px-6 py-4"
              >
                <div className="flex items-center gap-4">
                  <div className="h-[64px] w-[64px] shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white p-1">
                    <img
                      src={item.variant?.product?.thumbnail}
                      alt={item.productName}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[14px] font-medium leading-snug text-white/80">
                      {item.productName} – {item.volume}ml
                    </p>
                  </div>
                </div>
                <span className="text-center text-[14px] text-white/70">
                  {item.quantity}
                </span>
                <span className="text-right text-[14px] text-white/70">
                  {formatPrice(item.priceAtOrder * item.quantity)}
                </span>
              </div>
            ))}

            {/* Subtotals */}
            <div className="space-y-0 border-b border-white/8 px-6 py-4">
              <div className="flex justify-between py-1.5">
                <span className="text-[14px] text-white/55">Tạm tính</span>
                <span className="text-[14px] text-white/75">
                  {formatPrice(order?.totalAmount)}
                </span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[14px] text-white/55">Giao hàng</span>
                <span className="text-[14px] text-white/75">---</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[14px] text-white/55">
                  Phương thức thanh toán
                </span>
                <span className="text-[14px] text-white/75">
                  {order?.paymentMethod}
                </span>
              </div>
            </div>

            {/* Shipping */}
            <div className="border-b border-white/8 px-6 py-5">
              <p className="mb-3 text-[14px] font-semibold text-white/80">
                Thông tin nhận hàng
              </p>
              <div className="space-y-1.5 text-[14px] text-white/55">
                <p>{order?.receiverName}</p>
                <p>{order?.receiverPhone}</p>
                <p>{order?.shippingAddress}</p>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-[15px] font-bold text-white">Tổng</span>
              <span className="text-[17px] font-bold text-white">
                {formatPrice(order?.totalAmount)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccessPage;
