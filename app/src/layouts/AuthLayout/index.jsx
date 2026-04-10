import { Outlet } from "react-router-dom";
import Header from "@/layouts/DefaultLayouts/Header";

function AuthLayout() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <Outlet />
    </div>
  );
}
export default AuthLayout;
