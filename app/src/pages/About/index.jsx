import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#111113] text-white">
      {/* BANNER */}
      <div className="about-banner-enter relative flex h-[280px] items-center justify-center overflow-hidden bg-[#0d0d0f] pt-[92px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/bg-4.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
          <h1 className="text-[46px] font-semibold tracking-tight text-white">
            Giới thiệu
          </h1>
          <div className="flex items-center gap-2 text-[14px] text-white/55">
            <NavLink to="/" className="hover:text-white/90 transition-colors">
              Trang chủ
            </NavLink>
            <ChevronRight size={14} className="text-white/35" />
            <span className="text-white/80">Giới thiệu</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-[1200px] px-[22px] py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <div className="about-left-enter flex flex-col gap-8">
            {/* Image 1 */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src="./bg-4.jpg"
                alt="DUWNG Perfume collection"
                className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Quote */}
            <div className="space-y-4">
              <h2 className="text-[26px] font-semibold italic text-white">
                "Smell good - Feel good"
              </h2>
              <p className="text-[15px] leading-[1.85] text-white/60">
                Cái hay của nước hoa chính là hương thơm không cố định ở một mùi
                nhất định, mà thay đổi dần theo thời gian, nhiệt độ và chính cơ
                thể của người sử dụng. DUWNG Perfume hi vọng nhờ kiến thức cùng
                những hiểu biết của mình, có thể giúp khách hàng lựa chọn được
                những mùi hương tốt nhất phù hợp với từng cá nhân và hoàn cảnh
                để giúp khách hàng cảm thấy tốt hơn, tự tin và thành công hơn.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="about-right-enter flex flex-col gap-8">
            {/* Stats */}
            <div className="space-y-3">
              <h2 className="mb-6 text-[24px] font-semibold text-white">
                Con số ấn tượng
              </h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                {/* Stat 1 */}
                <div className="about-stat-1 space-y-1">
                  <p className="text-[38px] font-bold leading-none text-white">
                    80%
                  </p>
                  <p className="text-[14px] text-white/55">
                    Bán hàng trực tuyến
                  </p>
                </div>
                {/* Stat 2 */}
                <div className="about-stat-2 space-y-1">
                  <p className="text-[38px] font-bold leading-none text-white">
                    100%
                  </p>
                  <p className="text-[14px] text-white/55">Hàng chính hãng</p>
                </div>
                {/* Stat 3 */}
                <div className="about-stat-3 space-y-1">
                  <p className="text-[38px] font-bold leading-none text-white">
                    &gt;300
                  </p>
                  <p className="text-[14px] text-white/55">
                    Sản phẩm chất lượng
                  </p>
                </div>
                {/* Stat 4 */}
                <div className="about-stat-4 space-y-1">
                  <p className="text-[38px] font-bold leading-none text-white">
                    2000+
                  </p>
                  <p className="text-[14px] text-white/55">
                    Khách hàng hài lòng
                  </p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="about-img2-enter overflow-hidden rounded-2xl">
              <img
                src="./bg-5.jpg"
                alt="DUWNG Perfume store"
                className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Câu chuyện thương hiệu */}
      <div
        className="about-values-enter py-24"
        style={{ background: "#1a1c1d" }}
      >
        <div className="mx-auto max-w-[860px] px-[22px] text-center">
          <h2 className="about-story-title mb-5 text-[72px] font-bold uppercase leading-none tracking-tight text-white">
            Về DUWNG Perfume
          </h2>
          <h3 className="about-story-sub mb-10 text-[22px] font-medium text-white">
            Câu chuyện thương hiệu
          </h3>
          <div className="about-story-body space-y-5 text-left text-[15px] leading-[1.9] text-white/65">
            <p>
              DUWNG Perfume là cửa hàng nước hoa cao cấp được hình thành từ hành
              trình vượt ra khỏi "vùng an toàn" của những con người đầy nhiệt
              huyết cùng niềm đam mê bất tận về mùi hương.
            </p>
            <p>
              Sinh ra trong gia đình có định hướng nghề nghiệp truyền thống cùng
              tấm bằng cử nhân trên tay, những tưởng sẽ chọn một sự nghiệp ổn
              định và an toàn. Thế nhưng, niềm say mê bất tận với mùi hương đã
              thôi thúc bước sang một lĩnh vực hoàn toàn mới – Một reviewer
              chuyên về nước hoa. Khởi đầu bằng 5 chai nước hoa nữ yêu thích,
              bắt đầu hành trình chia sẻ những trải nghiệm về nước hoa với bạn
              bè. Ấn tượng bởi lối review chân thật, gần gũi và dí dỏm, những
              người bạn ấy đã trở thành cầu nối lan tỏa, giúp tìm được những
              khách hàng đầu tiên trong sự nghiệp reviewer.
            </p>
          </div>
          <button className="about-story-btn group mt-10 inline-flex items-center gap-2 text-[15px] font-medium text-white/80 transition-opacity hover:opacity-60">
            Xem thêm
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>

      {/* BENEFITS BAR */}
      <div className="border-t border-white/8 bg-[#0d0d0f] py-10">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-[22px] lg:grid-cols-4">
          <div className="flex items-start gap-4">
            <div className="shrink-0 text-white/30">
              <svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                <path d="M8 12l3 3 5-5" />
              </svg>
            </div>
            <div>
              <p className="text-[15px] font-semibold text-white">
                Chính hãng 100%
              </p>
              <p className="mt-1 text-[13px] leading-snug text-white/50">
                Cam kết sản phẩm chính hãng 100%
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="shrink-0 text-white/30">
              <svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
              </svg>
            </div>
            <div>
              <p className="text-[15px] font-semibold text-white">
                Chính sách đổi trả
              </p>
              <p className="mt-1 text-[13px] leading-snug text-white/50">
                Chính sách đổi hàng và tích điểm thành viên
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="shrink-0 text-white/30">
              <svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
            <div>
              <p className="text-[15px] font-semibold text-white">
                Tư vấn &amp; hỗ trợ
              </p>
              <p className="mt-1 text-[13px] leading-snug text-white/50">
                Tư vấn và hỗ trợ gói quà miễn phí
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="shrink-0 text-white/30">
              <svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <path d="M16 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
                <path d="M9 10h2" />
              </svg>
            </div>
            <div>
              <p className="text-[15px] font-semibold text-white">
                Miễn phí giao hàng
              </p>
              <p className="mt-1 text-[13px] leading-snug text-white/50">
                Miễn phí giao hàng cho hóa đơn từ 1.000.000đ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
