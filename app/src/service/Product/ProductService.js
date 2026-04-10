import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/utils/http";

// Lấy danh sách sản phẩm
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get("/products");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// Lấy chi tiết 1 sản phẩm
export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await http.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);
// Lấy danh sách danh mục
export const fetchCategories = createAsyncThunk(
  "product/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get("/categories");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);
// Lấy danh sách thương hiệu
export const fetchBrands = createAsyncThunk(
  "product/fetchBrands",
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get("/brands");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// Lọc sản phẩm theo bộ lọc
export const fetchFilterProduct = createAsyncThunk(
  "product/fetchFilterProducts",
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.get("/products/filter", { params: data });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// Lấy 10 sản phẩm nổi bật cho trang chủ
export const fetchFeaturedProducts = createAsyncThunk(
  "product/fetchFeaturedProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get("/products/featured");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);
