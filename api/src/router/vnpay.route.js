const express = require("express");
const vnpayController = require("../controllers/vnpay.controller");
const authRequired = require("../middlewares/authRequire");

const router = express.Router();

// [POST] /api/vnpay/create — Tạo order + lấy payUrl từ VNPAY sandbox
router.post("/create", authRequired, vnpayController.createVnpayPayment);

module.exports = router;
