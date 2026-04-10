import { Package, ShoppingBag, Users, TrendingUp } from "lucide-react";

const STATS = [
  {
    label: "Tổng đơn hàng",
    value: "128",
    change: "+12 tuần này",
    icon: ShoppingBag,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    label: "Doanh thu",
    value: "48.500.000 đ",
    change: "+8% so với tháng trước",
    icon: TrendingUp,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    label: "Sản phẩm",
    value: "64",
    change: "3 sản phẩm mới",
    icon: Package,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    label: "Người dùng",
    value: "312",
    change: "+24 tháng này",
    icon: Users,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

const RECENT_ORDERS = [
  {
    id: 1,
    customer: "Nguyễn Văn A",
    total: "1.250.000 đ",
    status: "PENDING",
    date: "06/04/2026",
  },
  {
    id: 2,
    customer: "Trần Thị B",
    total: "2.800.000 đ",
    status: "CONFIRMED",
    date: "05/04/2026",
  },
  {
    id: 3,
    customer: "Lê Văn C",
    total: "750.000 đ",
    status: "SHIPPING",
    date: "05/04/2026",
  },
  {
    id: 4,
    customer: "Phạm Thị D",
    total: "3.100.000 đ",
    status: "DELIVERED",
    date: "04/04/2026",
  },
  {
    id: 5,
    customer: "Hoàng Văn E",
    total: "980.000 đ",
    status: "CANCELLED",
    date: "03/04/2026",
  },
];

const STATUS_BADGE = {
  PENDING: { label: "Chờ xác nhận", cls: "bg-amber-500/15 text-amber-400" },
  CONFIRMED: { label: "Đã xác nhận", cls: "bg-blue-500/15 text-blue-400" },
  SHIPPING: { label: "Đang giao", cls: "bg-sky-500/15 text-sky-400" },
  DELIVERED: { label: "Hoàn thành", cls: "bg-emerald-500/15 text-emerald-400" },
  CANCELLED: { label: "Đã hủy", cls: "bg-red-500/15 text-red-400" },
};

function Dashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-white">Dashboard</h1>
        <p className="mt-1 text-[14px] text-white/45">
          Tổng quan hoạt động cửa hàng
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-4 gap-5">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-white/8 bg-white/3 p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[13px] text-white/50">{s.label}</p>
              <div className={`rounded-xl p-2 ${s.bg}`}>
                <s.icon size={18} className={s.color} />
              </div>
            </div>
            <p className="text-[24px] font-bold text-white">{s.value}</p>
            <p className="mt-1 text-[12px] text-white/35">{s.change}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="rounded-2xl border border-white/8 bg-white/3">
        <div className="border-b border-white/8 px-6 py-4">
          <h2 className="text-[16px] font-semibold text-white">
            Đơn hàng gần đây
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/6">
                <th className="px-6 py-3 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Mã đơn
                </th>
                <th className="px-6 py-3 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Khách hàng
                </th>
                <th className="px-6 py-3 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Ngày đặt
                </th>
                <th className="px-6 py-3 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Tổng tiền
                </th>
                <th className="px-6 py-3 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Trạng thái
                </th>
              </tr>
            </thead>
            <tbody>
              {RECENT_ORDERS.map((order) => {
                const badge = STATUS_BADGE[order.status];
                return (
                  <tr
                    key={order.id}
                    className="border-b border-white/5 transition-colors hover:bg-white/3"
                  >
                    <td className="px-6 py-4 text-[13px] text-white/60">
                      #{order.id}
                    </td>
                    <td className="px-6 py-4 text-[13px] text-white">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 text-[13px] text-white/60">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 text-[13px] font-medium text-white">
                      {order.total}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${badge.cls}`}
                      >
                        {badge.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
