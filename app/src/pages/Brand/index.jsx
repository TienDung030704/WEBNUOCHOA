import { useState } from "react";
import { useSelector } from "react-redux";
import { ChevronRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BrandPage() {
  const navigate = useNavigate();
  const { brands } = useSelector((state) => state.common);
  const [search, setSearch] = useState("");

  const filtered = brands.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="catalog-page-enter min-h-screen bg-[#1b1b1b] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/8 bg-[#121212] pt-[132px] pb-16">
        <div className="hero-glass-expand absolute inset-y-0 left-0 w-full max-w-[440px] bg-black/35 backdrop-blur-[18px]" />
        <div className="hero-gradient-expand absolute inset-y-0 left-0 w-[36%] bg-gradient-to-r from-[#302313]/65 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(188,134,74,0.18),transparent_38%)]" />
        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-[22px] text-center">
          <h1 className="reveal-up text-[46px] font-medium md:text-[64px]">
            Thương hiệu
          </h1>
          <p className="reveal-up reveal-delay-1 mt-4 max-w-xl text-[15px] text-white/50">
            Khám phá các thương hiệu nước hoa danh tiếng từ khắp nơi trên thế
            giới
          </p>
          <div className="reveal-up reveal-delay-2 mt-5 flex items-center gap-3 text-sm text-white/68">
            <span>Trang chủ</span>
            <ChevronRight size={15} />
            <span className="text-white">Thương hiệu</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-[#202020] py-14">
        <div className="mx-auto max-w-[1280px] px-[22px]">
          {/* SEARCH */}
          <div className="reveal-up mb-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#191919] px-5 py-3.5 max-w-[480px]">
            <Search size={18} className="shrink-0 text-white/35" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm thương hiệu..."
              className="w-full bg-transparent text-[14px] text-white outline-none placeholder:text-white/30"
            />
          </div>

          {/* GRID */}
          <div className="reveal-up reveal-delay-1 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {filtered.map((brand) => (
              <button
                key={brand.id}
                onClick={() => navigate(`/thuong-hieu/${brand.slug}`)}
                className="group flex flex-col items-center gap-3 text-center"
              >
                <div className="w-full aspect-square overflow-hidden rounded-lg border border-white/10 bg-white">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-[13px] font-semibold text-white/70 transition group-hover:text-white">
                  {brand.name}
                </p>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-[15px] text-white/30">
              Không tìm thấy thương hiệu phù hợp.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default BrandPage;
