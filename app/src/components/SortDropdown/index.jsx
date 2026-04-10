import { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const itemCls =
  "w-full px-5 py-3 text-left text-sm text-white/75 transition-colors duration-200 hover:bg-white/8 hover:text-white";
const activeCls =
  "w-full px-5 py-3 text-left text-sm bg-white/12 text-white transition-colors duration-200 hover:bg-white/8";

export default function SortDropdown() {
  const [selected, setSelected] = useState("Mặc định");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center overflow-hidden rounded border border-white/10 bg-[#191919] text-sm text-white/80 outline-none">
          <span className="flex items-center gap-2 px-4 py-2">
            <SlidersHorizontal size={16} />
            Sắp xếp
          </span>
          <span className="self-stretch border-l border-white/15" />
          <span className="flex items-center gap-2 px-4 py-2">
            {selected}
            <ChevronDown
              size={14}
              className="transition-transform duration-300 [[data-state=open]_&]:rotate-180"
            />
          </span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="min-w-[200px] rounded-lg border border-white/10 bg-[#191919] p-0 text-white shadow-[0_12px_40px_rgba(0,0,0,0.55)] duration-300"
      >
        <button
          className={selected === "Mặc định" ? activeCls : itemCls}
          onClick={() => setSelected("Mặc định")}
        >
          Mặc định
        </button>
        <button
          className={selected === "Giảm giá" ? activeCls : itemCls}
          onClick={() => setSelected("Giảm giá")}
        >
          Giảm giá
        </button>
        <button
          className={selected === "Mức độ phổ biến" ? activeCls : itemCls}
          onClick={() => setSelected("Mức độ phổ biến")}
        >
          Mức độ phổ biến
        </button>
        <button
          className={selected === "Đánh giá" ? activeCls : itemCls}
          onClick={() => setSelected("Đánh giá")}
        >
          Đánh giá
        </button>
        <button
          className={selected === "Mới nhất" ? activeCls : itemCls}
          onClick={() => setSelected("Mới nhất")}
        >
          Mới nhất
        </button>
        <button
          className={selected === "Từ thấp đến cao" ? activeCls : itemCls}
          onClick={() => setSelected("Từ thấp đến cao")}
        >
          Từ thấp đến cao
        </button>
        <button
          className={selected === "Từ cao đến thấp" ? activeCls : itemCls}
          onClick={() => setSelected("Từ cao đến thấp")}
        >
          Từ cao đến thấp
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
