import { NavLink } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1b1d1e] text-white">
      {/* HERO BANNER */}
      <div className="contact-banner-enter flex flex-col items-center justify-center bg-[#111] pb-14 pt-36 text-center">
        <h1 className="mb-4 text-[52px] font-semibold tracking-tight text-white md:text-[64px]">
          Liên hệ
        </h1>
        <nav className="flex items-center gap-2 text-[14px] text-white/45">
          <NavLink to="/" className="transition-colors hover:text-white">
            Trang chủ
          </NavLink>
          <ChevronRight size={14} className="text-white/30" />
          <span className="text-white/65">Liên hệ</span>
        </nav>
      </div>

      {/* MAIN CONTENT  */}
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr]">
          {/* LEFT – contact info */}
          <div className="contact-left-enter space-y-10">
            <div>
              <h2 className="mb-8 text-[30px] font-semibold leading-tight text-white">
                Thông tin liên hệ
              </h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-[15px] text-white/65">
                  <Phone size={17} className="mt-0.5 shrink-0 text-white/40" />
                  <span>Khương Đình: 0869 271 243</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] text-white/65">
                  <Phone size={17} className="mt-0.5 shrink-0 text-white/40" />
                  <span>Hoà Mã: 091 116 5686</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] text-white/65">
                  <Mail size={17} className="mt-0.5 shrink-0 text-white/40" />
                  <span>duwngperfumestore@gmail.com</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] text-white/65">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-white/40" />
                  <span>236 Khương Đình, Hạ Đình, Thanh Xuân, Hà Nội</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] text-white/65">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-white/40" />
                  <span>108 Hoà Mã, Hai Bà Trưng, Hà Nội</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] text-white/65">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-white/40" />
                  <span>225F Trần Quang Khải, Tân Định, Quận 1, TP.HCM</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="mb-5 text-[20px] font-semibold text-white">
                Theo dõi chúng tôi
              </h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all hover:border-white/35 hover:bg-white/12 hover:text-white"
                >
                  <Facebook size={17} />
                </a>
                <a
                  href="#"
                  aria-label="Youtube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all hover:border-white/35 hover:bg-white/12 hover:text-white"
                >
                  <Youtube size={17} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all hover:border-white/35 hover:bg-white/12 hover:text-white"
                >
                  <Instagram size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT – contact form */}
          <div className="contact-right-enter">
            <h2 className="mb-8 text-center text-[26px] font-semibold text-white">
              Liên hệ với chúng tôi
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-5 py-3.5 text-[14px] text-white placeholder-white/30 outline-none transition-colors focus:border-white/30"
                />
                <input
                  type="text"
                  placeholder="0123 456 789"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-5 py-3.5 text-[14px] text-white placeholder-white/30 outline-none transition-colors focus:border-white/30"
                />
              </div>
              <input
                type="email"
                placeholder="Nhập email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-5 py-3.5 text-[14px] text-white placeholder-white/30 outline-none transition-colors focus:border-white/30"
              />
              <textarea
                rows={5}
                placeholder="Ghi chú..."
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-5 py-3.5 text-[14px] text-white placeholder-white/30 outline-none transition-colors focus:border-white/30"
              />
              <button className="contact-submit-btn w-full rounded-2xl bg-[#111] py-4 text-[15px] font-medium text-white shadow-[0_6px_20px_rgba(0,0,0,0.55),0_2px_8px_rgba(150,150,150,0.15)] active:scale-[0.99]">
                <span>Gửi liên hệ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
