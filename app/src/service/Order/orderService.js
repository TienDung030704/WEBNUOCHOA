import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/utils/http";

// [POST] /api/order/create
export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.post("order/create", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// [GET] /api/order/my-orders
export const getMyOrders = createAsyncThunk(
  "order/getMyOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get("order/my-orders");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// [GET] /api/order/:id
export const getOrderById = createAsyncThunk(
  "order/getOrderById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await http.get(`order/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// [PATCH] /api/order/:id/cancel
export const cancelOrder = createAsyncThunk(
  "order/cancelOrder",
  async (id, { rejectWithValue }) => {
    try {
      const response = await http.patch(`order/${id}/cancel`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// [POST] /api/vnpay/create — Tạo order + lấy payUrl VNPAY sandbox
export const createVnpayOrder = createAsyncThunk(
  "order/createVnpayOrder",
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.post("vnpay/create", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);
