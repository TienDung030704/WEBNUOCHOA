import { authMe } from "@/service/Auth/AuthService";
import { updatePassword } from "@/service/User/UserService";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

function ChangePassword() {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    dispatch(authMe());
  }, []);

  const onSubmit = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("Mật khẩu xác nhận không khớp!", {
        duration: 3000,
        position: "top-right",
      });
      return;
    }
    try {
      await dispatch(updatePassword(data)).unwrap();
      toast.success("Cập nhật mật khẩu thành công!", {
        duration: 2000,
        position: "top-right",
      });
      reset();
    } catch (error) {
      toast.error(error?.message || "Cập nhật thất bại, vui lòng thử lại!", {
        duration: 3000,
        position: "top-right",
      });
    }
  };

  return (
    <div>
      <h2 className="mb-7 text-[26px] font-bold text-white">Đổi mật khẩu</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-md flex flex-col gap-5">
          {/* Mật khẩu hiện tại */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-white/70">
              Mật khẩu hiện tại <span className="text-red-400">*</span>
            </label>
            <input
              {...register("currentPassword")}
              type="password"
              className="h-11 w-full rounded-lg border border-white/10 bg-white/5 px-4 text-[14px] text-white placeholder-white/25 outline-none transition focus:border-white/30 focus:bg-white/8"
            />
          </div>

          {/* Mật khẩu mới */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-white/70">
              Mật khẩu mới <span className="text-red-400">*</span>
            </label>
            <input
              {...register("newPassword")}
              type="password"
              className="h-11 w-full rounded-lg border border-white/10 bg-white/5 px-4 text-[14px] text-white placeholder-white/25 outline-none transition focus:border-white/30 focus:bg-white/8"
            />
          </div>

          {/* Xác nhận mật khẩu mới */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-white/70">
              Xác nhận mật khẩu mới <span className="text-red-400">*</span>
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              className="h-11 w-full rounded-lg border border-white/10 bg-white/5 px-4 text-[14px] text-white placeholder-white/25 outline-none transition focus:border-white/30 focus:bg-white/8"
            />
          </div>

          {/* Submit */}
          <div className="mt-2">
            <button
              type="submit"
              className="rounded-full bg-white px-7 py-2.5 text-[14px] font-semibold text-[#111113] transition hover:bg-white/90"
            >
              Cập nhật mật khẩu
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
