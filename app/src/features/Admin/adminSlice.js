import {
  adminGetProducts,
  adminGetUsers,
  adminGetOrders,
  adminGetOrderById,
  adminUpdateOrderStatus,
} from "@/service/Admin/AdminService";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  usersLoading: false,
  usersError: null,
  products: [],
  productsLoading: false,
  productsError: null,
  orders: [],
  ordersTotal: 0,
  ordersLoading: false,
  ordersError: null,
  currentOrder: null,
  currentOrderLoading: false,
  currentOrderError: null,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET USERS
      .addCase(adminGetUsers.pending, (state) => {
        state.usersLoading = true;
        state.usersError = null;
      })
      .addCase(adminGetUsers.fulfilled, (state, action) => {
        state.usersLoading = false;
        state.users = action.payload;
      })
      .addCase(adminGetUsers.rejected, (state, action) => {
        state.usersLoading = false;
        state.usersError = action.payload;
      })

      // GET PRODUCTS
      .addCase(adminGetProducts.pending, (state) => {
        state.productsLoading = true;
        state.productsError = null;
      })
      .addCase(adminGetProducts.fulfilled, (state, action) => {
        state.productsLoading = false;
        state.products = action.payload;
      })
      .addCase(adminGetProducts.rejected, (state, action) => {
        state.productsLoading = false;
        state.productsError = action.payload;
      })

      // GET ORDERS
      .addCase(adminGetOrders.pending, (state) => {
        state.ordersLoading = true;
        state.ordersError = null;
      })
      .addCase(adminGetOrders.fulfilled, (state, action) => {
        state.ordersLoading = false;
        state.orders = action.payload.orders;
        state.ordersTotal = action.payload.total;
      })
      .addCase(adminGetOrders.rejected, (state, action) => {
        state.ordersLoading = false;
        state.ordersError = action.payload;
      })

      // GET ORDER BY ID
      .addCase(adminGetOrderById.pending, (state) => {
        state.currentOrderLoading = true;
        state.currentOrderError = null;
        state.currentOrder = null;
      })
      .addCase(adminGetOrderById.fulfilled, (state, action) => {
        state.currentOrderLoading = false;
        state.currentOrder = action.payload;
      })
      .addCase(adminGetOrderById.rejected, (state, action) => {
        state.currentOrderLoading = false;
        state.currentOrderError = action.payload;
      })

      // UPDATE ORDER STATUS
      .addCase(adminUpdateOrderStatus.fulfilled, (state, action) => {
        const updated = action.payload.order;
        if (state.currentOrder?.id === updated.id) {
          state.currentOrder = { ...state.currentOrder, ...updated };
        }
        const idx = state.orders.findIndex((o) => o.id === updated.id);
        if (idx !== -1) {
          state.orders[idx] = { ...state.orders[idx], ...updated };
        }
      });
  },
});
