import { authMe } from "@/service/Auth/AuthService";
import { updateProfile } from "@/service/User/UserService";
import { Camera } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function AccountInfo() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(authMe());
  }, []);

  //  đổ data từ redux vào form dùng reset
  useEffect(() => {
    if (user) {
      reset({
        fullName: user.fullName || "",
        username: user.username || "",
        phone: user.phone || "",
        email: user.email || "",
        dateOfBirth: user.dateOfBirth?.slice(0, 10) || "",
      });
    }
  }, [user, reset]);

  //
  const onSubmit = async (data) => {
    try {
      await dispatch(updateProfile(data)).unwrap();
      await dispatch(authMe());
      toast.success("Cập nhật thông tin thành công!", {
        duration: 2000,
        position: "top-right",
      });
    } catch (error) {
      toast.error(error?.message || "Cập nhật thất bại, vui lòng thử lại!", {
        duration: 3000,
        position: "top-right",
      });
    }
  };

  return (
    <div>
      <h2 className="mb-7 text-[26px] font-bold text-white">
        Thông tin tài khoản
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col-reverse gap-6 lg:flex-row lg:gap-10">
          {/* Form fields */}
          <div className="flex flex-1 flex-col gap-5">
            {/* Họ và tên */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-white/70">
                Họ và tên <span className="text-red-400">*</span>
              </label>
              <input
                {...register("fullName")}
                type="text"
                className="h-11 w-full rounded-lg border border-white/10 bg-white/5 px-4 text-[14px] text-white outline-none"
              />
            </div>

            {/* Tên hiển thị */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-white/70">
                Tên hiển thị <span className="text-red-400">*</span>
              </label>
              <input
                {...register("username")}
                type="text"
                className="h-11 w-full rounded-lg border border-white/10 bg-white/5 px-4 text-[14px] text-white outline-none"
              />
            </div>

            {/* Số điện thoại */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-white/70">Số điện thoại</label>
              <input
                {...register("phone")}
                type="tel"
                className="h-11 w-full rounded-lg border border-white/10 bg-white/5 px-4 text-[14px] text-white outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-white/70">Email</label>
              <input
                {...register("email")}
                type="email"
                disabled
                className="h-11 w-full rounded-lg border border-white/10 bg-white/5 px-4 text-[14px] text-white/70 outline-none"
              />
            </div>

            {/* Ngày sinh */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-white/70">Ngày sinh</label>
              <input
                {...register("dateOfBirth")}
                type="date"
                className="h-11 w-full rounded-lg border border-white/10 bg-white/5 px-4 text-[14px] text-white/70 outline-none"
              />
            </div>

            {/* Submit */}
            <div className="mt-2">
              <button
                type="submit"
                className="rounded-full bg-white px-7 py-2.5 text-[14px] font-semibold text-[#111113]"
              >
                Lưu thay đổi
              </button>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-center lg:gap-3 lg:pt-1">
            <button
              type="button"
              className="relative flex h-[140px] w-[140px] items-center justify-center rounded-full border-2 border-white/15 bg-white/5"
            >
              <Camera size={28} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AccountInfo;
