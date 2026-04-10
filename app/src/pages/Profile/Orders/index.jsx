import { ShoppingBag } from "lucide-react";
import { formatPrice } from "@/utils/formatPrice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyOrders } from "@/service/Order/orderService";

const STATUS_BADGE = {
  PENDING: { label: "Chờ xác nhận", cls: "bg-amber-500/15 text-amber-400" },
  CONFIRMED: { label: "Đã xác nhận", cls: "bg-blue-500/15 text-blue-400" },
  SHIPPING: { label: "Đang giao", cls: "bg-sky-500/15 text-sky-400" },
  DELIVERED: { label: "Hoàn thành", cls: "bg-emerald-500/15 text-emerald-400" },
  CANCELLED: { label: "Đã hủy", cls: "bg-red-500/15 text-red-400" },
};

function Orders() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orders = useSelector((state) => state.order.orders);
  const loading = useSelector((state) => state.order.loading);

  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch]);

  return (
    <div>
      <h2 className="mb-6 text-[26px] font-bold text-white">
        Lịch sử đơn hàng
      </h2>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center py-16 text-[14px] text-white/40">
          Đang tải...
        </div>
      )}

      {/* Empty */}
      {!loading && orders.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-white/8 bg-white/3 py-20">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/8">
            <ShoppingBag size={30} className="text-white/30" />
          </div>
          <div className="text-center">
            <p className="text-[15px] font-medium text-white/70">
              Bạn chưa có đơn hàng nào
            </p>
            <p className="mt-1 text-[13px] text-white/35">
              Hãy khám phá và đặt mua ngay!
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="mt-2 rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold text-[#111113] transition hover:bg-white/90"
          >
            Tìm sản phẩm
          </button>
        </div>
      )}

      {/* List */}
      {!loading && orders.length > 0 && (
        <div className="space-y-4">
          {orders.map((order) => {
            const badge = STATUS_BADGE[order.status] ?? {
              label: order.status,
              cls: "bg-white/10 text-white/60",
            };

            return (
              <div
                key={order.id}
                onClick={() => navigate(`/dat-hang-thanh-cong/${order.id}`)}
                className="cursor-pointer overflow-hidden rounded-xl border border-white/8 bg-white/3 transition-all hover:border-white/15 hover:bg-white/5"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] font-semibold text-white/80">
                      #{order.id}
                    </span>
                    <span className="text-[12px] text-white/35">
                      {new Date(order.createdAt).toLocaleDateString("vi-VN")}
                    </span>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[12px] font-medium ${badge.cls}`}
                  >
                    {badge.label}
                  </span>
                </div>

                {/* Items */}
                <div className="divide-y divide-white/5 px-5">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 py-4">
                      <div className="h-[56px] w-[56px] overflow-hidden rounded-lg border border-white/10 bg-white p-1">
                        <img
                          src={item.variant?.product?.thumbnail}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div className="flex flex-1 justify-between">
                        <p className="text-[13px] text-white/65">
                          {item.productName} – {item.volume}ml × {item.quantity}
                        </p>
                        <span className="text-[13px] text-white/65">
                          {formatPrice(item.priceAtOrder * item.quantity)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-white/8 px-5 py-4">
                  <span className="text-[13px] text-white/40">
                    {order.items.length} sản phẩm · COD
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] text-white/55">Tổng:</span>
                    <span className="text-[14px] font-bold text-white">
                      {formatPrice(order.totalAmount)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Orders;
