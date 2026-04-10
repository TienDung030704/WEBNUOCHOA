import { authLogin, authMe } from "@/service/Auth/AuthService";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET ME
      .addCase(authMe.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(authMe.rejected, (state) => {
        state.user = null;
      });
    // kh cần tạo thêm slice cho chức năng profile vì tận dụng chính state của authMe gọi api th
  },
});

export const { logout } = authSlice.actions;
