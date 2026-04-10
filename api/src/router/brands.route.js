const express = require("express");
const productController = require("../controllers/product.controller");

const router = express.Router();

// [GET] /api/brands → lấy danh sách brand
router.get("/", productController.getBrand);

module.exports = router;
