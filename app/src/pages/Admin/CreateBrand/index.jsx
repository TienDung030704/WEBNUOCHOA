import { adminCreateBrand } from "@/service/Admin/AdminService";
import { slugify } from "@/utils/slugify";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function CreateBrand() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { name: "", slug: "", logo: "", description: "" },
  });

  const logoValue = watch("logo");

  const onSubmit = async (data) => {
    try {
      await dispatch(adminCreateBrand(data)).unwrap();
      toast.success("Tạo thương hiệu thành công!");
      navigate("/admin/thuong-hieu");
    } catch (error) {
      toast.error(error?.message || "Có lỗi xảy ra");
    }
  };

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
          <h1 className="text-[28px] font-bold text-white">Thêm thương hiệu</h1>
          <p className="mt-1 text-[14px] text-white/45">
            Điền thông tin thương hiệu mới
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
              {...register("name", {
                required: "Tên thương hiệu là bắt buộc",
                onChange: (e) => setValue("slug", slugify(e.target.value)),
              })}
              className="rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-[13px] text-white outline-none placeholder:text-white/30 focus:border-white/25"
              placeholder="VD: Chanel"
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
              placeholder="VD: chanel"
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
              placeholder="Mô tả ngắn về thương hiệu..."
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
            {isSubmitting ? "Đang lưu..." : "Tạo thương hiệu"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBrand;
