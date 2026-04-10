const productService = require("../services/product.service");

const getAll = async (req, res) => {
  try {
    const result = await productService.getAllProducts();
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
const getDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await productService.getDetailsProducts(id);
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
const getBrand = async (req, res) => {
  try {
    const result = await productService.getBrand();
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
const getCategory = async (req, res) => {
  try {
    const result = await productService.getCategory();
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
const filterProducts = async (req, res) => {
  try {
    const {
      "brandId[]": brandId,
      categoryId,
      minPrice,
      maxPrice,
      gender,
    } = req.query;
    const result = await productService.filterProduct({
      brandId,
      categoryId,
      minPrice,
      maxPrice,
      gender,
    });
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

const getFeatured = async (req, res) => {
  try {
    const result = await productService.getFeaturedProducts();
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getDetails,
  getBrand,
  getCategory,
  filterProducts,
  getFeatured,
};
