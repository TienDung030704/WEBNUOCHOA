import { Phone, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-[#1b1b1f] text-white">
      {/* Main footer grid */}
      <div className="mx-auto max-w-[1280px] px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1.6fr]">
          {/* Col 1 – Brand */}
          <div className="space-y-5">
            <h3 className="text-[17px] font-semibold text-white">
              Về DUWNG Perfume
            </h3>
            <p className="text-[14px] leading-7 text-white/55">
              "Luxe – Art – Nostalgia" Sang trọng là bản chất. Nghệ thuật là
              hình thái. Hoài niệm là dấu vết. Mỗi mùi hương là một tuyên ngôn
              thầm lặng dành cho người có gu sống riêng biệt.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-[14px] text-white/55">
                <Phone size={15} className="shrink-0 text-white/40" />
                Khương Đình – Hà Nội: 0869 271 243
              </li>
              <li className="flex items-center gap-2.5 text-[14px] text-white/55">
                <Phone size={15} className="shrink-0 text-white/40" />
                Hoà Mã – Hà Nội: 091 116 5686
              </li>
              <li className="flex items-center gap-2.5 text-[14px] text-white/55">
                <Phone size={15} className="shrink-0 text-white/40" />
                Trần Quang Khải – HCM: 085 552 8668
              </li>
              <li className="flex items-center gap-2.5 text-[14px] text-white/55">
                <Mail size={15} className="shrink-0 text-white/40" />
                duwngperfumestore@gmail.com
              </li>
            </ul>
          </div>

          {/* Col 2 – Quick links */}
          <div className="space-y-5">
            <h3 className="text-[17px] font-semibold text-white">
              Liên kết nhanh
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/ve-lan-perfume"
                  className="text-[14px] text-white/55 transition-colors hover:text-white"
                >
                  Giới thiệu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nuoc-hoa-nam"
                  className="text-[14px] text-white/55 transition-colors hover:text-white"
                >
                  Bộ sưu tập nước hoa
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-[14px] text-white/55 transition-colors hover:text-white"
                >
                  Thương hiệu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-[14px] text-white/55 transition-colors hover:text-white"
                >
                  Tin tức
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-[14px] text-white/55 transition-colors hover:text-white"
                >
                  Liên hệ
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Col 3 – Products */}
          <div className="space-y-5">
            <h3 className="text-[17px] font-semibold text-white">Sản phẩm</h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/nuoc-hoa-nam"
                  className="text-[14px] text-white/55 transition-colors hover:text-white"
                >
                  Nước hoa nam
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nuoc-hoa-nu"
                  className="text-[14px] text-white/55 transition-colors hover:text-white"
                >
                  Nước hoa nữ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nuoc-hoa-unisex"
                  className="text-[14px] text-white/55 transition-colors hover:text-white"
                >
                  Nước hoa unisex
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-[14px] text-white/55 transition-colors hover:text-white"
                >
                  Body spray
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Col 4 – Stores */}
          <div className="space-y-5">
            <h3 className="text-[17px] font-semibold text-white">Cửa hàng</h3>
            <ul className="space-y-4">
              <li>
                <p className="mb-1 text-[14px] font-semibold text-white">
                  Hà Nội
                </p>
                <p className="text-[13.5px] leading-6 text-white/55">
                  17 Ngõ 236 Khương Đình, Thanh Xuân, Hà Nội
                </p>
              </li>
              <li>
                <p className="mb-1 text-[14px] font-semibold text-white">
                  Hà Nội
                </p>
                <p className="text-[13.5px] leading-6 text-white/55">
                  108 Hoà Mã, Hai Bà Trưng, Hà Nội
                </p>
              </li>
              <li>
                <p className="mb-1 text-[14px] font-semibold text-white">
                  TP. Hồ Chí Minh
                </p>
                <p className="text-[13.5px] leading-6 text-white/55">
                  225F Trần Quang Khải, Tân Định, Quận 1, TP.HCM
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-[1280px] border-t border-white/10 px-8" />

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1280px] px-8 py-8">
        {/* Social icons */}
        <div className="mb-5 flex items-center justify-center gap-5">
          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/65 transition-colors hover:bg-white/15 hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="#"
            aria-label="TikTok"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/65 transition-colors hover:bg-white/15 hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34v-6.9a8.16 8.16 0 0 0 4.77 1.52V6.49a4.85 4.85 0 0 1-1-.2z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/65 transition-colors hover:bg-white/15 hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* Shopee */}
          <a
            href="#"
            aria-label="Shopee"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/65 transition-colors hover:bg-white/15 hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M12 2a5 5 0 0 0-5 5H5a2 2 0 0 0-2 2l1 11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2l1-11a2 2 0 0 0-2-2h-2a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3H9a3 3 0 0 1 3-3zm0 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
            </svg>
          </a>
        </div>

        {/* Policy links */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {[
            "Chính sách bảo mật",
            "Chính sách thanh toán",
            "Chính sách bảo hành",
          ].map((label) => (
            <a
              key={label}
              href="#"
              className="text-[13px] text-white/45 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Credit */}
        <p className="text-center text-[13px] text-white/30">
          Thiết kế bởi{" "}
          <span className="text-white/50">DungDubai hehe / Website</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
