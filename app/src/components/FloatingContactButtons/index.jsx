import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function FloatingContactButtons() {
  const { pathname } = useLocation();
  const isAdminPage = pathname.startsWith("/admin");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isAdminPage) return;

    const handleScroll = () => {
      setVisible(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAdminPage]);

  if (isAdminPage) return null;

  const visibilityClass = visible
    ? "translate-x-0 opacity-100 pointer-events-auto"
    : "translate-x-8 opacity-0 pointer-events-none";

  return (
    <div
      aria-label="Liên hệ nhanh"
      className={`fixed right-5 bottom-6 z-40 flex flex-col gap-3 transition-all duration-700 ease-out motion-reduce:transition-none ${visibilityClass}`}
    >
      <a
        href="https://www.facebook.com/nguyen.tien.dung.764260/"
        target="_blank"
        rel="noreferrer"
        aria-label="Liên hệ qua Messenger"
        title="Messenger"
        className="block h-14 w-14 overflow-hidden rounded-full shadow-lg transition-transform hover:scale-105"
      >
        <img
          src={`${import.meta.env.BASE_URL}messsenger.svg`}
          alt="Messenger"
          className="h-full w-full object-contain"
        />
      </a>

      <a
        href="https://zalo.me/0589506666"
        target="_blank"
        rel="noreferrer"
        aria-label="Liên hệ qua Zalo"
        title="Zalo"
        className="block h-14 w-14 overflow-hidden rounded-full shadow-lg transition-transform hover:scale-105"
      >
        <img
          src={`${import.meta.env.BASE_URL}zalo.svg`}
          alt="Zalo"
          className="h-full w-full object-contain"
        />
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Cuộn lên đầu trang"
        title="Lên đầu trang"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-black shadow-lg transition-transform hover:scale-105"
      >
        <img
          src={`${import.meta.env.BASE_URL}arrow-top.svg`}
          alt=""
          className="h-6 w-6"
        />
      </button>
    </div>
  );
}

export default FloatingContactButtons;
