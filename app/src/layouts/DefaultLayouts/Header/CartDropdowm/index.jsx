import { useState, useRef, useEffect, useMemo } from "react";
import { ShoppingCart, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { getMyCarts, deleteMyCart } from "@/service/Cart/cartService";
function CartDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleDeleteCart = async (variantId, userId) => {
    try {
      await dispatch(deleteMyCart(variantId, userId)).unwrap();
      await dispatch(getMyCarts());
      toast.success("Đã xóa sản phẩm khỏi giỏ hàng 🗑️");
    } catch (error) {
      console.log("ERROR FE:", error);
      toast.error("Xóa giỏ hàng thất bại ❌");
    }
  };
  // 🔥 đóng khi click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { totalItems, totalPrice } = useMemo(
    () =>
      (cart?.items ?? []).reduce(
        (acc, item) => ({
          totalItems: acc.totalItems + item.quantity,
          totalPrice:
            acc.totalPrice +
            Number(item.variant?.salePrice ?? item.variant?.price ?? 0) *
              item.quantity,
        }),
        { totalItems: 0, totalPrice: 0 },
      ),
    [cart],
  );

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div ref={ref} className="relative">
      {/* CART ICON */}
      <button
        onClick={toggleOpen}
        className="relative text-white hover:text-gray-300"
      >
        <ShoppingCart size={22} />
        {totalItems > 0 && (
          <span className="absolute -right-2 -top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
            {totalItems}
          </span>
        )}
      </button>

      {/* DROPDOWN */}
      <div
        className={`absolute right-0 top-[calc(100%+16px)] z-50 w-[340px] origin-top-right rounded-2xl border border-white/10 bg-[#1a1b1d]/96 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-500
        ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        {/* LIST */}
        <div className="flex max-h-[320px] flex-col overflow-y-auto p-3">
          {(cart?.items?.length ?? 0) > 0 ? (
            cart.items.map((item, index) => (
              <div key={item.id}>
                <div className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-white/5">
                  {/* IMG */}
                  <div className="h-[64px] w-[64px] shrink-0 overflow-hidden rounded-xl bg-white">
                    <img
                      src={item.variant?.product?.thumbnail}
                      alt={item.variant?.product?.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* INFO */}
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <p className="line-clamp-2 text-[13px] font-medium text-white">
                      {item.variant?.product?.name} - {item.variant?.volume}ml
                    </p>
                    <p className="text-[12px] text-white/50">
                      SL: {item.quantity}
                    </p>
                    <p className="text-[12px] text-[#e0a96d]">
                      {(
                        Number(
                          item.variant?.salePrice ?? item.variant?.price ?? 0,
                        ) * item.quantity
                      ).toLocaleString("vi-VN")}{" "}
                      ₫
                    </p>
                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => handleDeleteCart(item.variantId)}
                    className="shrink-0 rounded-full p-1 text-white/40 hover:bg-white/10 hover:text-white"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* DIVIDER */}
                {index < cart.items.length - 1 && (
                  <div className="mx-2 h-px bg-white/10" />
                )}
              </div>
            ))
          ) : (
            <p className="py-6 text-center text-sm text-white/50">
              Giỏ hàng trống
            </p>
          )}
        </div>

        {/* SUMMARY */}
        <div className="border-t border-white/10 px-5 py-4">
          <div className="flex justify-between text-[13px] text-white/60">
            <span>Tổng sản phẩm</span>
            <span className="text-white">{totalItems}</span>
          </div>

          <div className="mt-2 flex justify-between text-[14px]">
            <span className="text-white/60">Tổng tiền</span>
            <span className="font-semibold text-[#e0a96d]">
              {totalPrice.toLocaleString("vi-VN")} ₫
            </span>
          </div>
        </div>

        {/* ACTION */}
        <div className="flex gap-2.5 border-t border-white/10 px-4 py-3.5">
          <button
            onClick={() => {
              setOpen(false);
              navigate("/gio-hang");
            }}
            className="flex-1 rounded-full border border-white/20 py-2.5 text-[13px] text-white hover:bg-white/10"
          >
            Xem giỏ hàng
          </button>

          <button
            onClick={() => {
              setOpen(false);
              navigate("/thanh-toan");
            }}
            className="flex-1 rounded-full bg-white py-2.5 text-[13px] font-semibold text-black hover:bg-gray-200"
          >
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartDropdown;
