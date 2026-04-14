const orderService = require("../services/order.service");
const vnpayService = require("../services/vnpay.service");

// [POST] /api/vnpay/create
// Tạo đơn hàng trong DB (paymentMethod=VNPAY) + tạo payUrl redirect sang VNPAY
const createVnpayPayment = async (req, res) => {
  try {
    const userId = req.auth.user.id;
    const { receiverName, receiverPhone, shippingAddress, note } = req.body;
    const ipAddr =
      req.headers["x-forwarded-for"] ||
      req.connection?.remoteAddress ||
      "127.0.0.1";

    // 1. Tạo order trong DB với paymentMethod = VNPAY
    const order = await orderService.createMyOrder(userId, {
      receiverName,
      receiverPhone,
      shippingAddress,
      note,
      paymentMethod: "VNPAY",
    });

    // 2. Tạo payUrl redirect sang VNPAY sandbox
    const payUrl = vnpayService.createPaymentUrl({
      orderId: order.id,
      amount: Number(order.totalAmount),
      orderInfo: `Thanh toan don hang #${order.id} - DUWNG Perfume`,
      ipAddr,
    });

    res.success({ payUrl, orderId: order.id });
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createVnpayPayment };
