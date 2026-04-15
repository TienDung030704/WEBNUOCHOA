import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChevronRight, Eye } from "lucide-react";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/utils/validate";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { authLogin, authGoogleLogin } from "@/service/Auth/AuthService";
import { useGoogleLogin } from "@react-oauth/google";

function LoginForm() {
  const {
    register: login,
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

  // logic đăng nhập bằng gg
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        await dispatch(authGoogleLogin(tokenResponse.access_token)).unwrap();
        toast.success("Đăng nhập Google thành công!", {
          duration: 2000,
          position: "top-right",
        });
        setTimeout(() => navigate("/"), 1500);
      } catch (error) {
        toast.error(
          error?.message || "Đăng nhập Google thất bại, vui lòng thử lại!",
          {
            duration: 3000,
            position: "top-right",
          },
        );
      }
    },
    onError: () => {
      toast.error("Đăng nhập Google thất bại!", {
        duration: 3000,
        position: "top-right",
      });
    },
  });

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(authLogin(data)).unwrap();
      console.log(result);
      toast.success("Đăng nhập thành công!", {
        duration: 2000,
        position: "top-right",
      });
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
      <div className="min-h-screen bg-[#1f2022] pt-[92px] text-white">
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
                    {errors.email && (
                      <p className="mt-1 text-left text-sm text-red-500">
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
                      <p className="mt-1 text-left text-sm text-red-500">
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

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      onClick={() => googleLogin()}
                      variant="outline"
                      className="h-[44px] w-full rounded-[6px] border-white/14 bg-transparent text-[14px] text-white hover:bg-white/10 hover:text-white"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 48 48"
                        className="shrink-0"
                      >
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"
                        />
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        />
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.58-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        />
                      </svg>
                      <span>Google</span>
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      className="h-[44px] w-full rounded-[6px] border-white/14 bg-transparent text-[14px] text-white hover:bg-white/10 hover:text-white"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        className="shrink-0"
                        fill="#1877F2"
                      >
                        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                      </svg>
                      <span>Facebook</span>
                    </Button>
                  </div>
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
