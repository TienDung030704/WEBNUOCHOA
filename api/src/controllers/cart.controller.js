const CartService = require("../services/cart.service");
const getMyCart = async (req, res) => {
  try {
    const userId = req.auth.user.id;
    const result = await CartService.getMyCart(userId);
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
const addMyCarts = async (req, res) => {
  try {
    const userId = req.auth.user.id;
    const { variantId, quantity } = req.body;
    const result = await CartService.addProductCart(userId, {
      variantId,
      quantity,
    });
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const deleteMyCarts = async (req, res) => {
  try {
    const userId = req.auth.user.id;
    const variantId = Number(req.params.variantId);
    const result = await CartService.removeProductCart(userId, variantId);
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const updateProductCart = async (req, res) => {
  try {
    const userId = req.auth.user.id;
    const { variantId, quantity } = req.body;

    const result = await CartService.updateProductCart(
      userId,
      variantId,
      quantity,
    );
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMyCart,
  addMyCarts,
  deleteMyCarts,
  updateProductCart,
};
