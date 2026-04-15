import { useState, useMemo } from "react";
import { ChevronRight, Funnel } from "lucide-react";
import { formatVariantPrice } from "@/utils/formatPrice";
import PerfumeCategorySidebar from "@/components/PerfumeCategorySidebar";
import SortDropdown from "@/components/SortDropdown";
import { useNavigate } from "react-router-dom";
import Pagination from "@/components/Panigation";
import usePagination from "@/hooks/usePagination";
import useProductFilter from "@/utils/productFilter";
import { sortProducts } from "@/utils/sortProducts";
function MenPerfumePage() {
  const navigate = useNavigate();

  const { displayProducts } = useProductFilter("MALE");
  const [sortKey, setSortKey] = useState("newest");
  const sortedProducts = useMemo(
    () => sortProducts(displayProducts, sortKey),
    [displayProducts, sortKey],
  );

  const {
    page,
    totalPages,
    currentItems: currentProducts,
    handlePageChange,
  } = usePagination(sortedProducts);

  return (
    <div className="catalog-page-enter min-h-screen bg-[#1b1b1b] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/8 bg-[#121212] pt-[132px] pb-16">
        <div className="hero-glass-expand absolute inset-y-0 left-0 w-full max-w-[440px] bg-black/35 backdrop-blur-[18px]" />
        <div className="hero-gradient-expand absolute inset-y-0 left-0 w-[36%] bg-gradient-to-r from-[#302313]/65 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(188,134,74,0.18),transparent_38%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-[22px] text-center">
          <h1 className="text-[46px] font-medium md:text-[64px]">
            Nước hoa nam
          </h1>

          <div className="mt-5 flex items-center gap-3 text-sm text-white/68">
            <span>Trang chủ</span>
            <ChevronRight size={15} />
            <span>Nước hoa</span>
            <ChevronRight size={15} />
            <span className="text-white">Nước hoa nam</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-[#202020] py-14">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-[22px] lg:grid-cols-[290px_1fr]">
          {/* SIDEBAR */}
          <PerfumeCategorySidebar />

          {/* MAIN */}
          <div className="space-y-6">
            {/* FILTER BAR */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 rounded border border-white/10 bg-[#191919] px-4 py-2 text-sm text-white/80">
                <Funnel size={16} />
                Bộ lọc
              </button>
              <SortDropdown value={sortKey} onChange={setSortKey} />
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {currentProducts.length > 0 ? (
                currentProducts.map((item) => (
                  <div
                    key={item.id}
                    className="group overflow-hidden rounded-[22px] border border-white/8 bg-[#191919] transition-transform duration-300 hover:scale-[1.02]"
                  >
                    {/* IMAGE */}
                    <div className="relative aspect-square overflow-hidden bg-white">
                      <div className="pointer-events-none absolute inset-0 z-10 bg-black/0 shadow-[inset_0_0_0_0_rgba(0,0,0,0)] transition-all duration-500 group-hover:bg-black/20 group-hover:shadow-[inset_0_0_140px_rgba(0,0,0,0.28)]" />
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="relative z-0 h-full w-full object-contain"
                      />
                      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                        <button
                          onClick={() => navigate(`/san-pham/${item.slug}`)}
                          className="relative translate-y-3 cursor-pointer overflow-hidden rounded-full bg-black px-7 py-3 text-[18px] font-semibold text-white opacity-0 shadow-[0_16px_35px_rgba(0,0,0,0.38)] transition-all duration-700 before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-white/25 before:transition-[width] before:duration-500 before:content-[''] group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 hover:before:w-full"
                        >
                          <span className="relative z-10">Xem chi tiết</span>
                        </button>
                      </div>
                    </div>

                    {/* INFO */}
                    <div className="px-5 pb-5 pt-4 text-center">
                      <h3 className="line-clamp-1 text-[16px] font-medium transition-colors duration-300 group-hover:text-red-500">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-[15px] font-semibold text-white/85">
                        {formatVariantPrice(item.variants)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="col-span-full text-center text-white/50">
                  Không có sản phẩm nào
                </p>
              )}
            </div>

            {totalPages > 1 && (
              <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MenPerfumePage;
