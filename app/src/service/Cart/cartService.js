import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/utils/http";

export const getMyCarts = createAsyncThunk(
  "cart/getMyCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get("/cart/my-cart");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// Ham API goi thêm vào giỏ hàng
export const addMyCarts = createAsyncThunk(
  "cart/addMyCartProduct",
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.post("/cart/add", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const deleteMyCart = createAsyncThunk(
  "cart/deleteMyCart",
  async (variantId, { rejectWithValue }) => {
    try {
      const response = await http.del(`/cart/delete/${variantId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async ({ variantId, quantity }, { rejectWithValue }) => {
    try {
      const response = await http.put("/cart/update", {
        variantId,
        quantity,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);
