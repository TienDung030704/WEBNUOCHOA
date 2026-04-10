import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRight, ChevronDown } from "lucide-react";
import { fetchFeaturedProducts } from "@/service/Product/ProductService";
import { formatVariantPrice } from "@/utils/formatPrice";

function HomePage() {
  const backgrounds = ["/bg-1.jpg", "/bg-2.jpg", "/bg-3.jpg"];
  const [activeBackground, setActiveBackground] = useState(0);

  const dispatch = useDispatch();
  const bestSellers = useSelector((state) => state.product.featuredProducts);

  // ── Best sellers step-scroll ──
  const trackRef = useRef(null);
  const [step, setStep] = useState(0);
  const [cardWidth, setCardWidth] = useState(276);

  useEffect(() => {
    dispatch(fetchFeaturedProducts());
  }, [dispatch]);

  // Measure actual card width after products load
  useEffect(() => {
    if (!trackRef.current || !bestSellers.length) return;
    const card = trackRef.current.querySelector("a");
    if (card) setCardWidth(card.offsetWidth + 16); // width + gap-4
  }, [bestSellers]);

  // Advance one step every 3s
  useEffect(() => {
    if (!bestSellers.length) return;
    const id = setInterval(() => setStep((prev) => prev + 1), 3000);
    return () => clearInterval(id);
  }, [bestSellers.length]);

  // Seamless infinite reset: when we've scrolled into the duplicate copy, snap back
  useEffect(() => {
    if (step >= bestSellers.length && bestSellers.length > 0) {
      const tid = setTimeout(() => {
        const el = trackRef.current;
        if (el) el.style.transition = "none";
        setStep(0);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            if (trackRef.current)
              trackRef.current.style.transition =
                "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)";
          }),
        );
      }, 650);
      return () => clearTimeout(tid);
    }
  }, [step, bestSellers.length]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveBackground((prev) => (prev + 1) % backgrounds.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div
        key={activeBackground}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="hero-bg-fade absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgrounds[activeBackground]}')` }}
        />
        <div className="absolute inset-0 bg-black/12" />
        <div className="hero-glass-expand absolute inset-y-0 left-0 w-full max-w-[640px] bg-black/18 backdrop-blur-[8px]" />
        <div className="hero-gradient-expand absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
      </div>

      <div className="relative z-10">
        <section className="flex min-h-[calc(100vh-92px)] w-full items-center justify-between gap-8 px-[22px] pt-2">
          <div className="max-w-[760px] space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-light text-white/75 md:text-base">
                Bộ sưu tập nước hoa
              </p>

              <div className="space-y-4">
                <h1 className="w-max text-[58px] font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-[88px] lg:text-[110px] whitespace-nowrap">
                  DUWNG Perfume
                </h1>

                <p className="text-base leading-8 text-white/88 md:text-[18px]">
                  Chúng tôi tin rằng mọi thứ xuất phát từ đam mê và khát vọng cá
                  nhân là chìa khóa dẫn đến thành công. DUWNG Perfume mong muốn
                  lan tỏa nguồn năng lượng tích cực này đến với mọi người. Đặc
                  biệt nhất chính là sự thỏa mãn đam mê vẻ đẹp của những tầng
                  hương.
                </p>
              </div>
            </div>
            <div>
              <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-black/25 px-7 py-4 text-base font-medium text-white transition-all hover:border-white/35">
                <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/28 transition-all duration-500 ease-out group-hover:h-[220px] group-hover:w-[220px]" />
                <span className="relative z-10">Mua ngay</span>
                <ArrowRight size={18} className="relative z-10" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center pr-[22px]">
            {backgrounds.map((_, index) => {
              const isActive = activeBackground === index;
              const isLast = index === backgrounds.length - 1;

              return (
                <div key={index} className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setActiveBackground(index)}
                    className={`group relative cursor-pointer text-[15px] font-light transition-all duration-300 ${
                      isActive
                        ? "text-white scale-110"
                        : "text-white/35 hover:text-white hover:scale-125"
                    }`}
                  >
                    <span
                      className={`absolute -inset-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-white/8"
                          : "bg-transparent group-hover:bg-white/5"
                      }`}
                    />
                    <span className="relative">{index + 1}</span>
                  </button>
                  {!isLast && (
                    <div className="my-2 h-10 w-px bg-[#0a2540]/80" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-black py-5">
          <div className="overflow-hidden px-[22px]">
            <ul
              className="home-benefit-marquee"
              aria-label="Lợi ích mua sắm tại DUWNG Perfume"
            >
              <li className="home-benefit-marquee-track">
                <span className="home-benefit-item">
                  <span>ĐẢM BẢO CHẤT LƯỢNG</span>
                  <span className="home-benefit-divider" aria-hidden="true" />
                </span>
                <span className="home-benefit-item">
                  <span>HỖ TRỢ NHANH CHÓNG</span>
                  <span className="home-benefit-divider" aria-hidden="true" />
                </span>
                <span className="home-benefit-item">
                  <span>THANH TOÁN TIỆN LỢI</span>
                  <span className="home-benefit-divider" aria-hidden="true" />
                </span>
                <span className="home-benefit-item">
                  <span>GIAO HÀNG NHANH</span>
                  <span className="home-benefit-divider" aria-hidden="true" />
                </span>
              </li>

              <li className="home-benefit-marquee-track" aria-hidden="true">
                <span className="home-benefit-item">
                  <span>ĐẢM BẢO CHẤT LƯỢNG</span>
                  <span className="home-benefit-divider" aria-hidden="true" />
                </span>
                <span className="home-benefit-item">
                  <span>HỖ TRỢ NHANH CHÓNG</span>
                  <span className="home-benefit-divider" aria-hidden="true" />
                </span>
                <span className="home-benefit-item">
                  <span>THANH TOÁN TIỆN LỢI</span>
                  <span className="home-benefit-divider" aria-hidden="true" />
                </span>
                <span className="home-benefit-item">
                  <span>GIAO HÀNG NHANH</span>
                  <span className="home-benefit-divider" aria-hidden="true" />
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#1d1f20_0%,#181a1b_45%,#131415_100%)] px-[22px] py-20 md:py-28">
          <div className="mx-auto flex max-w-[1120px] flex-col items-center text-center text-white">
            <h2 className="text-[48px] font-extralight tracking-[-0.06em] text-white sm:text-[72px] md:text-[108px] lg:text-[124px]">
              GIỚI THIỆU
            </h2>

            <p className="mt-3 text-[24px] font-medium tracking-[-0.03em] text-white sm:text-[34px] md:mt-5 md:text-[40px]">
              Về DUWNG Perfume
            </p>

            <div className="mt-8 max-w-[980px] text-center text-[13px] leading-6 text-white/92 sm:text-[14px] sm:leading-7 md:mt-10 md:text-[15px] md:leading-8">
              <p>
                Sứ mệnh của DUWNG Perfume chính là việc kiến tạo một thương hiệu
                mang đến cho khách hàng những trải nghiệm hương thơm độc đáo,
                mang đậm dấu ấn cá nhân. Để hiện thực hóa điều này, DUWNG
                Perfume xây dựng triết lý kinh doanh của mình trên nền tảng ba
                trụ cột vững chắc: “Luxe – Art – Nostalgia”. Chúng tôi tin rằng
                sự Sang trọng (Luxe) không chỉ nằm ở vẻ ngoài mà còn thấm sâu
                trong chất lượng nguyên liệu và sự tinh tế của từng công đoạn.
                Mỗi sản phẩm là một tác phẩm Nghệ thuật (Art), khơi gợi xúc cảm,
                nơi các tầng hương được chế tác tỉ mỉ, hài hòa, mang đến những
                trải nghiệm độc đáo và đầy cảm xúc. Mỗi mùi hương là một dấu ấn
                thời gian, lưu giữ những khoảnh khắc đáng nhớ và khơi dậy những
                ký ức đẹp (Nostalgia).
              </p>
            </div>

            <button className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-white/95 transition-colors hover:text-white md:mt-10">
              <span>Xem thêm</span>
              <ChevronDown size={16} className="text-white/80" />
            </button>
          </div>
        </section>

        {/* ── BEST SELLERS ── */}
        {bestSellers.length > 0 && (
          <section className="bg-[#111113] py-16 md:py-24">
            <h2 className="mb-10 text-center text-[28px] font-light tracking-[0.05em] text-white md:text-[36px]">
              Danh Sách Sản phẩm
            </h2>

            <div className="overflow-hidden">
              <div
                ref={trackRef}
                className="flex gap-4 px-[22px]"
                style={{
                  transform: `translateX(-${step * cardWidth}px)`,
                  transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {[...bestSellers, ...bestSellers].map((product, i) => (
                  <NavLink
                    key={i}
                    to={`/san-pham/${product.slug}`}
                    className="group w-[220px] shrink-0 sm:w-[260px]"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-white">
                      <div className="absolute right-3 top-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                        {product.brand?.name}
                      </div>
                      <div className="flex aspect-[3/4] items-center justify-center p-6">
                        <img
                          src={product.thumbnail}
                          alt={product.name}
                          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="mt-3 px-1 text-center">
                      <p className="line-clamp-2 text-[13px] leading-5 text-white/85">
                        {product.name}
                      </p>
                      <p className="mt-1 text-[12px] text-white/45">
                        {formatVariantPrice(product.variants)}
                      </p>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
export default HomePage;
