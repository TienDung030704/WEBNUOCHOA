import { useEffect, useState } from "react";
import { formatPrice } from "@/utils/formatPrice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus, X } from "lucide-react";
import { toast } from "sonner";
import {
  getMyCarts,
  deleteMyCart,
  updateCartItem,
} from "@/service/Cart/cartService";

function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const [coupon, setCoupon] = useState("");

  useEffect(() => {
    dispatch(getMyCarts());
  }, [dispatch]);

  const handleDelete = async (variantId, userId) => {
    try {
      await dispatch(deleteMyCart(variantId, userId)).unwrap();
      await dispatch(getMyCarts());
      toast.success("Đã xóa sản phẩm khỏi giỏ hàng");
    } catch {
      toast.error("Xóa thất bại");
    }
  };

  const handleIncreaseNumberProduct = async (item) => {
    try {
      await dispatch(
        updateCartItem({
          variantId: item.variantId,
          quantity: item.quantity + 1,
        }),
      ).unwrap();
      await dispatch(getMyCarts());
      toast.success("Đã cập nhật số lượng");
    } catch {
      toast.error("Cập nhật thất bại");
    }
  };

  const handleIDecreaseNumberProduct = async (item) => {
    try {
      await dispatch(
        updateCartItem({
          variantId: item.variantId,
          quantity: item.quantity - 1,
        }),
      ).unwrap();
      toast.success("Đã cập nhật số lượng");
      await dispatch(getMyCarts());
    } catch {
      toast.error("Cập nhật thất bại");
    }
  };

  const { totalQty, totalPrice } = (cart?.items ?? []).reduce(
    (acc, i) => {
      const price = Number(i.variant?.salePrice ?? i.variant?.price ?? 0);
      return {
        totalQty: acc.totalQty + i.quantity,
        totalPrice: acc.totalPrice + price * i.quantity,
      };
    },
    { totalQty: 0, totalPrice: 0 },
  );

  return (
    <div className="min-h-screen bg-[#141414] px-8 pt-[116px] pb-16 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <nav className="reveal-up mb-8 flex items-center gap-2 text-sm">
          <Link
            to="/"
            className="text-white/55 hover:text-white transition-colors"
          >
            Trang chủ
          </Link>
          <span className="text-white/35">›</span>
          <span className="text-white/90">Giỏ hàng</span>
        </nav>

        {/* Card */}
        <div className="reveal-up reveal-delay-1 rounded-2xl border border-white/[0.07] bg-[#1c1d1f] px-8 py-6">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_150px_180px_150px_48px] items-center border-b border-white/[0.08] pb-4 text-[13px] text-white/50">
            <span>Tên sản phẩm</span>
            <span className="text-center">Đơn giá</span>
            <span className="text-center">Số lượng</span>
            <span className="text-center">Thành tiền</span>
            <span />
          </div>

          {/* Items */}
          {!cart?.items?.length ? (
            <p className="py-14 text-center text-sm text-white/40">
              Giỏ hàng trống
            </p>
          ) : (
            cart.items.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="grid grid-cols-[1fr_150px_180px_150px_48px] items-center py-5">
                    {/* Product info */}
                    <div className="flex items-center gap-4">
                      <div className="h-[84px] w-[84px] shrink-0 overflow-hidden rounded-xl bg-white p-1.5">
                        <img
                          src={item.variant?.product?.thumbnail}
                          alt={item.variant?.product?.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-[14px] font-medium leading-snug text-white">
                          {item.variant?.product?.name} - {item.variant?.volume}
                          ml
                        </p>
                        {item.variant?.sku && (
                          <p className="mt-1.5 text-[12px] text-white/40">
                            SKU: {item.variant.sku}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Đơn giá */}
                    <p className="text-center text-[15px] font-bold">
                      {formatPrice(
                        item.variant?.salePrice ?? item.variant?.price ?? 0,
                      )}
                    </p>

                    {/* Số lượng — minus outlined, plus filled white */}
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => handleIDecreaseNumberProduct(item)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white/70 transition hover:border-white hover:text-white"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="min-w-5 text-center text-[15px] font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncreaseNumberProduct(item)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#141414] transition hover:bg-white/85"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Thành tiền */}
                    <p className="text-center text-[15px] font-bold">
                      {formatPrice(
                        Number(
                          item.variant?.salePrice ?? item.variant?.price ?? 0,
                        ) * item.quantity,
                      )}
                    </p>

                    {/* Delete — circle outline × */}
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleDelete(item.variantId)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-white/40 transition hover:border-red-400 hover:text-red-400"
                      >
                        <X size={13} />
                      </button>
                    </div>
                  </div>

                  {index < cart.items.length - 1 && (
                    <div className="h-px bg-white/[0.06]" />
                  )}
                </div>
              );
            })
          )}

          {/* Footer row */}
          {cart?.items?.length > 0 && (
            <div className="mt-1 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
              {/* Coupon */}
              <div className="flex items-center gap-3 text-[13px]">
                <span className="font-medium text-white">Mã khuyến mãi:</span>
                <div className="flex h-9 overflow-hidden rounded-full border border-white/20">
                  <input
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Nhập mã khuyến mãi"
                    className="w-[155px] bg-transparent px-4 text-[13px] text-white placeholder-white/30 outline-none"
                  />
                  <button className="border-l border-white/20 px-5 text-[13px] font-medium text-white transition hover:bg-white/10">
                    Xác nhận
                  </button>
                </div>
              </div>

              {/* Summary */}
              <div className="flex items-center gap-8 text-[13px]">
                <span className="text-white/60">
                  Số lượng:{" "}
                  <span className="font-semibold text-white">{totalQty}</span>
                </span>
                <span className="text-white/60">
                  Tổng tiền:{" "}
                  <span className="text-[18px] font-bold text-white">
                    {formatPrice(totalPrice)}
                  </span>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="reveal-up reveal-delay-2 mt-6 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="rounded-full border border-white/30 px-7 py-2.5 text-[13px] text-white transition hover:bg-white/10"
          >
            Tiếp tục mua sắm
          </button>
          <button
            onClick={() => navigate("/thanh-toan")}
            className="rounded-full bg-white px-7 py-2.5 text-[13px] font-semibold text-[#141414] transition hover:bg-white/90"
          >
            Tiến hành thanh toán
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
