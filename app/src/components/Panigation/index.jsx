import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="flex items-center justify-center gap-1 mt-8">
      {/* Prev */}
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="flex h-9 w-9 items-center justify-center rounded border border-white/10 bg-[#191919] text-white/50 transition hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronLeft size={16} />
      </button>

      {/* Page numbers */}
      {[...Array(totalPages)].map((_, i) => {
        const pageNumber = i + 1;
        const isActive = page === pageNumber;
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`flex h-9 min-w-9 items-center justify-center rounded border px-2 text-sm font-medium transition ${
              isActive
                ? "border-[#bc864a]/60 bg-[#bc864a]/15 text-[#e0a96d]"
                : "border-white/10 bg-[#191919] text-white/60 hover:border-white/25 hover:text-white"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next */}
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="flex h-9 w-9 items-center justify-center rounded border border-white/10 bg-[#191919] text-white/50 transition hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

export default Pagination;
