import { NavLink, Outlet } from "react-router-dom";
import { Package, ShoppingBag, Users, Tag, ChevronRight } from "lucide-react";

const NAV_ITEMS = [
  { to: "/admin", label: "Sản phẩm", icon: Package, end: true },
  { to: "/admin/don-hang", label: "Đơn hàng", icon: ShoppingBag },
  { to: "/admin/nguoi-dung", label: "Người dùng", icon: Users },
  { to: "/admin/thuong-hieu", label: "Thương hiệu", icon: Tag },
];

function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#0d0e10] text-white">
      <div className="flex">
        {/* SIDEBAR */}
        <aside className="fixed left-0 top-0 z-40 flex h-screen w-[240px] flex-col border-r border-white/8 bg-[#111113]">
          {/* Logo */}
          <div className="flex h-[64px] items-center border-b border-white/8 px-6">
            <img src="/LogoWeb.png" alt="DUWNG" className="h-auto w-[130px]" />
          </div>

          {/* Label */}
          <div className="px-5 pt-5 pb-2">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30">
              Quản lý
            </p>
          </div>

          {/* Nav */}
          <nav className="flex-1 space-y-0.5 px-3">
            {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] transition-all ${
                    isActive
                      ? "bg-white/8 text-white"
                      : "text-white/55 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Icon size={17} className="shrink-0" />
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Footer */}
          <div className="border-t border-white/8 p-4">
            <NavLink
              to="/"
              className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-[13px] text-white/45 transition-all hover:bg-white/5 hover:text-white"
            >
              <ChevronRight size={15} />
              Về trang chủ
            </NavLink>
          </div>
        </aside>

        {/* MAIN */}
        <main className="ml-[240px] min-h-screen flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
