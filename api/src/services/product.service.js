const prisma = require("../lib/prisma");

class ProductService {
  // lấy danh sách sản phẩm logic
  async getAllProducts() {
    try {
      const products = await prisma.product.findMany({
        select: {
          id: true,
          name: true,
          slug: true,
          shortDescription: true,
          thumbnail: true,
          isFeatured: true,
          brandId: true,
          categoryId: true,
          gender: true,
          // bảng variant lấy ra price
          variants: {
            select: {
              price: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      });

      return products;
    } catch (error) {
      console.error("Error in getAllProducts:", error);
      throw new Error("Cannot get products");
    }
  }
  // lấy chi tiết 1 sản phẩm logic
  async getDetailsProducts(slug) {
    try {
      const getDetailProducts = await prisma.product.findUnique({
        where: { slug },
        include: {
          images: true, // 👈 relation với bảng product_images
          variants: true, // nếu có giá
          brand: true, // optional
          category: true, // optional
        },
      });
      if (!getDetailProducts) {
        throw new Error("Product not found");
      }
      return getDetailProducts;
    } catch (error) {
      console.error("Error in getProductById:", error);
      throw error;
    }
  }
  // lấy danh sách thương hiệu
  async getBrand() {
    try {
      const getBrands = await prisma.brand.findMany({
        select: {
          id: true,
          name: true,
          slug: true,
          logo: true,
          description: true,
        },
      });
      return getBrands;
    } catch (error) {
      console.error("Error in getBrand:", error);
      throw new Error("Cannot get brand");
    }
  }
  // lấy danh sách danh mục
  async getCategory() {
    try {
      const getCategories = await prisma.category.findMany({
        select: {
          id: true,
          name: true,
          slug: true,
          description: true,
        },
      });
      return getCategories;
    } catch (error) {
      console.error("Error in getCategories:", error);
      throw new Error("Cannot getCategories");
    }
  }
  // lấy sản phẩm đã lọc theo lựa chọn của user Logic
  async filterProduct({ brandId, categoryId, minPrice, maxPrice, gender }) {
    const query = {};
    if (gender) {
      query.gender = gender;
    }
    if (categoryId) {
      query.categoryId = Number(categoryId);
    }
    if (brandId) {
      query.brandId = {
        in: (Array.isArray(brandId) ? brandId : [brandId]).map(Number),
      };
    }
    if (minPrice || maxPrice) {
      query.variants = {
        some: {
          price: {
            gte: Number(minPrice) || 0,
            lte: Number(maxPrice) || 999999999,
          },
        },
      };
    }
    const filterProductDetails = await prisma.product.findMany({
      where: query,
      select: {
        id: true,
        name: true,
        slug: true,
        shortDescription: true,
        thumbnail: true,
        isFeatured: true,
        brandId: true,
        categoryId: true,
        gender: true,
        variants: {
          select: {
            price: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return filterProductDetails;
  }

  // Lấy 10 sản phẩm nổi bật cho trang chủ
  async getFeaturedProducts() {
    const products = await prisma.product.findMany({
      take: 10,
      select: {
        id: true,
        name: true,
        slug: true,
        thumbnail: true,
        variants: {
          select: { price: true },
          orderBy: { price: "asc" },
          take: 1,
        },
        brand: {
          select: { name: true },
        },
      },
      orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
    });
    return products;
  }
}
module.exports = new ProductService();
