const crypto = require("crypto");

function formatVnpDate(date) {
  const pad = (n) => String(n).padStart(2, "0");
  return (
    date.getFullYear() +
    pad(date.getMonth() + 1) +
    pad(date.getDate()) +
    pad(date.getHours()) +
    pad(date.getMinutes()) +
    pad(date.getSeconds())
  );
}

function sortObject(obj) {
  const sorted = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      sorted[key] = obj[key];
    });
  return sorted;
}

class VnpayService {
  // Tạo URL thanh toán VNPAY, trả về payUrl để redirect browser
  createPaymentUrl({ orderId, amount, orderInfo, ipAddr }) {
    const tmnCode = process.env.VNPAY_TMN_CODE;
    const secretKey = process.env.VNPAY_HASH_SECRET;
    const vnpUrl = process.env.VNPAY_URL;
    const returnUrl = process.env.VNPAY_RETURN_URL;
    const createDate = formatVnpDate(new Date());

    let vnpParams = {
      vnp_Version: "2.1.0",
      vnp_Command: "pay",
      vnp_TmnCode: tmnCode,
      vnp_Locale: "vn",
      vnp_CurrCode: "VND",
      vnp_TxnRef: String(orderId),
      vnp_OrderInfo: orderInfo,
      vnp_OrderType: "other",
      vnp_Amount: String(Math.round(Number(amount) * 100)),
      vnp_ReturnUrl: `${returnUrl}/${orderId}`,
      vnp_IpAddr: ipAddr || "127.0.0.1",
      vnp_CreateDate: createDate,
    };

    vnpParams = sortObject(vnpParams);

    // Dùng URLSearchParams để encode giống PHP urlencode (space → +)
    // đúng chuẩn VNPAY yêu cầu khi build signData
    const searchParams = new URLSearchParams(vnpParams);
    const signData = searchParams.toString();

    const signed = crypto
      .createHmac("sha512", secretKey)
      .update(Buffer.from(signData, "utf-8"))
      .digest("hex");

    searchParams.append("vnp_SecureHash", signed);
    return `${vnpUrl}?${searchParams.toString()}`;
  }
}

module.exports = new VnpayService();
