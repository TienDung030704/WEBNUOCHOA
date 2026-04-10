import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/utils/http";

// Ham API goi Register
export const authRegister = createAsyncThunk(
  "auth/authRegister",
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.post("auth/register", data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// Ham API goi Login
export const authLogin = createAsyncThunk(
  "auth/authLogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.post("auth/login", data);
      const { accessToken, refreshToken } = response.data;
      // lưu token
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const authMe = createAsyncThunk(
  "auth/authMe",
  async (_, { rejectWithValue }) => {
    try {
      const response = await http.get("/auth/me");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const authVerifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (token, { rejectWithValue }) => {
    try {
      const response = await http.post("/auth/verify-email", { token });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);
