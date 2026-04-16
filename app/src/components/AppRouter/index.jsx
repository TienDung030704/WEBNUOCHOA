import { Routes, Route } from "react-router-dom";

// Layouts
import DefaultLayout from "@/layouts/DefaultLayouts";
import AuthLayout from "@/layouts/AuthLayout";

//Page
import Login from "@/pages/Auth/LoginForm";
import Register from "@/pages/Auth/RegisterForm";
import Home from "@/pages/Home";
import MenPerfume from "@/pages/Product/MenPerfume";
import WomenPerfume from "@/pages/Product/WomenPerfume";
import UnisexPerfume from "@/pages/Product/UnisexPerfume";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import AccountIndividual from "@/pages/Profile";
import AccountInfo from "@/pages/Profile/AccountInfo";
import ChangePassword from "@/pages/Profile/ChangePassword";
import Orders from "@/pages/Profile/Orders";
import ProductDetails from "@/pages/Product/ProductDetails";
import Cart from "@/pages/Cart";
import OrderPage from "@/pages/Order";
import OrderSuccess from "@/pages/OrderSuccess";
import AdminLayout from "@/pages/Admin";
import AdminProducts from "@/pages/Admin/Products";
import AdminOrders from "@/pages/Admin/Orders";
import AdminUsers from "@/pages/Admin/Users";
import AdminOrderDetail from "@/pages/Admin/OrderDetail";
import CreateProduct from "@/pages/Admin/CreateProduct";
import EditProduct from "@/pages/Admin/EditProduct";
import AdminBrands from "@/pages/Admin/Brands";
import CreateBrand from "@/pages/Admin/CreateBrand";
import EditBrand from "@/pages/Admin/EditBrand";
import VerifyEmail from "@/pages/Auth/VerifyEmail";
import BlogListPage from "@/pages/Blog/BlogList";
import BlogDetailPage from "@/pages/Blog/BlogDetail";
import BrandPage from "@/pages/Brand";
import BrandDetailPage from "@/pages/Brand/BrandDetail";

function AppRoutes() {
  return (
    <Routes>
      {/* DefaultLayout */}
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/nuoc-hoa-nam" element={<MenPerfume />} />
        <Route path="/nuoc-hoa-nu" element={<WomenPerfume />} />
        <Route path="/nuoc-hoa-unisex" element={<UnisexPerfume />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/tai-khoan" element={<AccountIndividual />}>
          <Route index element={<AccountInfo />} />
          <Route path="doi-mat-khau" element={<ChangePassword />} />
          <Route path="don-hang" element={<Orders />} />
        </Route>
        <Route path="/san-pham/:slug" element={<ProductDetails />} />
        <Route path="/gio-hang" element={<Cart />} />
        <Route path="/thanh-toan" element={<OrderPage />} />
        <Route path="/dat-hang-thanh-cong/:id" element={<OrderSuccess />} />
        <Route path="/kien-thuc-nuoc-hoa" element={<BlogListPage />} />
        <Route path="/kien-thuc-nuoc-hoa/:slug" element={<BlogDetailPage />} />
        <Route path="/thuong-hieu" element={<BrandPage />} />
        <Route path="/thuong-hieu/:slug" element={<BrandDetailPage />} />
      </Route>
      {/* AuthLayout */}
      <Route element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
      {/* Standalone - no layout */}
      <Route path="/verify-email" element={<VerifyEmail />} />
      {/* AdminLayout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminProducts />} />
        <Route path="san-pham" element={<AdminProducts />} />
        <Route path="san-pham/tao-moi" element={<CreateProduct />} />
        <Route path="san-pham/:productId/sua" element={<EditProduct />} />
        <Route path="don-hang" element={<AdminOrders />} />
        <Route path="don-hang/:id" element={<AdminOrderDetail />} />
        <Route path="nguoi-dung" element={<AdminUsers />} />
        <Route path="thuong-hieu" element={<AdminBrands />} />
        <Route path="thuong-hieu/tao-moi" element={<CreateBrand />} />
        <Route path="thuong-hieu/:brandId/sua" element={<EditBrand />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;
