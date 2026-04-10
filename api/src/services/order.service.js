const prisma = require("../lib/prisma");

class OrderService {
  // Lấy danh sách đơn hàng của user
  async getMyOrders(userId) {
    const orders = await prisma.order.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            variant: {
              include: { product: { select: { thumbnail: true } } },
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    return orders;
  }

  // Lấy chi tiết 1 đơn hàng (chỉ của chính user)
  async getOrderById(userId, orderId) {
    const order = await prisma.order.findFirst({
      where: { id: orderId, userId },
      include: {
        items: {
          include: {
            variant: {
              include: { product: { select: { thumbnail: true, slug: true } } },
            },
          },
        },
      },
    });
    if (!order) {
      throw new Error("Không tìm thấy đơn hàng");
    }
    return order;
  }

  // Tạo đơn hàng từ giỏ hàng
  async createMyOrder(
    userId,
    { receiverName, receiverPhone, shippingAddress, note },
  ) {
    // 1. Validate input
    if (!receiverName) {
      throw new Error("Vui lòng nhập tên người nhận");
    }
    if (!receiverPhone) {
      throw new Error("Vui lòng nhập số điện thoại");
    }
    if (!shippingAddress) {
      throw new Error("Vui lòng nhập địa chỉ giao hàng");
    }

    // 2. Lấy giỏ hàng + variant + product
    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            variant: {
              include: { product: true },
            },
          },
        },
      },
    });

    if (!cart || cart.items.length === 0) {
      throw new Error("Giỏ hàng trống");
    }

    // 3. Kiểm tra tồn kho từng item
    for (const item of cart.items) {
      if (item.variant.stock < item.quantity) {
        throw new Error(
          `Sản phẩm "${item.variant.product.name} ${item.variant.volume}ml" không đủ hàng trong kho`,
        );
      }
    }

    // 4. Tính tổng tiền (dùng salePrice nếu có)
    const totalAmount = cart.items.reduce((sum, item) => {
      const price = item.variant.salePrice ?? item.variant.price;
      return sum + Number(price) * item.quantity;
    }, 0);

    // 5. Tạo order + orderItems + trừ stock trong 1 transaction
    const order = await prisma.$transaction(async (tx) => {
      // Tạo order
      const newOrder = await tx.order.create({
        data: {
          userId,
          receiverName,
          receiverPhone,
          shippingAddress,
          note: note ?? null,
          totalAmount,
          paymentMethod: "COD",
          paymentStatus: "UNPAID",
          status: "PENDING",
          items: {
            create: cart.items.map((item) => ({
              variantId: item.variantId,
              productName: item.variant.product.name,
              volume: item.variant.volume,
              priceAtOrder: item.variant.salePrice ?? item.variant.price,
              quantity: item.quantity,
            })),
          },
        },
        include: { items: true },
      });

      // Trừ stock từng variant
      for (const item of cart.items) {
        await tx.productVariant.update({
          where: { id: item.variantId },
          data: { stock: { decrement: item.quantity } },
        });
      }

      // Xóa giỏ hàng sau khi đặt
      await tx.cartItem.deleteMany({ where: { cartId: cart.id } });
      return newOrder;
    });

    return order;
  }

  // User hủy đơn (chỉ khi còn PENDING)
  async cancelOrder(userId, orderId) {
    const order = await prisma.order.findFirst({
      where: { id: orderId, userId },
    });

    if (!order) throw new Error("Không tìm thấy đơn hàng");
    if (order.status !== "PENDING") {
      throw new Error("Chỉ có thể hủy đơn hàng đang chờ xác nhận");
    }

    // Hoàn lại stock
    const items = await prisma.orderItem.findMany({ where: { orderId } });
    await prisma.$transaction([
      ...items.map((item) =>
        prisma.productVariant.update({
          where: { id: item.variantId },
          data: { stock: { increment: item.quantity } },
        }),
      ),
      prisma.order.update({
        where: { id: orderId },
        data: { status: "CANCELLED" },
      }),
    ]);

    return { message: "Hủy đơn hàng thành công" };
  }
}

module.exports = new OrderService();
