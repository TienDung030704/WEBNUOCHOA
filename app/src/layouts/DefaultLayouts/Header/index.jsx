import { NavLink, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Search,
  User,
  UserCircle,
  LogOut,
  LayoutDashboard,
  X,
  Menu,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/Auth/authSlice";
import { toast } from "sonner";
import CartDropdown from "@/layouts/DefaultLayouts/Header/CartDropdowm";
import { useEffect, useRef, useState } from "react";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  // Scroll hide/show
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 60);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Search toggle
  const [searchOpen, setSearchOpen] = useState(false);

  // Mobile menu
  const [mobileOpen, setMobileOpen] = useState(false);

  // hàm đăng xuất
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Đăng xuất thành công!", {
      duration: 2000,
      position: "top-right",
    });
    // Delay chút để user thấy thông báo
    setTimeout(() => {
      navigate("/auth/login");
    }, 1000);
  };

  return (
    <>
      <div
        className={`w-full bg-[#0d0d0d] transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* MAIN HEADER BAR */}
        <div className="h-[92px] w-full px-[22px]">
          {/* ── MOBILE layout (< lg) : hamburger | logo center | icons ── */}
          <div className="flex h-full w-full items-center justify-between lg:hidden">
            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="text-white"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo — absolute center */}
            <NavLink to="/" className="absolute left-1/2 -translate-x-1/2">
              <img
                src="/LogoWeb.png"
                alt="DUWNG Perfume"
                className="h-auto w-[140px] sm:w-[170px]"
              />
            </NavLink>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen((v) => !v)}
                className="text-white"
              >
                {searchOpen ? <X size={22} /> : <Search size={22} />}
              </button>
              <CartDropdown />
              {user ? (
                <NavLink to="/tai-khoan">
                  <UserCircle size={22} className="text-white" />
                </NavLink>
              ) : (
                <NavLink to="/auth/login">
                  <User size={22} className="text-white" />
                </NavLink>
              )}
            </div>
          </div>

          {/* ── DESKTOP layout (>= lg) : logo | nav | icons ── */}
          <div className="hidden h-full w-full items-center justify-between lg:flex">
            {/* LOGO */}
            <NavLink to="/">
              <img
                src="/LogoWeb.png"
                alt="DUWNG Perfume"
                className="h-auto w-[210px] flex-shrink-0"
              />
            </NavLink>

            {/* NAV */}
            <nav className="flex items-center gap-8">
              <NavLink to="/">
                <p className="text-[17px] text-white hover:text-gray-300">
                  Trang chủ
                </p>
              </NavLink>

              <NavLink to="/gioi-thieu">
                <p className="text-[17px] text-white hover:text-gray-300">
                  Về DUWNG Perfume
                </p>
              </NavLink>

              <div className="group relative">
                <button className="flex items-center gap-1.5 text-[17px] text-white transition-colors hover:text-gray-300">
                  Bộ sưu tập nước hoa <ChevronDown size={16} />
                </button>

                <div className="pointer-events-none absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1a1b1d]/96 p-2 shadow-[0_20px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <NavLink
                      to="/nuoc-hoa-nam"
                      className="block rounded-xl px-4 py-3 text-[15px] text-white/85 transition-colors hover:bg-white/8 hover:text-white"
                    >
                      Nước hoa nam
                    </NavLink>
                    <NavLink
                      to="/nuoc-hoa-nu"
                      className="block rounded-xl px-4 py-3 text-[15px] text-white/85 transition-colors hover:bg-white/8 hover:text-white"
                    >
                      Nước hoa nữ
                    </NavLink>
                    <NavLink
                      to="/nuoc-hoa-unisex"
                      className="block rounded-xl px-4 py-3 text-[15px] text-white/85 transition-colors hover:bg-white/8 hover:text-white"
                    >
                      Nước hoa unisex
                    </NavLink>
                  </div>
                </div>
              </div>

              <NavLink to="/thuong-hieu">
                <p className="flex items-center gap-1 text-[17px] text-white hover:text-gray-300">
                  Thương hiệu <ChevronDown size={16} />
                </p>
              </NavLink>

              <div className="group relative">
                <button className="flex items-center gap-1.5 text-[17px] text-white transition-colors hover:text-gray-300">
                  Tin tức <ChevronDown size={16} />
                </button>
                <div className="pointer-events-none absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1a1b1d]/96 p-2 shadow-[0_20px_55px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <NavLink
                      to="/kien-thuc-nuoc-hoa"
                      className="block rounded-xl px-4 py-3 text-[15px] text-white/85 transition-colors hover:bg-white/8 hover:text-white"
                    >
                      Kiến thức nước hoa
                    </NavLink>
                  </div>
                </div>
              </div>

              <NavLink to="/lien-he">
                <p className="text-[17px] text-white hover:text-gray-300">
                  Liên hệ
                </p>
              </NavLink>
            </nav>

            {/* RIGHT */}
            <div className="flex items-center gap-5">
              {/* Search */}
              <button
                onClick={() => setSearchOpen((v) => !v)}
                className="text-white hover:text-gray-300"
              >
                {searchOpen ? <X size={22} /> : <Search size={22} />}
              </button>

              {/* Cart */}
              <CartDropdown />

              {/* USER */}
              {user ? (
                <div className="group relative">
                  <button className="flex cursor-pointer items-center gap-2 text-[15px] text-white transition-colors hover:text-gray-300 outline-none">
                    <span>{user.username}</span>
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>

                  {/* Dropdown */}
                  <div className="pointer-events-none absolute right-0 top-full z-50 w-56 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1a1b1d]/96 pb-1 shadow-[0_8px_32px_rgba(0,0,0,0.55),0_2px_12px_rgba(120,120,120,0.18)] backdrop-blur-xl">
                      {/* Header user info */}
                      <div className="flex items-center gap-3 border-b border-white/8 px-4 py-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                          <UserCircle size={26} className="text-white/70" />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-[14px] font-medium text-white">
                            {user.fullName || user.username}
                          </p>
                        </div>
                      </div>

                      {/* Menu items */}
                      <div className="p-1.5">
                        {user.role === "ADMIN" && (
                          <NavLink
                            to="/admin"
                            className="group/item flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-[14px] text-white/80 transition-all hover:bg-white/6 hover:text-red-400"
                          >
                            <LayoutDashboard
                              size={15}
                              className="shrink-0 text-white/50 group-hover/item:text-red-400 transition-colors"
                            />
                            Quản lý
                          </NavLink>
                        )}
                        <NavLink
                          to="/tai-khoan"
                          className="group/item flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-[14px] text-white/80 transition-all hover:bg-white/6 hover:text-red-400"
                        >
                          <UserCircle
                            size={15}
                            className="shrink-0 text-white/50 group-hover/item:text-red-400 transition-colors"
                          />
                          Tài khoản của tôi
                        </NavLink>

                        <button
                          onClick={handleLogout}
                          className="group/item flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-[14px] text-white/80 transition-all hover:bg-white/6 hover:text-red-400"
                        >
                          <LogOut
                            size={15}
                            className="shrink-0 text-white/50 group-hover/item:text-red-400 transition-colors"
                          />
                          Đăng xuất
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink to="/auth/login">
                  <button className="text-white hover:text-gray-300">
                    <User size={22} />
                  </button>
                </NavLink>
              )}

              {/* CTA */}
              <NavLink
                to="/lien-he"
                className="rounded-full bg-neutral-800 px-5 py-2.5 text-[16px] text-white hover:bg-neutral-700"
              >
                Liên hệ tư vấn
              </NavLink>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden border-b border-white/10 bg-[#0d0d0d] transition-all duration-300 ease-in-out lg:hidden ${
            mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 px-6 py-4">
            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-[16px] text-white/85 hover:bg-white/8 hover:text-white"
            >
              Trang chủ
            </NavLink>
            <NavLink
              to="/gioi-thieu"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-[16px] text-white/85 hover:bg-white/8 hover:text-white"
            >
              Về DUWNG Perfume
            </NavLink>
            <NavLink
              to="/nuoc-hoa-nam"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-[16px] text-white/85 hover:bg-white/8 hover:text-white"
            >
              Nước hoa nam
            </NavLink>
            <NavLink
              to="/nuoc-hoa-nu"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-[16px] text-white/85 hover:bg-white/8 hover:text-white"
            >
              Nước hoa nữ
            </NavLink>
            <NavLink
              to="/nuoc-hoa-unisex"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-[16px] text-white/85 hover:bg-white/8 hover:text-white"
            >
              Nước hoa unisex
            </NavLink>
            <NavLink
              to="/thuong-hieu"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-[16px] text-white/85 hover:bg-white/8 hover:text-white"
            >
              Thương hiệu
            </NavLink>
            <NavLink
              to="/tin-tuc"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-[16px] text-white/85 hover:bg-white/8 hover:text-white"
            >
              Tin tức
            </NavLink>
            <NavLink
              to="/lien-he"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-[16px] text-white/85 hover:bg-white/8 hover:text-white"
            >
              Liên hệ
            </NavLink>

            <div className="mt-2 border-t border-white/10 pt-3">
              {user ? (
                <>
                  <NavLink
                    to="/tai-khoan"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-[15px] text-white/80 hover:bg-white/8"
                  >
                    <UserCircle size={16} /> Tài khoản của tôi
                  </NavLink>
                  {user.role === "ADMIN" && (
                    <NavLink
                      to="/admin"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-[15px] text-white/80 hover:bg-white/8"
                    >
                      <LayoutDashboard size={16} /> Quản lý
                    </NavLink>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileOpen(false);
                    }}
                    className="flex w-full items-center gap-2.5 rounded-xl px-4 py-3 text-[15px] text-white/80 hover:bg-white/8"
                  >
                    <LogOut size={16} /> Đăng xuất
                  </button>
                </>
              ) : (
                <NavLink
                  to="/auth/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-[15px] text-white/80 hover:bg-white/8"
                >
                  <User size={16} /> Đăng nhập
                </NavLink>
              )}
            </div>

            <NavLink
              to="/lien-he"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block rounded-full bg-neutral-800 px-5 py-3 text-center text-[15px] text-white hover:bg-neutral-700"
            >
              Liên hệ tư vấn
            </NavLink>
          </nav>
        </div>
      </div>

      {/* SEARCH PANEL — floating centered */}
      {searchOpen && (
        <>
          {/* Overlay mờ để click ngoài đóng */}
          <div
            className="fixed inset-0 z-[59]"
            onClick={() => setSearchOpen(false)}
          />
          <div className="fixed top-[104px] right-6 z-[60] w-full max-w-[380px]">
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-[#1a1a1a] px-5 py-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <Search size={18} className="shrink-0 text-white/40" />
              <input
                autoFocus
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="flex-1 bg-transparent text-[16px] text-white placeholder-white/30 outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-white/40 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
