const prisma = require("../lib/prisma");

class CartService {
  async getMyCart(userId) {
    try {
      const cart = await prisma.cart.findUnique({
        where: {
          userId: userId,
        },
        include: {
          items: {
            include: {
              variant: {
                include: {
                  product: true,
                },
              },
            },
          },
        },
      });

      if (!cart) {
        return { items: [] };
      }

      return cart;
    } catch (error) {
      console.error("Error in getMyCart:", error);
      throw new Error("Cannot get cart");
    }
  }

  async addProductCart(userId, { variantId, quantity = 1 }) {
    try {
      // 1️⃣ Validate input
      if (!variantId) {
        throw new Error("variantId is required");
      }
      if (quantity <= 0) {
        throw new Error("quantity must be greater than 0");
      }
      // 2️⃣ Check variant tồn tại
      const variant = await prisma.productVariant.findUnique({
        where: { id: variantId },
      });
      if (!variant) {
        throw new Error("Variant not found");
      }

      // 3️⃣ Tìm cart của user
      let cart = await prisma.cart.findUnique({
        where: { userId },
      });

      // 4️⃣ Nếu chưa có cart → tạo mới
      if (!cart) {
        cart = await prisma.cart.create({
          data: {
            userId,
          },
        });
      }

      // 5️⃣ Kiểm tra sản phẩm đã có trong cart chưa
      const existingItem = await prisma.cartItem.findFirst({
        where: {
          cartId: cart.id,
          variantId,
        },
      });

      // 6️⃣ Nếu đã có → tăng quantity
      if (existingItem) {
        const updatedItem = await prisma.cartItem.update({
          where: { id: existingItem.id },
          data: {
            quantity: existingItem.quantity + quantity,
          },
        });

        return updatedItem;
      }

      // 7️⃣ Nếu chưa có → tạo mới
      const newItem = await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          variantId,
          quantity,
        },
      });

      return newItem;
    } catch (error) {
      console.error("Error in addProductCart:", error);
      throw new Error(error.message);
    }
  }

  async removeProductCart(userId, variantId) {
    try {
      //  tìm cart của user
      const cart = await prisma.cart.findUnique({
        where: { userId },
      });

      if (!cart) {
        throw new Error("Cart not found");
      }

      //  tìm item trong cart
      const cartItem = await prisma.cartItem.findFirst({
        where: {
          cartId: cart.id,
          variantId: variantId,
        },
      });

      if (!cartItem) {
        throw new Error("Item not found in cart");
      }

      // xóa item
      await prisma.cartItem.delete({
        where: { id: cartItem.id },
      });

      return { message: "Removed from cart successfully" };
    } catch (error) {
      console.error("Error in removeProductCart:", error);
      throw new Error(error.message);
    }
  }

  async updateProductCart(userId, variantId, quantity) {
    try {
      const cart = await prisma.cart.findUnique({
        where: { userId },
      });

      if (!cart) {
        throw new Error("Cart not found");
      }

      const cartItem = await prisma.cartItem.findFirst({
        where: {
          cartId: cart.id,
          variantId,
        },
      });

      if (!cartItem) {
        throw new Error("Item not found");
      }

      // 🔥 PUT semantics: update full state
      if (quantity <= 0) {
        await prisma.cartItem.delete({
          where: { id: cartItem.id },
        });

        return {
          variantId,
          quantity: 0,
          message: "Item removed",
        };
      }

      const updated = await prisma.cartItem.update({
        where: { id: cartItem.id },
        data: { quantity },
      });

      return {
        variantId,
        quantity: updated.quantity,
        message: "Updated successfully",
      };
    } catch (error) {
      console.error("Error in updateProductCart:", error);
      throw new Error(error.message);
    }
  }
}

module.exports = new CartService();
