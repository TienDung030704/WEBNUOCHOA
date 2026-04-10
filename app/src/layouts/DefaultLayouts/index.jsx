import { Outlet } from "react-router-dom";
import Header from "@/layouts/DefaultLayouts/Header";
import Footer from "@/layouts/DefaultLayouts/Footer";
import { useEffect } from "react";
import { authMe } from "@/service/Auth/AuthService";
import { useDispatch } from "react-redux";
import { fetchBrands, fetchCategories } from "@/service/Product/ProductService";
import { getMyCarts } from "@/service/Cart/cartService";

function DefaultLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authMe());
    dispatch(fetchBrands());
    dispatch(fetchCategories());
    dispatch(getMyCarts());
  }, []);
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <div className="flex-1 pt-[92px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default DefaultLayout;
