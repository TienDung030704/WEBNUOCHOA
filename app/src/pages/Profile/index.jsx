import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/Auth/authSlice";
import { toast } from "sonner";
import {
  UserCircle,
  Lock,
  LogOut,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Đăng xuất thành công!", {
      duration: 2000,
      position: "top-right",
    });
    setTimeout(() => navigate("/auth/login"), 1000);
  };

  return (
    <div className="catalog-page-enter min-h-screen bg-[#111113] text-white">
      {/* BREADCRUMB */}
      <div className="pt-[92px] pb-0">
        <div className="mx-auto max-w-[1200px] px-[22px] py-6">
          <div className="flex items-center gap-2 text-[13px] text-white/50">
            <NavLink to="/" className="hover:text-white transition-colors">
              Trang chủ
            </NavLink>
            <ChevronRight size={13} className="text-white/30" />
            <span className="text-white/80">Tài khoản</span>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="mx-auto max-w-[1200px] px-[22px] pb-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
          {/* SIDEBAR */}
          <aside className="w-full lg:w-[260px] lg:shrink-0">
            <div className="overflow-hidden rounded-2xl border border-white/8 bg-white/3">
              {/* Profile */}
              <div className="flex flex-row items-center gap-4 border-b border-white/8 px-5 py-4 lg:flex-col lg:gap-3 lg:px-6 lg:py-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 lg:h-16 lg:w-16">
                  <UserCircle size={34} className="text-white/60 lg:hidden" />
                  <UserCircle
                    size={42}
                    className="hidden text-white/60 lg:block"
                  />
                </div>
                <div className="lg:text-center">
                  <p className="text-[15px] font-semibold text-white">
                    {user?.fullName || user?.username || "Người dùng"}
                  </p>
                </div>
              </div>

              {/* Nav */}
              <nav className="flex overflow-x-auto p-2 lg:flex-col lg:overflow-x-visible">
                <NavLink
                  to="/tai-khoan"
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] transition-all ${
                      isActive
                        ? "bg-white/8 text-white"
                        : "text-white/65 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <span className="shrink-0 text-white/50">
                    <UserCircle size={18} />
                  </span>
                  Thông tin tài khoản
                </NavLink>

                <NavLink
                  to="/tai-khoan/don-hang"
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] transition-all ${
                      isActive
                        ? "bg-white/8 text-white"
                        : "text-white/65 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <span className="shrink-0 text-white/50">
                    <ShoppingBag size={18} />
                  </span>
                  Lịch sử đơn hàng
                </NavLink>

                <NavLink
                  to="/tai-khoan/doi-mat-khau"
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] transition-all ${
                      isActive
                        ? "bg-white/8 text-white"
                        : "text-white/65 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <span className="shrink-0 text-white/50">
                    <Lock size={18} />
                  </span>
                  Đổi mật khẩu
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[14px] text-white/65 transition-all hover:bg-red-500/10 hover:text-red-400"
                >
                  <LogOut size={18} className="shrink-0 text-white/50" />
                  Đăng Xuất
                </button>
              </nav>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="flex-1 overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-5 lg:p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
