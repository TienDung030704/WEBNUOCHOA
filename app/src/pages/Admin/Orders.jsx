import { adminGetOrders } from "@/service/Admin/AdminService";
import { formatPrice } from "@/utils/formatPrice";
import { Search, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const STATUS_MAP = {
  PENDING: { label: "Chờ xác nhận", cls: "bg-yellow-500/15 text-yellow-400" },
  CONFIRMED: { label: "Đã xác nhận", cls: "bg-blue-500/15 text-blue-400" },
  SHIPPING: { label: "Đang giao", cls: "bg-purple-500/15 text-purple-400" },
  DELIVERED: { label: "Hoàn thành", cls: "bg-green-500/15 text-green-400" },
  CANCELLED: { label: "Đã hủy", cls: "bg-red-500/15 text-red-400" },
};

function Orders() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const order = useSelector((state) => state.admin.orders);
  const ordersTotal = useSelector((state) => state.admin.ordersTotal);
  const ordersLoading = useSelector((state) => state.admin.ordersLoading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(adminGetOrders()).unwrap();
      } catch (error) {
        console.log("ERROR FE:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="catalog-page-enter">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-white">Đơn hàng</h1>
        <p className="mt-1 text-[14px] text-white/45">
          Quản lý tất cả đơn hàng
        </p>
      </div>

      {/* Filter bar */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-2.5">
          <Search size={15} className="shrink-0 text-white/35" />
          <input
            type="text"
            placeholder="Tìm theo tên khách, mã đơn..."
            className="w-full bg-transparent text-[13px] text-white outline-none placeholder:text-white/30"
          />
        </div>
        <select className="rounded-xl border border-white/10 bg-[#111113] px-4 py-2.5 text-[13px] text-white/70 outline-none">
          <option value="">Tất cả trạng thái</option>
          <option value="PENDING">Chờ xác nhận</option>
          <option value="CONFIRMED">Đã xác nhận</option>
          <option value="SHIPPING">Đang giao</option>
          <option value="DELIVERED">Hoàn thành</option>
          <option value="CANCELLED">Đã hủy</option>
        </select>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-white/8 bg-white/3">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/6">
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Mã đơn
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Khách hàng
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Ngày đặt
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Sản phẩm
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Tổng tiền
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Trạng thái
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {ordersLoading ? (
                <tr>
                  <td
                    className="px-5 py-10 text-center text-[13px] text-white/30"
                    colSpan={7}
                  >
                    Đang tải...
                  </td>
                </tr>
              ) : order.length === 0 ? (
                <tr>
                  <td
                    className="px-5 py-10 text-center text-[13px] text-white/30"
                    colSpan={7}
                  >
                    Chưa có dữ liệu
                  </td>
                </tr>
              ) : (
                order.map((item) => {
                  const status = STATUS_MAP[item.status] ?? {
                    label: item.status,
                    cls: "bg-white/10 text-white/50",
                  };
                  const itemCount = item.items?.length ?? 0;
                  const firstItem = item.items?.[0];
                  const productSummary = firstItem
                    ? itemCount > 1
                      ? `${firstItem.productName} +${itemCount - 1} sp`
                      : firstItem.productName
                    : "—";

                  return (
                    <tr
                      key={item.id}
                      className="border-b border-white/5 transition hover:bg-white/3"
                    >
                      <td className="px-5 py-4 text-[13px] font-medium text-white">
                        #{item.id}
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-[13px] text-white">
                          {item.user?.fullName ?? item.receiverName}
                        </p>
                        <p className="text-[12px] text-white/40">
                          {item.user?.email ?? "—"}
                        </p>
                      </td>
                      <td className="px-5 py-4 text-[13px] text-white/60">
                        {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                      </td>
                      <td className="px-5 py-4 text-[13px] text-white/70">
                        {productSummary}
                      </td>
                      <td className="px-5 py-4 text-[13px] font-medium text-white">
                        {formatPrice(item.totalAmount)}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-[11px] font-medium ${status.cls}`}
                        >
                          {status.label}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <button
                          onClick={() => navigate(`/admin/don-hang/${item.id}`)}
                          className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-[12px] text-white/60 transition hover:border-white/25 hover:text-white"
                        >
                          <Eye size={13} />
                          Chi tiết
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-white/6 px-5 py-4">
          <p className="text-[13px] text-white/40">
            Hiển thị {order.length} / {ordersTotal} đơn hàng
          </p>
          <div className="flex items-center gap-1">
            <button className="rounded-lg border border-white/10 p-2 text-white/50 hover:bg-white/5">
              <ChevronLeft size={14} />
            </button>
            <button className="rounded-lg bg-white/10 px-3 py-1.5 text-[13px] font-medium text-white">
              1
            </button>
            <button className="rounded-lg border border-white/10 p-2 text-white/50 hover:bg-white/5">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
