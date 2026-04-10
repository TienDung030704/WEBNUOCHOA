const express = require("express");
const adminController = require("../controllers/admin.controller");
const authRequired = require("../middlewares/authRequire");
const adminRequired = require("../middlewares/adminRequired");

const router = express.Router();

// [GET] /api/admin/users → lấy danh sách người dùng (chỉ admin)
router.get(
  "/users",
  authRequired,
  adminRequired,
  adminController.getUsersByAdmin,
);

// [DELETE] /api/admin/users/:userId → xóa user (chỉ admin)
router.delete(
  "/users/:userId",
  authRequired,
  adminRequired,
  adminController.deleteUsersByAdmin,
);

// [GET] /api/admin/products → lấy danh sách sản phẩm (chỉ admin)
router.get(
  "/products",
  authRequired,
  adminRequired,
  adminController.getProductsByAdmin,
);

// [GET] /api/admin/products/:productId → lấy chi tiết 1 sản phẩm (chỉ admin)
router.get(
  "/products/:productId",
  authRequired,
  adminRequired,
  adminController.getProductByIdAdmin,
);

// [POST] /api/admin/products → tạo sản phẩm mới (chỉ admin)
router.post(
  "/products",
  authRequired,
  adminRequired,
  adminController.createProductByAdmin,
);

// [DELETE] /api/admin/products/:productId → xóa sản phẩm (chỉ admin)
router.delete(
  "/products/:productId",
  authRequired,
  adminRequired,
  adminController.deleteProductByAdmin,
);

// [PUT] /api/admin/products/:productId → cập nhật sản phẩm (chỉ admin)
router.put(
  "/products/:productId",
  authRequired,
  adminRequired,
  adminController.editProductByAdmin,
);

// [GET] /api/admin/orders → lấy danh sách đơn hàng (chỉ admin)
router.get(
  "/orders",
  authRequired,
  adminRequired,
  adminController.getOrdersByAdmin,
);

// [GET] /api/admin/orders/:orderId → lấy chi tiết 1 đơn hàng (chỉ admin)
router.get(
  "/orders/:orderId",
  authRequired,
  adminRequired,
  adminController.getOrderByIdAdmin,
);

// [PATCH] /api/admin/orders/:orderId/status → cập nhật trạng thái đơn hàng (chỉ admin)
router.patch(
  "/orders/:orderId/status",
  authRequired,
  adminRequired,
  adminController.updateOrderStatusByAdmin,
);

module.exports = router;
