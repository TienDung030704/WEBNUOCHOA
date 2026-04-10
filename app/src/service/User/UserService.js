import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@/utils/http";

// Ham API goi update Profile User
export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.put("user/profile", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

// Ham API goi update Password User
export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await http.patch("user/change-password", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);
