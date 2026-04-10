import { NavLink, useNavigate } from "react-router-dom";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
import { useDispatch } from "react-redux";
import { authRegister } from "@/service/Auth/AuthService";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/utils/validate";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useShowPassword } from "@/utils/showPassword";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    resolver: yupResolver(registerSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { show: showPwd, toggle: togglePwd } = useShowPassword();
  const { show: showConfirmPwd, toggle: toggleConfirmPwd } = useShowPassword();
  const onSubmit = async (data) => {
    try {
      await dispatch(authRegister(data)).unwrap();
      toast.success(
        "Đăng ký thành công! Vui lòng kiểm tra email để xác thực tài khoản.",
        {
          duration: 4000,
          position: "top-right",
        },
      );
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Đăng ký thất bại, vui lòng thử lại!", {
        duration: 3000,
        position: "top-right",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-h-screen bg-[#1f2022] text-white pt-[92px]">
        <section className="px-[22px] pb-16 pt-14">
          <div className="mx-auto max-w-[1410px]">
            <div className="mb-24 flex items-center gap-3 text-[18px] text-white/95">
              <NavLink to="/" className="transition-colors hover:text-white/75">
                Trang chủ
              </NavLink>
              <ChevronRight size={20} className="text-white/60" />
              <span>Đăng Ký</span>
            </div>

            <div className="mx-auto w-full max-w-[580px] rounded-[8px] border border-white/5 bg-[#1a1b1d] px-9 py-10 shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
              <div className="space-y-8">
                <h1 className="text-center text-[48px] font-medium tracking-[-0.03em] text-white">
                  Đăng Ký
                </h1>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <label className="block text-[17px] text-white">Họ</label>
                      <input
                        type="text"
                        className="h-[50px] w-full rounded-[6px] border border-white/14 bg-transparent px-4 text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/25"
                        {...register("firstname")}
                      />
                      {errors.firstname && (
                        <p className="text-red-500 text-sm mt-1 text-left">
                          {errors.firstname.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <label className="block text-[17px] text-white">
                        Tên
                      </label>
                      <input
                        type="text"
                        className="h-[50px] w-full rounded-[6px] border border-white/14 bg-transparent px-4 text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/25"
                        {...register("lastname")}
                      />
                      {errors.lastname && (
                        <p className="text-red-500 text-sm mt-1 text-left">
                          {errors.lastname.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-[17px] text-white">
                      Tên người dùng
                    </label>
                    <input
                      type="text"
                      className="h-[50px] w-full rounded-[6px] border border-white/14 bg-transparent px-4 text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/25"
                      {...register("username")}
                    />
                    {errors.username && (
                      <p className="text-red-500 text-sm mt-1 text-left">
                        {errors.username.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <label className="block text-[17px] text-white">
                      Email
                    </label>
                    <input
                      type="text"
                      className="h-[50px] w-full rounded-[6px] border border-white/14 bg-transparent px-4 text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/25"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 text-left">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <label className="block text-[17px] text-white">
                      Mật khẩu *
                    </label>
                    <div className="flex h-[50px] items-center rounded-[6px] border border-white/14 bg-transparent px-4 focus-within:border-white/25">
                      <input
                        type={showPwd ? "text" : "password"}
                        className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
                        {...register("password")}
                      />
                      <button
                        type="button"
                        onClick={togglePwd}
                        className="text-white/65 transition-colors hover:text-white"
                      >
                        {showPwd ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1 text-left">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <label className="block text-[17px] text-white">
                      Nhập lại mật khẩu *
                    </label>
                    <div className="flex h-[50px] items-center rounded-[6px] border border-white/14 bg-transparent px-4 focus-within:border-white/25">
                      <input
                        type={showConfirmPwd ? "text" : "password"}
                        className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
                        {...register("password_confirmation")}
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPwd}
                        className="text-white/65 transition-colors hover:text-white"
                      >
                        {showConfirmPwd ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                    {errors.password_confirmation && (
                      <p className="text-red-500 text-sm mt-1 text-left">
                        {errors.password_confirmation.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full h-auto mt-8 bg-black text-white p-4 hover:bg-neutral-900"
                  >
                    Đăng Ký
                  </Button>
                </div>

                <div className="space-y-6 border-t border-white/12 pt-6">
                  <p className="text-center text-[15px] text-white/85">
                    Bạn đã có tài khoản?{" "}
                    <NavLink
                      to="/auth/login"
                      className="font-semibold text-white hover:text-white/75"
                    >
                      Đăng nhập ngay
                    </NavLink>
                  </p>

                  <Button
                    type="button"
                    variant="outline"
                    className="h-[44px] w-full rounded-[6px] border-white/14 bg-transparent text-[15px] text-white hover:bg-white/10 hover:text-white"
                  >
                    <span className="text-[24px] leading-none text-[#ea4335]">
                      G
                    </span>
                    <span>Đăng ký bằng Google</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
}

export default RegisterForm;
