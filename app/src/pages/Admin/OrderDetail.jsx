import {
  adminGetOrderById,
  adminUpdateOrderStatus,
} from "@/service/Admin/AdminService";
import { formatPrice } from "@/utils/formatPrice";
import {
  ArrowLeft,
  MapPin,
  Phone,
  User,
  StickyNote,
  Package,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const STATUS_BADGE = {
  PENDING: { label: "Chờ xác nhận", cls: "bg-amber-500/15 text-amber-400" },
  CONFIRMED: { label: "Đã xác nhận", cls: "bg-blue-500/15 text-blue-400" },
  SHIPPING: { label: "Đang giao", cls: "bg-sky-500/15 text-sky-400" },
  DELIVERED: { label: "Hoàn thành", cls: "bg-emerald-500/15 text-emerald-400" },
  CANCELLED: { label: "Đã hủy", cls: "bg-red-500/15 text-red-400" },
};

function OrderDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const currentOrder = useSelector((state) => state.admin.currentOrder);

  const [status, setStatus] = useState("PENDING");
  // GỌi API chi tiết đơn hàng
  useEffect(() => {
    const fetchData = async (orderId) => {
      try {
        await dispatch(adminGetOrderById(orderId)).unwrap();
      } catch (error) {
        console.log("ERROR FE:", error);
      }
    };
    fetchData(id);
  }, [id]);

  //logic hàm lưu trạng thái
  const handleSaveStatus = async () => {
    try {
      await dispatch(adminUpdateOrderStatus({ orderId: id, status })).unwrap();
      toast.success("Cập nhật trạng thái thành công");
    } catch {
      toast.error("Cập nhật thất bại");
    }
  };

  useEffect(() => {
    if (currentOrder?.status) {
      setStatus(currentOrder.status);
    }
  }, [currentOrder?.status]);

  const badge = STATUS_BADGE[currentOrder?.status] ?? STATUS_BADGE.PENDING;

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-[13px] text-white/60 transition-all hover:border-white/20 hover:text-white"
        >
          <ArrowLeft size={14} />
          Quay lại
        </button>
        <div>
          <h1 className="text-[28px] font-bold text-white">
            Đơn hàng #{currentOrder?.id ?? "—"}
          </h1>
          <p className="mt-0.5 text-[13px] text-white/45">
            Đặt lúc{" "}
            {currentOrder?.createdAt
              ? new Date(currentOrder.createdAt).toLocaleString("vi-VN")
              : "—"}
          </p>
        </div>
        <span
          className={`ml-auto rounded-full px-3 py-1.5 text-[12px] font-medium ${badge.cls}`}
        >
          {badge.label}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {/* Left: Items */}
        <div className="col-span-2 space-y-5">
          {/* Product list */}
          <div className="rounded-2xl border border-white/8 bg-white/3">
            <div className="flex items-center gap-2 border-b border-white/8 px-6 py-4">
              <Package size={15} className="text-white/50" />
              <h2 className="text-[15px] font-semibold text-white">Sản phẩm</h2>
            </div>
            <div className="divide-y divide-white/5">
              {(currentOrder?.items ?? []).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 px-6 py-4"
                >
                  <img
                    src={item.variant?.product?.thumbnail ?? "/LogoWeb.png"}
                    alt={item.productName}
                    className="h-14 w-14 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-[14px] font-medium text-white">
                      {item.productName}
                    </p>
                    <p className="text-[12px] text-white/45">
                      {item.volume}ml · SL: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[14px] font-semibold text-white">
                      {formatPrice(item.priceAtOrder * item.quantity)}
                    </p>
                    <p className="text-[12px] text-white/40">
                      {formatPrice(item.priceAtOrder)} / cái
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-white/8 px-6 py-4">
              <span className="text-[14px] text-white/50">Tổng cộng</span>
              <span className="text-[18px] font-bold text-white">
                {formatPrice(currentOrder?.totalAmount)}
              </span>
            </div>
          </div>

          {/* Update status */}
          <div className="rounded-2xl border border-white/8 bg-white/3 px-6 py-5">
            <h2 className="mb-4 text-[15px] font-semibold text-white">
              Cập nhật trạng thái
            </h2>
            <div className="flex items-center gap-3">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="flex-1 rounded-xl border border-white/10 bg-[#111113] px-4 py-2.5 text-[13px] text-white/70 outline-none"
              >
                <option value="PENDING">Chờ xác nhận</option>
                <option value="CONFIRMED">Đã xác nhận</option>
                <option value="SHIPPING">Đang giao</option>
                <option value="DELIVERED">Hoàn thành</option>
                <option value="CANCELLED">Đã hủy</option>
              </select>
              <button
                onClick={handleSaveStatus}
                className="rounded-xl bg-white px-5 py-2.5 text-[13px] font-semibold text-black transition-opacity hover:bg-white/90"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-5">
          <div className="rounded-2xl border border-white/8 bg-white/3 px-6 py-5">
            <h2 className="mb-4 text-[15px] font-semibold text-white">
              Thông tin giao hàng
            </h2>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <User size={14} className="mt-0.5 shrink-0 text-white/35" />
                <div>
                  <p className="text-[11px] text-white/35">Người nhận</p>
                  <p className="text-[13px] text-white">
                    {currentOrder?.receiverName ?? "—"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={14} className="mt-0.5 shrink-0 text-white/35" />
                <div>
                  <p className="text-[11px] text-white/35">Số điện thoại</p>
                  <p className="text-[13px] text-white">
                    {currentOrder?.receiverPhone ?? "—"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-white/35" />
                <div>
                  <p className="text-[11px] text-white/35">Địa chỉ</p>
                  <p className="text-[13px] text-white">
                    {currentOrder?.shippingAddress ?? "—"}
                  </p>
                </div>
              </div>
              {currentOrder?.note && (
                <div className="flex items-start gap-3">
                  <StickyNote
                    size={14}
                    className="mt-0.5 shrink-0 text-white/35"
                  />
                  <div>
                    <p className="text-[11px] text-white/35">Ghi chú</p>
                    <p className="text-[13px] text-white">
                      {currentOrder.note}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-white/8 bg-white/3 px-6 py-5">
            <h2 className="mb-4 text-[15px] font-semibold text-white">
              Thanh toán
            </h2>
            <div className="space-y-2.5">
              <div className="flex justify-between text-[13px]">
                <span className="text-white/50">Phương thức</span>
                <span className="text-white">
                  {currentOrder?.paymentMethod ?? "—"}
                </span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-white/50">Số sản phẩm</span>
                <span className="text-white">
                  {currentOrder?.items?.length ?? "—"}
                </span>
              </div>
              <div className="flex justify-between border-t border-white/8 pt-2.5 text-[14px] font-semibold">
                <span className="text-white/70">Tổng tiền</span>
                <span className="text-white">
                  {formatPrice(currentOrder?.totalAmount)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
