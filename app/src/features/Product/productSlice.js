import {
  fetchProductById,
  fetchProducts,
  fetchFilterProduct,
  fetchFeaturedProducts,
} from "@/service/Product/ProductService";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: [],
  productDetail: {},
  loading: false,
  error: null,
  filterProduct: [],
  featuredProducts: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearFilter: (state) => {
      state.filterProduct = [];
    },
  },
  extraReducers: (builder) => {
    // lầy danh sách sản phẩm
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // lấy chi tiết sản phẩm theo id cụ thể
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.productDetail = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // lọc sản phẩm
    builder.addCase(fetchFilterProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchFilterProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.filterProduct = action.payload;
    });
    builder.addCase(fetchFilterProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // sản phẩm nổi bật trang chủ
    builder.addCase(fetchFeaturedProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.featuredProducts = action.payload;
    });
    builder.addCase(fetchFeaturedProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { clearFilter } = productSlice.actions;
