import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  fetchProducts,
  fetchFilterProduct,
} from "@/service/Product/ProductService";
import { clearFilter } from "@/features/Product/productSlice";

function useProductFilter(gender) {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product || {});
  const { filterProduct } = useSelector((state) => state.product);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
    return () => {
      dispatch(clearFilter());
    };
  }, [dispatch]);

  useEffect(() => {
    const brandIds = searchParams.getAll("brandId").map(Number);
    const category = searchParams.get("category");
    const minPrice = searchParams.get("price[min]");
    const maxPrice = searchParams.get("price[max]");

    const filters = {};

    if (brandIds.length) {
      filters.brandId = brandIds;
    }
    if (category) {
      filters.categoryId = Number(category);
    }
    if (minPrice || maxPrice) {
      filters.minPrice = Number(minPrice) || 0;
      filters.maxPrice = Number(maxPrice) || 999999999;
    }

    if (Object.keys(filters).length > 0) {
      dispatch(fetchFilterProduct(filters));
    } else {
      dispatch(fetchProducts());
    }
  }, [searchParams, dispatch]);

  const filterGenderPerfume = useMemo(
    () => product.filter((item) => item.gender === gender),
    [product, gender],
  );

  const displayProducts = useMemo(
    () =>
      filterProduct.length > 0
        ? filterProduct.filter((item) => item.gender === gender)
        : filterGenderPerfume,
    [filterProduct, filterGenderPerfume, gender],
  );

  return { displayProducts };
}

export default useProductFilter;
