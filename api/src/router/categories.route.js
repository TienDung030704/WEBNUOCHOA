const express = require("express");
const productController = require("../controllers/product.controller");

const router = express.Router();

// [GET] /api/categories → lấy danh sách categories
router.get("/", productController.getCategory);

module.exports = router;
