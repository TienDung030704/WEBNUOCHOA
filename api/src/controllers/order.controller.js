const orderService = require("../services/order.service");

const createOrder = async (req, res) => {
  try {
    const userId = req.auth.user.id;
    const { receiverName, receiverPhone, shippingAddress, note } = req.body;
    const order = await orderService.createMyOrder(userId, {
      receiverName,
      receiverPhone,
      shippingAddress,
      note,
    });
    res.success(order, 201);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const userId = req.auth.user.id;
    const orders = await orderService.getMyOrders(userId);
    res.success(orders);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const userId = req.auth.user.id;
    const orderId = parseInt(req.params.id);
    const order = await orderService.getOrderById(userId, orderId);
    res.success(order);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const cancelOrder = async (req, res) => {
  try {
    const userId = req.auth.user.id;
    const orderId = parseInt(req.params.id);
    const result = await orderService.cancelOrder(userId, orderId);
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder, getMyOrders, getOrderById, cancelOrder };
