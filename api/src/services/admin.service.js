const prisma = require("../lib/prisma");
const { ALLOWED_STATUS_TRANSITIONS } = require("../config/constant");
const { getPagination } = require("../utils/pagination");

class AdminService {
  // lay user cua admin
  async getUsersByAdmin() {
    try {
      const users = await prisma.user.findMany({
        where: {
          role: {
            not: "ADMIN",
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          fullName: true,
          email: true,
          phone: true,
          role: true,
          isActive: true,
          createdAt: true,
        },
      });
      return users;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Xoa user cua admin
  async deleteUserByAdmin(userId) {
    try {
      // 1. Check user tồn tại
      const user = await prisma.user.findUnique({
        where: { id: Number(userId) },
      });

      if (!user) {
        throw new Error("User không tồn tại");
      }

      // 2. Không cho xóa admin
      if (user.role === "ADMIN") {
        throw new Error("Không thể xóa admin");
      }

      // 3. Xóa user
      await prisma.user.delete({
        where: {
          id: Number(userId),
        },
      });

      // 4. Return để FE biết thành công
      return {
        user,
        message: "Xóa user thành công",
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // lấy danh sách sản phẩm của admin
  async getProductByAdmin() {
    try {
      const products = await prisma.product.findMany({
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          thumbnail: true,
          gender: true,
          isActive: true,
          isFeatured: true,
          createdAt: true,
          brand: { select: { name: true } },
          variants: {
            select: { price: true, salePrice: true, stock: true },
          },
        },
      });
      return products;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // lấy chi tiết 1 sản phẩm theo id
  async getProductByIdAdmin(productId) {
    try {
      const product = await prisma.product.findUnique({
        where: { id: Number(productId) },
        include: {
          brand: true,
          category: true,
          variants: true,
          images: true,
        },
      });

      if (!product) throw new Error("Sản phẩm không tồn tại");

      return product;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // tìm thương hiệu theo tên chính xác
  async findBrand(brandName) {
    try {
      const brand = await prisma.brand.findFirst({
        where: { name: { equals: brandName.trim() } },
      });
      return brand;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // tìm danh mục theo tên chính xác
  async findCategory(categoryName) {
    try {
      const category = await prisma.category.findFirst({
        where: { name: { equals: categoryName.trim() } },
      });
      return category;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  // tạo sản phẩm của admin
  async createProduct({
    name,
    slug,
    concentration,
    thumbnail,
    gender,
    brandName,
    categoryName,
    variants,
    images,
    isActive = true,
    isFeatured = false,
  }) {
    try {
      // 1. Validate
      if (!name) {
        throw new Error("Thiếu tên sản phẩm");
      }

      if (!slug) {
        throw new Error("Thiếu slug");
      }

      if (!concentration) {
        throw new Error("Thiếu nồng độ");
      }

      if (!brandName) {
        throw new Error("Thiếu thương hiệu");
      }

      if (!categoryName) {
        throw new Error("Thiếu danh mục");
      }

      // 2. Tìm brand & category
      const brand = await this.findBrand(brandName);
      if (!brand) {
        throw new Error(`Thương hiệu "${brandName}" không tồn tại`);
      }

      const category = await this.findCategory(categoryName);
      if (!category) {
        throw new Error(`Danh mục "${categoryName}" không tồn tại`);
      }

      //  Xử lý images
      const imageData = (images || [])
        .filter((img) => img?.url) // bỏ ảnh lỗi/null/undefined
        .map((img, index) => ({
          url: img.url.trim(),
          altText: img.altText?.trim() || null,
          sortOrder: index,
        }));

      //  Xử lý ml
      const variantData = (variants ?? []).map((v) => ({
        volume: Number(v.volume),
        price: Number(v.price),
        salePrice: v.salePrice ? Number(v.salePrice) : null,
        stock: Number(v.stock ?? 0),
        sku: v.sku ?? null,
      }));

      // 4. Tạo product + variants + images
      const newProduct = await prisma.product.create({
        data: {
          name: name.trim(),
          slug: slug.trim(),
          concentration,
          gender: gender ?? "UNISEX",
          thumbnail: thumbnail ?? null,
          isActive,
          isFeatured,
          brandId: brand.id,
          categoryId: category.id,

          variants: {
            create: variantData,
          },

          images: {
            create: imageData,
          },
        },
        include: {
          brand: true,
          category: true,
          variants: true,
          images: true,
        },
      });

      return {
        product: newProduct,
        message: "Tạo sản phẩm thành công",
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // xóa sản phẩm của admin
  async deleteProduct(productId) {
    const product = await prisma.product.findUnique({
      where: { id: Number(productId) },
    });

    if (!product) {
      throw new Error("Sản phẩm không tồn tại");
    }

    await prisma.product.delete({ where: { id: Number(productId) } });

    return { message: "Xóa sản phẩm thành công" };
  }

  // sửa sản phẩm của admin
  async editProduct(
    productId,
    {
      name,
      slug,
      concentration,
      thumbnail,
      gender,
      brandName,
      categoryName,
      isActive,
      isFeatured,
      variants,
      images,
    },
  ) {
    try {
      const product = await prisma.product.findUnique({
        where: { id: Number(productId) },
      });

      if (!product) throw new Error("Sản phẩm không tồn tại");

      const dataToUpdate = {};

      if (name) dataToUpdate.name = name.trim();
      if (slug) dataToUpdate.slug = slug.trim();
      if (concentration) dataToUpdate.concentration = concentration;
      if (gender) dataToUpdate.gender = gender;
      if (thumbnail !== undefined) dataToUpdate.thumbnail = thumbnail || null;
      if (isActive !== undefined) dataToUpdate.isActive = isActive;
      if (isFeatured !== undefined) dataToUpdate.isFeatured = isFeatured;

      if (brandName) {
        const brand = await this.findBrand(brandName);
        if (!brand) {
          throw new Error(`Thương hiệu "${brandName}" không tồn tại`);
        }
        dataToUpdate.brandId = brand.id;
      }

      if (categoryName) {
        const category = await this.findCategory(categoryName);
        if (!category) {
          throw new Error(`Danh mục "${categoryName}" không tồn tại`);
        }
        dataToUpdate.categoryId = category.id;
      }

      // Đồng bộ images: xoá hết rồi tạo lại
      if (images) {
        const validImages = images.filter((img) => img.url?.trim());
        dataToUpdate.images = {
          deleteMany: {},
          create: validImages.map((img, i) => ({
            url: img.url.trim(),
            altText: img.altText?.trim() || null,
            sortOrder: i,
          })),
        };
      }

      // Đồng bộ variants: xoá hết rồi tạo lại
      if (variants) {
        const validVariants = variants.filter((v) => v.volume && v.price);
        dataToUpdate.variants = {
          deleteMany: {},
          create: validVariants.map((v) => ({
            volume: Number(v.volume),
            price: Number(v.price),
            salePrice: v.salePrice ? Number(v.salePrice) : null,
            stock: Number(v.stock) || 0,
            sku: v.sku?.trim() || null,
          })),
        };
      }

      const updatedProduct = await prisma.product.update({
        where: { id: Number(productId) },
        data: dataToUpdate,
        include: {
          brand: true,
          category: true,
          variants: true,
          images: true,
        },
      });

      return {
        product: updatedProduct,
        message: "Cập nhật sản phẩm thành công",
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // lấy tất cả đơn hàng (admin)
  async getOrdersByAdmin({ page = 1, limit = 20, status } = {}) {
    const where = status ? { status } : {};
    const { skip, take, page: p, limit: l } = getPagination(page, limit);

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: "desc" },
        include: {
          user: {
            select: { id: true, fullName: true, email: true, phone: true },
          },
          items: {
            include: {
              variant: {
                include: {
                  product: {
                    select: { thumbnail: true, name: true, slug: true },
                  },
                },
              },
            },
          },
        },
      }),
      prisma.order.count({ where }),
    ]);

    return { orders, total, page: p, limit: l };
  }

  // lấy chi tiết 1 đơn hàng (admin)
  async getOrderByIdAdmin(orderId) {
    const order = await prisma.order.findUnique({
      where: { id: Number(orderId) },
      include: {
        user: {
          select: { id: true, fullName: true, email: true, phone: true },
        },
        items: {
          include: {
            variant: {
              include: {
                product: {
                  select: { thumbnail: true, name: true, slug: true },
                },
              },
            },
          },
        },
      },
    });

    if (!order) throw new Error("Không tìm thấy đơn hàng");
    return order;
  }

  // cập nhật trạng thái đơn hàng (admin)
  async updateOrderStatusByAdmin(orderId, { status, paymentStatus }) {
    const order = await prisma.order.findUnique({
      where: { id: Number(orderId) },
    });

    if (!order) throw new Error("Không tìm thấy đơn hàng");

    const dataToUpdate = {};

    if (status) {
      const allowed = ALLOWED_STATUS_TRANSITIONS[order.status] ?? [];
      if (!allowed.includes(status)) {
        throw new Error(
          `Không thể chuyển từ "${order.status}" sang "${status}"`,
        );
      }
      dataToUpdate.status = status;
    }

    if (paymentStatus) {
      dataToUpdate.paymentStatus = paymentStatus;
    }

    const updated = await prisma.order.update({
      where: { id: Number(orderId) },
      data: dataToUpdate,
    });

    return {
      order: updated,
      message: "Cập nhật trạng thái đơn hàng thành công",
    };
  }
}

module.exports = new AdminService();
