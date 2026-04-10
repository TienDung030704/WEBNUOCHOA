import { fetchBrands, fetchCategories } from "@/service/Product/ProductService";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  brands: [],
  categories: [],
  loading: false,
  error: null,
};
export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // brands Slice
    builder.addCase(fetchBrands.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchBrands.fulfilled, (state, action) => {
      state.loading = false;
      state.brands = action.payload;
    });
    builder.addCase(fetchBrands.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // category Slice
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
