const express = require("express");
const cartController = require("../controllers/cart.controller");
const authRequired = require("../middlewares/authRequire");

const router = express.Router();

router.get("/my-cart", authRequired, cartController.getMyCart);
router.post("/add", authRequired, cartController.addMyCarts);
router.delete("/delete/:variantId", authRequired, cartController.deleteMyCarts);
router.put("/update", authRequired, cartController.updateProductCart);

module.exports = router;
