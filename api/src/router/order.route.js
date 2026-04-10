const express = require("express");
const orderController = require("../controllers/order.controller");
const authRequired = require("../middlewares/authRequire");

const router = express.Router();

// [POST] /api/order/create          — Tạo đơn hàng mới từ giỏ hàng
router.post("/create", authRequired, orderController.createOrder);
// [GET]  /api/order/my-orders       — Lấy danh sách đơn hàng của user
router.get("/my-orders", authRequired, orderController.getMyOrders);
// [GET]  /api/order/:id             — Lấy chi tiết 1 đơn hàng
router.get("/:id", authRequired, orderController.getOrderById);
// [PATCH] /api/order/:id/cancel     — User hủy đơn (chỉ khi còn PENDING)
router.patch("/:id/cancel", authRequired, orderController.cancelOrder);

module.exports = router;
