const express = require("express");
const productController = require("../controllers/product.controller");

const router = express.Router();

// [GET] /api/products → lấy danh sách sản phẩm
router.get("/", productController.getAll);
// [GET] /api/products/featured → lấy 10 sản phẩm nổi bật (phải đặt trước /:id)
router.get("/featured", productController.getFeatured);
// [GET] /api/products/filter → lọc sản phẩm theo query
router.get("/filter", productController.filterProducts);
// [GET] /api/products/:id → lấy chi tiết 1 sản phẩm
router.get("/:id", productController.getDetails);

module.exports = router;
