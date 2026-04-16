const adminService = require("../services/admin.service");

const getUsersByAdmin = async (req, res) => {
  try {
    const result = await adminService.getUsersByAdmin();
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
const deleteUsersByAdmin = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await adminService.deleteUserByAdmin(userId);
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
const getProductsByAdmin = async (req, res) => {
  try {
    const result = await adminService.getProductByAdmin();
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const getProductByIdAdmin = async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await adminService.getProductByIdAdmin(productId);
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const createProductByAdmin = async (req, res) => {
  try {
    const {
      name,
      slug,
      concentration,
      thumbnail,
      gender,
      brandName,
      categoryName,
      variants,
      images,
      isActive,
      isFeatured,
      description,
      usage,
      policy,
      topNotes,
      middleNotes,
      baseNotes,
      longevity,
      sillage,
      originCountry,
    } = req.body;
    const result = await adminService.createProduct({
      name,
      slug,
      concentration,
      thumbnail,
      gender,
      brandName,
      categoryName,
      variants,
      images,
      isActive,
      isFeatured,
      description,
      usage,
      policy,
      topNotes,
      middleNotes,
      baseNotes,
      longevity,
      sillage,
      originCountry,
    });
    res.status(201).json(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const deleteProductByAdmin = async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await adminService.deleteProduct(productId);
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const editProductByAdmin = async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await adminService.editProduct(productId, req.body);
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const getOrdersByAdmin = async (req, res) => {
  try {
    const { page, limit, status } = req.query;
    const result = await adminService.getOrdersByAdmin({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
      status: status || undefined,
    });
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const getOrderByIdAdmin = async (req, res) => {
  try {
    const orderId = Number(req.params.orderId);
    const result = await adminService.getOrderByIdAdmin(orderId);
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const updateOrderStatusByAdmin = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status, paymentStatus } = req.body;
    const result = await adminService.updateOrderStatusByAdmin(orderId, {
      status,
      paymentStatus,
    });
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const getBrandsByAdmin = async (req, res) => {
  try {
    const result = await adminService.getBrandsByAdmin();
    res.success(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBrandByAdmin = async (req, res) => {
  try {
    const { name, slug, logo, description } = req.body;
    if (!name || !slug) {
      return res.status(400).json({ message: "Tên và slug là bắt buộc" });
    }
    const result = await adminService.createBrandByAdmin({
      name,
      slug,
      logo,
      description,
    });
    res.success(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBrandByAdmin = async (req, res) => {
  try {
    const { brandId } = req.params;
    const result = await adminService.updateBrandByAdmin(brandId, req.body);
    res.success(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBrandByAdmin = async (req, res) => {
  try {
    const { brandId } = req.params;
    const result = await adminService.deleteBrandByAdmin(brandId);
    res.success(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getUsersByAdmin,
  deleteUsersByAdmin,
  getProductsByAdmin,
  getProductByIdAdmin,
  createProductByAdmin,
  deleteProductByAdmin,
  editProductByAdmin,
  getOrdersByAdmin,
  getOrderByIdAdmin,
  updateOrderStatusByAdmin,
  getBrandsByAdmin,
  createBrandByAdmin,
  updateBrandByAdmin,
  deleteBrandByAdmin,
};
