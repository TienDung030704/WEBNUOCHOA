import useDebounce from "@/hooks/useDebounce";
import { adminGetBrands, adminDeleteBrand } from "@/service/Admin/AdminService";
import { Pencil, Plus, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Brands() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const brands = useSelector((state) => state.admin.brands);

  const [searchValue, setSearchValue] = useState("");
  const debounced = useDebounce(searchValue, 200);

  useEffect(() => {
    dispatch(adminGetBrands());
  }, [dispatch]);

  const filtered = brands.filter(
    (b) =>
      b.name.toLowerCase().includes(debounced.toLowerCase()) ||
      b.slug.toLowerCase().includes(debounced.toLowerCase()),
  );

  const handleDelete = async (brandId) => {
    try {
      await dispatch(adminDeleteBrand(brandId)).unwrap();
      toast.success("Xóa thương hiệu thành công!");
      dispatch(adminGetBrands());
    } catch (error) {
      toast.error(error?.message || "Xóa thất bại");
    }
  };

  return (
    <div className="catalog-page-enter">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-[28px] font-bold text-white">Thương hiệu</h1>
          <p className="mt-1 text-[14px] text-white/45">
            Quản lý danh sách thương hiệu
          </p>
        </div>
        <button
          onClick={() => navigate("/admin/thuong-hieu/tao-moi")}
          className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[13px] font-semibold text-black transition-all hover:bg-white/90"
        >
          <Plus size={15} />
          Thêm thương hiệu
        </button>
      </div>

      {/* Search */}
      <div className="mb-5 reveal-up reveal-delay-1">
        <div className="flex max-w-md items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-2.5">
          <Search size={15} className="shrink-0 text-white/35" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Tìm kiếm thương hiệu..."
            className="w-full bg-transparent text-[13px] text-white outline-none placeholder:text-white/30"
          />
        </div>
      </div>

      {/* Table */}
      <div className="reveal-up reveal-delay-2 rounded-2xl border border-white/8 bg-white/3">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/6">
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Thương hiệu
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Slug
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Sản phẩm
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr className="border-b border-white/5">
                  <td
                    className="px-5 py-10 text-center text-[13px] text-white/30"
                    colSpan={4}
                  >
                    Chưa có dữ liệu
                  </td>
                </tr>
              ) : (
                filtered.map((brand) => (
                  <tr
                    key={brand.id}
                    className="border-b border-white/5 transition-colors hover:bg-white/3"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        {brand.logo ? (
                          <img
                            src={brand.logo}
                            alt={brand.name}
                            className="h-10 w-10 rounded-lg bg-white object-contain p-1"
                          />
                        ) : (
                          <div className="h-10 w-10 rounded-lg bg-white/8" />
                        )}
                        <span className="text-[13px] text-white">
                          {brand.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-white/50">
                      {brand.slug}
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-white/60">
                      {brand._count?.products ?? 0} sản phẩm
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            navigate(`/admin/thuong-hieu/${brand.id}/sua`)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                        >
                          <Pencil size={13} />
                        </button>
                        <button
                          onClick={() => handleDelete(brand.id)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="border-t border-white/6 px-5 py-4">
          <p className="text-[13px] text-white/40">
            Hiển thị {filtered.length} thương hiệu
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brands;
