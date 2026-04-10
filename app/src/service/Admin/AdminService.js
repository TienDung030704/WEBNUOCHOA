import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/utils/http";

export const adminGetUsers = createAsyncThunk(
  "admin/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get("/admin/users");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const adminDeleteUser = createAsyncThunk(
  "admin/deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await http.del(`/admin/users/${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const adminGetProducts = createAsyncThunk(
  "admin/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get("/admin/products");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const adminCreateProduct = createAsyncThunk(
  "admin/createProduct",
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.post("/admin/products", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const adminDeleteProduct = createAsyncThunk(
  "admin/deleteProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await http.del(`/admin/products/${productId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const adminEditProduct = createAsyncThunk(
  "admin/editProduct",
  async ({ productId, data }, { rejectWithValue }) => {
    try {
      const response = await http.put(`/admin/products/${productId}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const adminGetProductById = createAsyncThunk(
  "admin/getProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await http.get(`/admin/products/${productId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const adminGetOrders = createAsyncThunk(
  "admin/getOrders",
  async ({ page = 1, limit = 20, status } = {}, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams({ page, limit });
      if (status) params.set("status", status);
      const response = await http.get(`/admin/orders?${params.toString()}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const adminGetOrderById = createAsyncThunk(
  "admin/getOrderById",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await http.get(`/admin/orders/${orderId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const adminUpdateOrderStatus = createAsyncThunk(
  "admin/updateOrderStatus",
  async ({ orderId, status, paymentStatus }, { rejectWithValue }) => {
    try {
      const response = await http.patch(`/admin/orders/${orderId}/status`, {
        status,
        paymentStatus,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);
