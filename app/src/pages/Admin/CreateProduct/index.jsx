import { adminCreateProduct } from "@/service/Admin/AdminService";
import { fetchBrands, fetchCategories } from "@/service/Product/ProductService";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useEffect } from "react";

const CONCENTRATIONS = [
  { value: "PARFUM", label: "Parfum (20–30%)" },
  { value: "EDP", label: "Eau de Parfum (15–20%)" },
  { value: "EDT", label: "Eau de Toilette (5–15%)" },
  { value: "EDC", label: "Eau de Cologne (2–5%)" },
  { value: "EDX", label: "Eau Fraîche (<3%)" },
];

const GENDERS = [
  { value: "MALE", label: "Nam" },
  { value: "FEMALE", label: "Nữ" },
  { value: "UNISEX", label: "Unisex" },
];

function CreateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const brands = useSelector((state) => state.common.brands);
  const categories = useSelector((state) => state.common.categories);

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchCategories());
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      slug: "",
      concentration: "",
      gender: "UNISEX",
      brandName: "",
      categoryName: "",
      thumbnail: "",
      isActive: true,
      isFeatured: false,
      variants: [{ volume: "", price: "", salePrice: "", stock: "", sku: "" }],
      images: [{ url: "", altText: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants",
  });

  const {
    fields: imageFields,
    append: appendImage,
    remove: removeImage,
  } = useFieldArray({
    control,
    name: "images",
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(adminCreateProduct(data)).unwrap();
      toast.success("Tạo sản phẩm thành công!");
      navigate("/admin/san-pham");
    } catch (error) {
      toast.error(error?.message || "Tạo sản phẩm thất bại");
    }
  };

  return (
    <div className="catalog-page-enter">
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <button
          onClick={() => navigate("/admin/san-pham")}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/50 transition hover:bg-white/5 hover:text-white"
        >
          <ArrowLeft size={16} />
        </button>
        <div>
          <h1 className="text-[28px] font-bold text-white">Thêm sản phẩm</h1>
          <p className="mt-1 text-[14px] text-white/45">
            Điền thông tin sản phẩm mới
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Thông tin cơ bản */}
        <div className="rounded-2xl border border-white/8 bg-white/3 p-6">
          <h2 className="mb-5 text-[15px] font-semibold text-white">
            Thông tin cơ bản
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Tên */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-white/60">
                Tên sản phẩm <span className="text-red-400">*</span>
              </label>
              <input
                {...register("name", { required: "Bắt buộc" })}
                className="rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-[13px] text-white outline-none placeholder:text-white/30 focus:border-white/25"
                placeholder="Tom Ford Black Orchid EDP"
              />
              {errors.name && (
                <p className="text-[12px] text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Slug */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-white/60">
                Slug <span className="text-red-400">*</span>
              </label>
              <input
                {...register("slug", { required: "Bắt buộc" })}
                className="rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-[13px] text-white outline-none placeholder:text-white/30 focus:border-white/25"
                placeholder="tom-ford-black-orchid-edp"
              />
              {errors.slug && (
                <p className="text-[12px] text-red-400">
                  {errors.slug.message}
                </p>
              )}
            </div>

            {/* Thương hiệu */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-white/60">
                Thương hiệu <span className="text-red-400">*</span>
              </label>
              <select
                {...register("brandName", { required: "Bắt buộc" })}
                className="rounded-xl border border-white/10 bg-[#111113] px-4 py-2.5 text-[13px] text-white/70 outline-none focus:border-white/25"
              >
                <option value="">Chọn thương hiệu</option>
                {brands.map((b) => (
                  <option key={b.id} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>
              {errors.brandName && (
                <p className="text-[12px] text-red-400">
                  {errors.brandName.message}
                </p>
              )}
            </div>

            {/* Danh mục */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-white/60">
                Danh mục <span className="text-red-400">*</span>
              </label>
              <select
                {...register("categoryName", { required: "Bắt buộc" })}
                className="rounded-xl border border-white/10 bg-[#111113] px-4 py-2.5 text-[13px] text-white/70 outline-none focus:border-white/25"
              >
                <option value="">Chọn danh mục</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              {errors.categoryName && (
                <p className="text-[12px] text-red-400">
                  {errors.categoryName.message}
                </p>
              )}
            </div>

            {/* Nồng độ */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-white/60">
                Nồng độ <span className="text-red-400">*</span>
              </label>
              <select
                {...register("concentration", { required: "Bắt buộc" })}
                className="rounded-xl border border-white/10 bg-[#111113] px-4 py-2.5 text-[13px] text-white/70 outline-none focus:border-white/25"
              >
                <option value="">Chọn nồng độ</option>
                {CONCENTRATIONS.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
              {errors.concentration && (
                <p className="text-[12px] text-red-400">
                  {errors.concentration.message}
                </p>
              )}
            </div>

            {/* Giới tính */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-white/60">Giới tính</label>
              <select
                {...register("gender")}
                className="rounded-xl border border-white/10 bg-[#111113] px-4 py-2.5 text-[13px] text-white/70 outline-none focus:border-white/25"
              >
                {GENDERS.map((g) => (
                  <option key={g.value} value={g.value}>
                    {g.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Thumbnail */}
            <div className="col-span-2 flex flex-col gap-1.5">
              <label className="text-[13px] text-white/60">URL Thumbnail</label>
              <input
                {...register("thumbnail")}
                className="rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-[13px] text-white outline-none placeholder:text-white/30 focus:border-white/25"
                placeholder="https://..."
              />
            </div>

            {/* Toggles */}
            <div className="flex items-center gap-6">
              <label className="flex cursor-pointer items-center gap-2 text-[13px] text-white/60">
                <input
                  type="checkbox"
                  {...register("isActive")}
                  className="accent-white"
                />
                Kích hoạt
              </label>
              <label className="flex cursor-pointer items-center gap-2 text-[13px] text-white/60">
                <input
                  type="checkbox"
                  {...register("isFeatured")}
                  className="accent-white"
                />
                Nổi bật
              </label>
            </div>
          </div>
        </div>

        {/* Variants */}
        <div className="rounded-2xl border border-white/8 bg-white/3 p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-[15px] font-semibold text-white">
              Phiên bản (Variants)
            </h2>
            <button
              type="button"
              onClick={() =>
                append({
                  volume: "",
                  price: "",
                  salePrice: "",
                  stock: "",
                  sku: "",
                })
              }
              className="flex items-center gap-1.5 rounded-xl border border-white/10 px-3 py-1.5 text-[13px] text-white/60 transition hover:bg-white/5 hover:text-white"
            >
              <Plus size={13} />
              Thêm variant
            </button>
          </div>

          <div className="space-y-3">
            {/* Header */}
            <div className="grid grid-cols-[80px_1fr_1fr_80px_120px_32px] gap-3">
              {["ML", "Giá gốc", "Giá sale", "Tồn kho", "SKU", ""].map((h) => (
                <p
                  key={h}
                  className="text-[12px] font-medium uppercase tracking-wider text-white/40"
                >
                  {h}
                </p>
              ))}
            </div>

            {fields.map((field, index) => (
              <div
                key={field.id}
                className="grid grid-cols-[80px_1fr_1fr_80px_120px_32px] items-center gap-3"
              >
                <input
                  {...register(`variants.${index}.volume`)}
                  type="number"
                  placeholder="50"
                  className="rounded-xl border border-white/10 bg-white/4 px-3 py-2 text-[13px] text-white outline-none placeholder:text-white/30"
                />
                <input
                  {...register(`variants.${index}.price`)}
                  type="number"
                  placeholder="1500000"
                  className="rounded-xl border border-white/10 bg-white/4 px-3 py-2 text-[13px] text-white outline-none placeholder:text-white/30"
                />
                <input
                  {...register(`variants.${index}.salePrice`)}
                  type="number"
                  placeholder="Không bắt buộc"
                  className="rounded-xl border border-white/10 bg-white/4 px-3 py-2 text-[13px] text-white outline-none placeholder:text-white/30"
                />
                <input
                  {...register(`variants.${index}.stock`)}
                  type="number"
                  placeholder="0"
                  className="rounded-xl border border-white/10 bg-white/4 px-3 py-2 text-[13px] text-white outline-none placeholder:text-white/30"
                />
                <input
                  {...register(`variants.${index}.sku`)}
                  placeholder="SKU-001"
                  className="rounded-xl border border-white/10 bg-white/4 px-3 py-2 text-[13px] text-white outline-none placeholder:text-white/30"
                />
                <button
                  type="button"
                  onClick={() => remove(index)}
                  disabled={fields.length === 1}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/30 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 disabled:opacity-30"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Ảnh sản phẩm */}
        <div className="rounded-2xl border border-white/8 bg-white/3 p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-[15px] font-semibold text-white">
              Ảnh sản phẩm
            </h2>
            <button
              type="button"
              onClick={() => appendImage({ url: "", altText: "" })}
              className="flex items-center gap-1.5 rounded-xl border border-white/10 px-3 py-1.5 text-[13px] text-white/60 transition hover:bg-white/5 hover:text-white"
            >
              <Plus size={13} />
              Thêm ảnh
            </button>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-[1fr_180px_32px] gap-3">
              {["URL ảnh", "Alt text", ""].map((h) => (
                <p
                  key={h}
                  className="text-[12px] font-medium uppercase tracking-wider text-white/40"
                >
                  {h}
                </p>
              ))}
            </div>

            {imageFields.map((field, index) => (
              <div
                key={field.id}
                className="grid grid-cols-[1fr_180px_32px] items-center gap-3"
              >
                <input
                  {...register(`images.${index}.url`)}
                  placeholder="https://example.com/image.jpg"
                  className="rounded-xl border border-white/10 bg-white/4 px-3 py-2 text-[13px] text-white outline-none placeholder:text-white/30"
                />
                <input
                  {...register(`images.${index}.altText`)}
                  placeholder="Mô tả ảnh (tuỳ chọn)"
                  className="rounded-xl border border-white/10 bg-white/4 px-3 py-2 text-[13px] text-white outline-none placeholder:text-white/30"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  disabled={imageFields.length === 1}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/30 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 disabled:opacity-30"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate("/admin/san-pham")}
            className="rounded-xl border border-white/10 px-5 py-2.5 text-[13px] text-white/60 transition hover:bg-white/5 hover:text-white"
          >
            Huỷ
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-white px-5 py-2.5 text-[13px] font-semibold text-black transition hover:bg-white/90 disabled:opacity-50"
          >
            {isSubmitting ? "Đang tạo..." : "Tạo sản phẩm"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
