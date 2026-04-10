import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChevronRight, Eye } from "lucide-react";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/utils/validate";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { authLogin } from "@/service/Auth/AuthService";
function LoginForm() {
  const {
    register: login, // Đổi tên register thành login
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      const result = await dispatch(authLogin(data)).unwrap();
      console.log(result);
      toast.success("Đăng nhập thành công!", {
        duration: 2000,
        position: "top-right",
      });
      // Delay chút để user thấy thông báo
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Đăng nhập thất bại, vui lòng thử lại!", {
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
              <span>Đăng Nhập</span>
            </div>

            <div className="mx-auto w-full max-w-[580px] rounded-[8px] border border-white/5 bg-[#1a1b1d] px-9 py-10 shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
              <div className="space-y-8">
                <h1 className="text-center text-[48px] font-medium tracking-[-0.03em] text-white">
                  Đăng Nhập
                </h1>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="block text-[17px] text-white">
                      Email
                    </label>
                    <input
                      type="text"
                      className="h-[50px] w-full rounded-[6px] border border-white/14 bg-transparent px-4 text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/25"
                      {...login("email")}
                    />
                    {errors.login && (
                      <p className="text-red-500 text-sm mt-1 text-left">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <label className="block text-[17px] text-white">
                      Mật khẩu
                    </label>
                    <div className="flex h-[50px] items-center rounded-[6px] border border-white/14 bg-transparent px-4 focus-within:border-white/25">
                      <input
                        type="password"
                        className="w-full bg-transparent text-white outline-none placeholder:text-white/35"
                        {...login("password")}
                      />
                      <button
                        type="button"
                        className="text-white/65 transition-colors hover:text-white"
                      >
                        <Eye size={20} />
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1 text-left">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-4 text-[15px] text-white/90">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 rounded border-white/20 bg-transparent accent-black"
                      />
                      <span>Ghi nhớ mật khẩu</span>
                    </label>

                    <button
                      type="button"
                      className="transition-colors hover:text-white/70"
                    >
                      Quên mật khẩu?
                    </button>
                  </div>

                  <Button
                    type="submit"
                    className="h-[50px] w-full rounded-full bg-black text-[17px] font-medium text-white transition-colors hover:bg-neutral-900"
                  >
                    Đăng nhập
                  </Button>
                </div>

                <div className="space-y-6 border-t border-white/12 pt-6">
                  <p className="text-center text-[15px] text-white/85">
                    Bạn chưa có tài khoản?{" "}
                    <NavLink
                      to="/auth/register"
                      className="font-semibold text-white hover:text-white/75"
                    >
                      Đăng ký ngay
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
                    <span>Đăng nhập bằng Google</span>
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

export default LoginForm;
