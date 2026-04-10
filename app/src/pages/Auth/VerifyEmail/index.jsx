import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authVerifyEmail } from "@/service/Auth/AuthService";

function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading"); // loading | success | error
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setStatus("error");
      setMessage("Không tìm thấy token xác thực.");
      return;
    }

    dispatch(authVerifyEmail(token))
      .unwrap()
      .then(() => {
        setStatus("success");
        setMessage(
          "Xác thực email thành công! Đang chuyển đến trang đăng nhập...",
        );
        setTimeout(() => navigate("/auth/login"), 3000);
      })
      .catch((err) => {
        setStatus("error");
        setMessage(
          err?.message ||
            "Xác thực thất bại. Token không hợp lệ hoặc đã hết hạn.",
        );
      });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md">
        {status === "loading" && (
          <>
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-white" />
            <p className="text-white/70">Đang xác thực email...</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20 text-3xl">
              ✓
            </div>
            <h2 className="mb-2 text-xl font-semibold">Xác thực thành công</h2>
            <p className="mb-6 text-sm text-white/60">{message}</p>
            <button
              onClick={() => navigate("/auth/login")}
              className="w-full rounded-lg bg-white py-2.5 font-medium text-black transition hover:bg-white/90"
            >
              Đăng nhập ngay
            </button>
          </>
        )}

        {status === "error" && (
          <>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/20 text-3xl">
              ✕
            </div>
            <h2 className="mb-2 text-xl font-semibold">Xác thực thất bại</h2>
            <p className="mb-6 text-sm text-white/60">{message}</p>
            <button
              onClick={() => navigate("/")}
              className="w-full rounded-lg bg-white py-2.5 font-medium text-black transition hover:bg-white/90"
            >
              Về trang chủ
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default VerifyEmailPage;
