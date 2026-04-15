import { SORT_OPTIONS } from "@/utils/sortProducts";

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-white/50">Sắp xếp theo:</span>
      {SORT_OPTIONS.map((opt) => (
        <button
          key={opt.key}
          onClick={() => onChange(opt.key)}
          className={`rounded border px-4 py-1.5 text-sm transition-colors ${
            value === opt.key
              ? "border-white/30 bg-white/15 text-white"
              : "border-white/10 bg-transparent text-white/60 hover:border-white/20 hover:text-white"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
