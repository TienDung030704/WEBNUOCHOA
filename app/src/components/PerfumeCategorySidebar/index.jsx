import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import useDebounce from "@/hooks/useDebounce";
import { fetchFilterProduct } from "@/service/Product/ProductService";
import { clearFilter } from "@/features/Product/productSlice";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function PerfumeCategorySidebar() {
  const dispatch = useDispatch();
  // phần lấy danh sách các brand và categories
  const brands = useSelector((state) => state.common.brands);
  const categories = useSelector((state) => state.common.categories);
  const [searchParams, setSearchParams] = useSearchParams();
  // Tạo state lưu các gtri vào mảng
  const [checkBrand, setCheckBrand] = useState([]);
  const [checkCategories, setcheckCategories] = useState([]);

  // phần giá trị khởi tạo cho giá max-min
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(17500000);
  //phần làm debounce
  const [searchValue, setSearchValue] = useState("");
  const debounceSearchValue = useDebounce(searchValue, 300);
  // phần lọc khi user nhập tên tìm kiếm thương hiệu chuyển về chữ thường hết và so sánh xem có kí tự
  // trong mảng hay kh
  const filterBrand = brands.filter((item) =>
    item.name.toLowerCase().includes(debounceSearchValue.toLowerCase()),
  );

  // Logic hàm chọn brand nếu chọn thì từ false -> true ngược lại nó vẫn giữ nguyên false
  const handleToggleBrand = (id) => {
    setCheckBrand((prev) => {
      const isSelect = prev.includes(id);
      if (isSelect) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  // Logic hàm chọn categories nếu chọn thì từ false -> true ngược lại nó vẫn giữ nguyên false
  const handleToggleCategories = (id) => {
    setcheckCategories((prev) => {
      const isSelect = prev.includes(id);
      if (isSelect) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const handleFilter = () => {
    const params = {};
    if (checkBrand.length) {
      params.brandId = checkBrand;
    }
    if (checkCategories.length) {
      params.categoryId = checkCategories[0];
    }
    if (minPrice > 0 || maxPrice < 17500000) {
      params["price[min]"] = minPrice;
      params["price[max]"] = maxPrice;
    }
    setSearchParams(params);
  };

  const handleReset = () => {
    setCheckBrand([]);
    setcheckCategories([]);
    setSearchValue("");
    setMinPrice(0);
    setMaxPrice(17500000);
    dispatch(clearFilter());

    setSearchParams({});
  };

  return (
    <aside className="reveal-up reveal-delay-1 space-y-0 border border-white/10 bg-[#1a1a1a] px-5 py-6">
      {/* CATEGORY */}
      <div className="pb-6">
        <button className="flex w-full items-center justify-between text-left text-[19px] font-medium text-white">
          <span>Bộ sưu tập nước hoa</span>
          <ChevronDown size={18} className="text-white/65" />
        </button>
        <div className="mt-5 space-y-3">
          {categories.length > 0 ? (
            categories.map((item) => {
              const isSelected = checkCategories.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3 text-[14px] text-white/90"
                >
                  <Button
                    onClick={() => handleToggleCategories(item.id)}
                    variant="ghost"
                    size="icon-sm"
                    className="h-auto w-auto rounded-full bg-transparent p-0 hover:bg-transparent"
                  >
                    <span
                      className={`h-[22px] w-[22px] rounded-full border transition-colors ${
                        isSelected
                          ? "border-[#5b5b5b] bg-transparent shadow-[inset_0_0_0_5px_#b7b7b7]"
                          : "border-white/16 bg-transparent"
                      }`}
                    />
                  </Button>
                  <span className="cursor-pointer transition hover:text-red-500">
                    {item.name}
                  </span>
                </div>
              );
            })
          ) : (
            <p className="text-sm text-white/40">Không có danh mục</p>
          )}
        </div>
      </div>

      {/* BRAND */}
      <div className="border-t border-white/10 py-6">
        <button className="flex w-full items-center justify-between text-left text-[19px] font-medium text-white">
          <span>Thương hiệu</span>
          <ChevronDown size={18} className="text-white/65" />
        </button>
        <div className="relative mt-4">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            type="text"
            placeholder="Tìm kiếm nhanh"
            className="h-[46px] w-full rounded-[8px] border border-white/14 bg-transparent pl-4 pr-11 text-[14px] text-white outline-none placeholder:text-[#cfc6b8]"
          />
          <Search
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/75"
          />
        </div>
        <div className="brand-scroll mt-5 max-h-[285px] space-y-3 overflow-y-auto pr-2">
          {filterBrand.length > 0 ? (
            filterBrand.map((item) => {
              const isSelected = checkBrand.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3 text-[14px] text-white/90"
                >
                  <Button
                    onClick={() => handleToggleBrand(item.id)}
                    variant="ghost"
                    size="icon-sm"
                    className="h-auto w-auto rounded-full bg-transparent p-0 hover:bg-transparent"
                  >
                    <span
                      className={`h-[22px] w-[22px] rounded-full border transition-colors ${
                        isSelected
                          ? "border-[#5b5b5b] bg-transparent shadow-[inset_0_0_0_5px_#b7b7b7]"
                          : "border-white/16 bg-transparent"
                      }`}
                    />
                  </Button>
                  <span className="cursor-pointer transition hover:text-red-500">
                    {item.name}
                  </span>
                </div>
              );
            })
          ) : (
            <p className="text-sm text-white/40">Không có thương hiệu</p>
          )}
        </div>
      </div>

      {/* PRICE */}
      <div className="border-t border-white/10 pt-6">
        <button className="flex w-full items-center justify-between text-left text-[19px] font-medium text-white">
          <span>Giá</span>
          <ChevronDown size={18} className="rotate-180 text-white/65" />
        </button>

        <div className="mt-5 space-y-5">
          {/* MIN PRICE */}
          <div>
            <p className="mb-2 text-sm text-white/60">Giá thấp nhất</p>
            <input
              type="range"
              min={0}
              max={17500000}
              step={500000}
              value={minPrice}
              onChange={(e) =>
                setMinPrice(Math.min(Number(e.target.value), maxPrice - 500000))
              }
              className="w-full accent-white"
            />
          </div>

          {/* MAX PRICE */}
          <div>
            <p className="mb-2 text-sm text-white/60">Giá cao nhất</p>
            <input
              type="range"
              min={0}
              max={17500000}
              step={500000}
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Math.max(Number(e.target.value), minPrice + 500000))
              }
              className="w-full accent-white"
            />
          </div>

          {/* HIỂN THỊ GIÁ */}
          <p className="text-[16px] font-semibold text-white">
            Giá: {minPrice.toLocaleString()} đ - {maxPrice.toLocaleString()} đ
          </p>

          {/* BUTTON */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleFilter}
              className="min-w-[104px] cursor-ponter rounded-full bg-black px-6 py-2.5 text-[15px] font-medium text-white"
            >
              Lọc
            </button>
            <button
              onClick={handleReset}
              className="min-w-[136px] cursor-ponter rounded-full border border-white/12 bg-transparent px-6 py-2.5 text-[15px] font-medium text-[#e5dccf]"
            >
              Đặt lại
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default PerfumeCategorySidebar;
