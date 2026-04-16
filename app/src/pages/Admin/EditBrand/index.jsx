import { adminGetBrands, adminUpdateBrand } from "@/service/Admin/AdminService";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

function EditBrand() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { brandId } = useParams();

  const brands = useSelector((state) => state.admin.brands);
  const brand = brands.find((b) => b.id === Number(brandId));

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { name: "", slug: "", logo: "", description: "" },
  });

  const logoValue = watch("logo");

  // Nếu brands chưa load (vd: F5 thẳng trang này), fetch lại
  useEffect(() => {
    if (brands.length === 0) {
      dispatch(adminGetBrands());
    }
  }, [dispatch, brands.length]);

  // Khi brand available thì điền form
  useEffect(() => {
    if (brand) {
      reset({
        name: brand.name,
        slug: brand.slug,
        logo: brand.logo || "",
        description: brand.description || "",
      });
    }
  }, [brand, reset]);

  const onSubmit = async (data) => {
    try {
      await dispatch(
        adminUpdateBrand({ brandId: Number(brandId), data }),
      ).unwrap();
      toast.success("Cập nhật thương hiệu thành công!");
      navigate("/admin/thuong-hieu");
    } catch (error) {
      toast.error(error?.message || "Có lỗi xảy ra");
    }
  };

  if (!brand) {
    return (
      <div className="flex items-center justify-center py-20 text-white/40 text-[14px]">
        Đang tải...
      </div>
    );
  }

  return (
    <div className="catalog-page-enter">
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <button
          onClick={() => navigate("/admin/thuong-hieu")}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/50 transition hover:bg-white/5 hover:text-white"
        >
          <ArrowLeft size={16} />
        </button>
        <div>
          <h1 className="text-[28px] font-bold text-white">
            Chỉnh sửa thương hiệu
          </h1>
          <p className="mt-1 text-[14px] text-white/45">
            Cập nhật thông tin của{" "}
            <span className="text-white">{brand.name}</span>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="rounded-2xl border border-white/8 bg-white/3 p-6 space-y-5">
          <h2 className="text-[15px] font-semibold text-white">
            Thông tin cơ bản
          </h2>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-white/60">
              Tên thương hiệu <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Tên thương hiệu là bắt buộc" })}
              className="rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-[13px] text-white outline-none placeholder:text-white/30 focus:border-white/25"
            />
            {errors.name && (
              <p className="text-[12px] text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-white/60">
              Slug <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              {...register("slug", { required: "Slug là bắt buộc" })}
              className="rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-[13px] text-white outline-none placeholder:text-white/30 focus:border-white/25"
            />
            {errors.slug && (
              <p className="text-[12px] text-red-400">{errors.slug.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-white/60">Logo URL</label>
            <input
              type="text"
              {...register("logo")}
              className="rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-[13px] text-white outline-none placeholder:text-white/30 focus:border-white/25"
              placeholder="VD: /chanel.jpg"
            />
            {logoValue && (
              <img
                src={logoValue}
                alt="preview"
                className="mt-2 h-14 w-14 rounded-lg bg-white object-contain p-1"
              />
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-white/60">Mô tả</label>
            <textarea
              {...register("description")}
              rows={3}
              className="resize-none rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-[13px] text-white outline-none placeholder:text-white/30 focus:border-white/25"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => navigate("/admin/thuong-hieu")}
            className="rounded-xl border border-white/10 px-5 py-2.5 text-[13px] text-white/60 transition hover:bg-white/5"
          >
            Hủy
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-white px-6 py-2.5 text-[13px] font-semibold text-black transition hover:bg-white/90 disabled:opacity-50"
          >
            {isSubmitting ? "Đang lưu..." : "Lưu thay đổi"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditBrand;
