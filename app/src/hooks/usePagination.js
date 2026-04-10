import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

function usePagination(items, limit = 9) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const totalPages = useMemo(
    () => Math.ceil(items.length / limit),
    [items.length, limit],
  );

  const currentItems = useMemo(
    () => items.slice((page - 1) * limit, page * limit),
    [items, page, limit],
  );

  const handlePageChange = (newPage) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("page", String(newPage));
      return next;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { page, totalPages, currentItems, handlePageChange };
}

export default usePagination;
