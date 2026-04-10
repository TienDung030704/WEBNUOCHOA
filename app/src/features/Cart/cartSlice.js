import {
  addMyCarts,
  getMyCarts,
  deleteMyCart,
} from "@/service/Cart/cartService";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: null,
  loading: false,
  error: null,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Lấy sản phẩm
      .addCase(getMyCarts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMyCarts.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(getMyCarts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Thêm vào giỏ hàng
      .addCase(addMyCarts.pending, (state) => {
        state.loading = true;
      })
      .addCase(addMyCarts.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(addMyCarts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // xóa sản phẩm
      .addCase(deleteMyCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteMyCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(deleteMyCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // kh cần viết update vì dùng chính lại getmycart luôn viết gọi dispatch cho thangu2 update vs getmycart lại là đc
  },
});
