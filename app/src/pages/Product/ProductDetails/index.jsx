import { addMyCarts, getMyCarts } from "@/service/Cart/cartService";
import { fetchProductById } from "@/service/Product/ProductService";
import { buildGalleryImages, getNextIndex } from "@/utils/buildGalleryImages";
import {
  BadgeCheck,
  RefreshCcw,
  Headphones,
  ChevronRight,
  ChevronLeft,
  Facebook,
  Twitter,
  Link2,
  Phone,
  MessageCircle,
  Flag,
  Minus,
  Plus,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // khởi tạo giá trị số lượng chai muốn mua
  const [count, setCount] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slug } = useParams();
  const detailProducts = useSelector((state) => state.product.productDetail);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const variantId = selectedVariant?.id;

  const allImages = buildGalleryImages(detailProducts);

  // logic chuyễn ảnh sản phẩm
  const handlePrevImage = () =>
    setCurrentImageIndex((prev) => getNextIndex(prev, allImages.length, -1));

  const handleNextImage = () =>
    setCurrentImageIndex((prev) => getNextIndex(prev, allImages.length, 1));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchProductById(slug)).unwrap();
      } catch (error) {
        console.log("Lỗi:", error);
      }
    };
    fetchData();
  }, [dispatch, slug]);

  useEffect(() => {
    if (detailProducts?.variants?.length > 0) {
      setSelectedVariant(detailProducts.variants[0]);
    }
  }, [detailProducts]);

  // Mua ngay:
  const handleBuyNow = async () => {
    try {
      await dispatch(addMyCarts({ variantId, quantity: count })).unwrap();
      await dispatch(getMyCarts());
      navigate("/thanh-toan");
    } catch (error) {
      console.log("ERROR FE:", error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại ❌");
    }
  };

  //Hàm gọi api thêm sản phẩm vào giỏ hàng
  const handleAddToCart = async () => {
    try {
      await dispatch(addMyCarts({ variantId, quantity: count })).unwrap();
      await dispatch(getMyCarts());
      toast.success("Đã thêm vào giỏ hàng 🛒");
    } catch (error) {
      console.log("ERROR FE:", error);
      toast.error("Thêm vào giỏ hàng thất bại ❌");
    }
  };

  return (
    <div className="catalog-page-enter min-h-screen bg-[#141414] pt-[100px] text-white">
      {/* BREADCRUMB */}
      <div className="mx-auto flex max-w-[1280px] items-center gap-2 px-6 py-5 text-sm text-white/50">
        <span
          className="cursor-pointer hover:text-white"
          onClick={() => navigate("/")}
        >
          Trang chủ
        </span>
        <ChevronRight size={14} className="text-white/30" />
        <span className="cursor-pointer hover:text-white">
          {detailProducts?.brand?.name ?? "Thương hiệu"}
        </span>
        <ChevronRight size={14} className="text-white/30" />
        <span className="text-white">
          {detailProducts?.name ?? "Tên sản phẩm"}
        </span>
      </div>

      {/* MAIN LAYOUT */}
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 pb-24 lg:grid-cols-[1fr_1fr]">
        {/* ── LEFT: GALLERY ── */}
        <div className="flex flex-col gap-4">
          {/* Main image */}
          <div
            className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-white"
            style={{ minHeight: 420 }}
          >
            {/* Arrow left */}
            <button
              onClick={handlePrevImage}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/20 p-2 hover:bg-black/40 transition"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            {/* Placeholder image area */}
            <div className="flex h-[400px] w-full items-center justify-center">
              {allImages.length > 0 ? (
                <img
                  key={currentImageIndex}
                  src={allImages[currentImageIndex].url}
                  alt={allImages[currentImageIndex].altText || ""}
                  className="gallery-img-enter h-full w-full object-contain"
                />
              ) : (
                <span className="text-gray-400">[ Ảnh sản phẩm ]</span>
              )}
            </div>
            {/* Arrow right */}
            <button
              onClick={handleNextImage}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/20 p-2 hover:bg-black/40 transition"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {allImages.length > 0
              ? allImages.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`h-[100px] w-[100px] cursor-pointer overflow-hidden rounded-xl border-2 bg-white flex items-center justify-center transition ${
                      i === currentImageIndex
                        ? "border-white"
                        : "border-white/10 hover:border-white/40"
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.altText || ""}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))
              : [1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-[100px] w-[100px] cursor-pointer overflow-hidden rounded-xl border-2 border-white/10 bg-white flex items-center justify-center hover:border-white/40 transition"
                  >
                    <span className="text-[10px] text-gray-400">Ảnh {i}</span>
                  </div>
                ))}
          </div>
        </div>

        {/* ── RIGHT: INFO ── */}
        <div className="flex flex-col gap-5">
          {/* Name */}
          <h1 className="text-[32px] font-bold leading-tight text-white">
            {detailProducts?.name ?? "—"}
          </h1>

          {/* Category + SKU */}
          <p className="text-sm text-white/50">
            Danh mục:{" "}
            <span className="font-medium text-white/80">
              Nước hoa • {detailProducts?.category?.name ?? "—"}
            </span>
            &nbsp;•&nbsp; SKU:{" "}
            <span className="font-medium text-white/80">
              {detailProducts?.variants?.[0]?.sku ?? "—"}
            </span>
          </p>

          <div className="h-px w-full bg-white/10" />

          {/* Price */}
          <p className="text-[32px] font-bold text-white">
            {selectedVariant
              ? Number(
                  selectedVariant.salePrice ?? selectedVariant.price,
                ).toLocaleString("vi-VN")
              : "—"}{" "}
            <span className="text-2xl">đ</span>
          </p>

          {/* Dung Tích */}
          <div className="flex items-center gap-4">
            <span className="min-w-[80px] text-sm text-white/60">
              Dung Tích
            </span>
            <div className="flex flex-wrap gap-2">
              {detailProducts?.variants?.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v)}
                  className={`rounded-full border px-4 py-1.5 text-sm transition ${
                    selectedVariant?.id === v.id
                      ? "border-white bg-white font-semibold text-black"
                      : "border-white/20 bg-[#2a2a2a] text-white/80 hover:border-white/40"
                  }`}
                >
                  {v.volume}ml
                </button>
              ))}
            </div>
          </div>

          {/* Số Lượng */}
          <div className="flex items-center gap-4">
            <span className="min-w-[80px] text-sm text-white/60">
              Số Lượng:
            </span>
            <div className="flex items-center gap-0 overflow-hidden rounded-full border border-white/20">
              <button
                onClick={() => setCount((prev) => prev - 1)}
                className="px-4 py-2 text-white/70 hover:text-white transition hover:bg-white/8"
              >
                <Minus size={16} />
              </button>
              <span className="min-w-[36px] text-center text-sm font-medium text-white">
                {count}
              </span>
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="px-4 py-2 text-white/70 hover:text-white transition hover:bg-white/8"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-1">
            <button
              onClick={handleBuyNow}
              className="relative flex-1 overflow-hidden rounded-full bg-[#2b2b2b] py-3 text-sm font-semibold text-white transition before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-white/20 before:transition-[width] before:duration-500 before:content-[''] hover:before:w-full"
            >
              <span className="relative z-10">Mua ngay</span>
            </button>
            <button
              onClick={handleAddToCart}
              className="relative flex-1 overflow-hidden rounded-full border border-white/20 bg-transparent py-3 text-sm font-semibold text-white/80 transition before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-white/15 before:transition-[width] before:duration-500 before:content-[''] hover:before:w-full"
            >
              <span className="relative z-10">Thêm vào giỏ hàng</span>
            </button>
          </div>

          <div className="h-px w-full bg-white/10" />

          {/* Contact row */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-white/60">
            <button className="flex items-center gap-1.5 hover:text-white transition">
              <MessageCircle size={16} /> Zalo
            </button>
            <button className="flex items-center gap-1.5 hover:text-white transition">
              <Flag size={16} /> Fanpage
            </button>
            <button className="flex items-center gap-1.5 hover:text-white transition">
              <Phone size={16} /> 0869 271 243
            </button>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-white/40">Chia Sẻ:</span>
              <button className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 hover:border-white/50 transition">
                <Facebook size={13} />
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 hover:border-white/50 transition">
                <Twitter size={13} />
              </button>
              <button className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 hover:border-white/50 transition">
                <Link2 size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TABS + SIDEBAR */}
      <div className="mx-auto max-w-[1280px] px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          {/* Left: Tabs */}
          <div>
            {/* Tab headers: click vào tab nào thì setActiveTab = tên tab đó */}
            <div className="flex gap-8 border-b border-white/10">
              <button
                onClick={() => setActiveTab("description")}
                className={`pb-3 text-[15px] font-medium transition-colors ${
                  activeTab === "description"
                    ? "border-b-2 border-white text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                Mô tả sản phẩm
              </button>
              <button
                onClick={() => setActiveTab("usage")}
                className={`pb-3 text-[15px] font-medium transition-colors ${
                  activeTab === "usage"
                    ? "border-b-2 border-white text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                Sử dụng và bảo quản
              </button>
              <button
                onClick={() => setActiveTab("policy")}
                className={`pb-3 text-[15px] font-medium transition-colors ${
                  activeTab === "policy"
                    ? "border-b-2 border-white text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                Chính sách
              </button>
            </div>

            {/* Tab content: tab nào đang active thì hiện nội dung của tab đó */}
            <div
              key={activeTab}
              className="tab-content-enter mt-6 text-[15px] leading-relaxed text-white/75 whitespace-pre-line"
            >
              {activeTab === "description" && (
                <div className="space-y-5">
                  {/* Notes cấu trúc (nếu có) */}
                  {(detailProducts?.topNotes ||
                    detailProducts?.middleNotes ||
                    detailProducts?.baseNotes) && (
                    <div className="space-y-3">
                      {detailProducts.topNotes && (
                        <div>
                          <span className="text-white/40 text-[13px] uppercase tracking-wider">
                            Hương đầu
                          </span>
                          <p className="mt-1">{detailProducts.topNotes}</p>
                        </div>
                      )}
                      {detailProducts.middleNotes && (
                        <div>
                          <span className="text-white/40 text-[13px] uppercase tracking-wider">
                            Hương giữa
                          </span>
                          <p className="mt-1">{detailProducts.middleNotes}</p>
                        </div>
                      )}
                      {detailProducts.baseNotes && (
                        <div>
                          <span className="text-white/40 text-[13px] uppercase tracking-wider">
                            Hương cuối
                          </span>
                          <p className="mt-1">{detailProducts.baseNotes}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Văn xuôi mô tả (nếu có) */}
                  {detailProducts?.description && (
                    <p>{detailProducts.description}</p>
                  )}

                  {/* Fallback nếu không có gì */}
                  {!detailProducts?.description &&
                    !detailProducts?.topNotes &&
                    !detailProducts?.middleNotes &&
                    !detailProducts?.baseNotes && (
                      <p>Chưa có mô tả sản phẩm.</p>
                    )}
                </div>
              )}
              {activeTab === "usage" && (
                <p>{detailProducts?.usage || "Chưa có hướng dẫn sử dụng."}</p>
              )}
              {activeTab === "policy" && (
                <p>
                  {detailProducts?.policy || "Chưa có thông tin chính sách."}
                </p>
              )}
            </div>
          </div>

          {/* Right: Info cards */}
          <div className="rounded-xl border border-white/10 bg-white/3 divide-y divide-white/10 h-fit">
            <div className="flex items-start gap-4 p-5">
              <BadgeCheck size={22} className="mt-0.5 shrink-0 text-white/50" />
              <div>
                <p className="font-semibold text-white">Chính hãng 100%</p>
                <p className="mt-0.5 text-sm text-white/50">
                  Cam kết sản phẩm chính hãng 100%
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5">
              <RefreshCcw size={22} className="mt-0.5 shrink-0 text-white/50" />
              <div>
                <p className="font-semibold text-white">Chính sách đổi trả</p>
                <p className="mt-0.5 text-sm text-white/50">
                  Chính sách đổi hàng và tích điểm thành viên
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5">
              <Headphones size={22} className="mt-0.5 shrink-0 text-white/50" />
              <div>
                <p className="font-semibold text-white">Tư vấn &amp; hỗ trợ</p>
                <p className="mt-0.5 text-sm text-white/50">
                  Tư vấn và hỗ trợ gói quà miễn phí
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
