import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "@/features/Auth/authSlice";
import { productSlice } from "@/features/Product/productSlice";
import { commonSlice } from "@/features/Product/commonSlice";
import { cartSlice } from "@/features/Cart/cartSlice";
import { orderSlice } from "@/features/Order/orderSlice";
import { adminSlice } from "@/features/Admin/adminSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    product: productSlice.reducer,
    common: commonSlice.reducer,
    cart: cartSlice.reducer,
    order: orderSlice.reducer,
    admin: adminSlice.reducer,
  },
});

window.store = store;
