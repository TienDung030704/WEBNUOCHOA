import Pagination from "@/components/Panigation";
import { formatVariantPrice } from "@/utils/formatPrice";
import useDebounce from "@/hooks/useDebounce";
import {
  adminDeleteProduct,
  adminGetProducts,
} from "@/service/Admin/AdminService";
import { Pencil, Plus, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const PAGE_SIZE = 10;

const GENDER_LABEL = { MALE: "Nam", FEMALE: "Nữ", UNISEX: "Unisex" };

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.admin.products);

  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(products.length / PAGE_SIZE));
  const pagedProducts = products.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(adminGetProducts()).unwrap();
      } catch (error) {
        console.log("ERROR FE:", error);
      }
    };
    fetchData();
  }, []);

  // hàm logic xóa delete sản phẩm
  const handleDelete = async (productId) => {
    try {
      await dispatch(adminDeleteProduct(productId)).unwrap();
      toast.success("xóa sản phẩm thành công!");
      await dispatch(adminGetProducts()).unwrap();
    } catch (error) {
      console.log("ERROR FE:", error);
    }
  };

  // hàm logic update sản phẩm
  const handleUpdate = (productId) => {
    navigate(`/admin/san-pham/${productId}/sua`);
  };

  const [searchValue, setSearchValue] = useState("");
  const debounceSearchValue = useDebounce(searchValue, 200);
  return (
    <div className="catalog-page-enter">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-[28px] font-bold text-white">Sản phẩm</h1>
          <p className="mt-1 text-[14px] text-white/45">
            Quản lý danh sách sản phẩm
          </p>
        </div>
        <button
          onClick={() => navigate("/admin/san-pham/tao-moi")}
          className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[13px] font-semibold text-black transition-all hover:bg-white/90"
        >
          <Plus size={15} />
          Thêm sản phẩm
        </button>
      </div>

      {/* Filter bar */}
      <div className="mb-5 flex items-center gap-3 reveal-up reveal-delay-1">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-2.5">
          <Search size={15} className="shrink-0 text-white/35" />
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="w-full bg-transparent text-[13px] text-white outline-none placeholder:text-white/30"
          />
        </div>
        <select className="rounded-xl border border-white/10 bg-[#111113] px-4 py-2.5 text-[13px] text-white/70 outline-none">
          <option value="">Tất cả thương hiệu</option>
        </select>
        <select className="rounded-xl border border-white/10 bg-[#111113] px-4 py-2.5 text-[13px] text-white/70 outline-none">
          <option value="">Tất cả giới tính</option>
          <option value="MALE">Nam</option>
          <option value="FEMALE">Nữ</option>
          <option value="UNISEX">Unisex</option>
        </select>
      </div>

      {/* Table */}
      <div className="reveal-up reveal-delay-2 rounded-2xl border border-white/8 bg-white/3">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/6">
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Sản phẩm
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Thương hiệu
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Giới tính
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Giá
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Tồn kho
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr className="border-b border-white/5">
                  <td
                    className="px-5 py-10 text-center text-[13px] text-white/30"
                    colSpan={6}
                  >
                    Chưa có dữ liệu
                  </td>
                </tr>
              ) : (
                pagedProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-white/5 transition-colors hover:bg-white/3"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        {product.thumbnail ? (
                          <img
                            src={product.thumbnail}
                            alt={product.name}
                            className="h-10 w-10 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="h-10 w-10 rounded-lg bg-white/8" />
                        )}
                        <span className="text-[13px] text-white">
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-white/60">
                      {product.brand?.name || "—"}
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-white/60">
                      {GENDER_LABEL[product.gender] || product.gender}
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-white/60">
                      {product.variants.length
                        ? formatVariantPrice(product.variants)
                        : "—"}
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-white/60">
                      {product.variants.reduce((sum, v) => sum + v.stock, 0)}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleUpdate(product.id)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                        >
                          <Pencil size={13} />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
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

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-white/6 px-5 py-4">
          <p className="text-[13px] text-white/40">
            Hiển thị {products.length} sản phẩm
          </p>
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
