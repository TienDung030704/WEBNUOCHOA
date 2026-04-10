import Pagination from "@/components/Panigation";
import { adminDeleteUser, adminGetUsers } from "@/service/Admin/AdminService";
import { Pencil, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const PAGE_SIZE = 10;

function Users() {
  const dispatch = useDispatch();
  const getUserAdmin = useSelector((state) => state.admin.users);

  // logic xử lý pagination
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(getUserAdmin.length / PAGE_SIZE));
  const pagedUsers = getUserAdmin.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );
  console.log(getUserAdmin);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(adminGetUsers()).unwrap();
      } catch (error) {
        console.log("ERROR FE:", error);
      }
    };
    fetchData();
  }, []);

  const handleDeleteUser = async (userId) => {
    const result = await dispatch(adminDeleteUser(userId));
    if (!result.error) {
      toast.success("Xóa người dùng thành công");
      dispatch(adminGetUsers());
    } else {
      toast.error("Xóa người dùng thất bại");
    }
  };

  return (
    <div className="catalog-page-enter">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-white">Người dùng</h1>
        <p className="mt-1 text-[14px] text-white/45">
          Quản lý tài khoản người dùng
        </p>
      </div>

      {/* Filter bar */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-2.5">
          <Search size={15} className="shrink-0 text-white/35" />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên, email..."
            className="w-full bg-transparent text-[13px] text-white outline-none placeholder:text-white/30"
          />
        </div>
        <select className="rounded-xl border border-white/10 bg-[#111113] px-4 py-2.5 text-[13px] text-white/70 outline-none">
          <option value="">Tất cả vai trò</option>
          <option>Admin</option>
          <option>User</option>
        </select>
        <select className="rounded-xl border border-white/10 bg-[#111113] px-4 py-2.5 text-[13px] text-white/70 outline-none">
          <option value="">Tất cả trạng thái</option>
          <option>Hoạt động</option>
          <option>Đã khóa</option>
        </select>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-white/8 bg-white/3">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/6">
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Người dùng
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Email
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Số điện thoại
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Vai trò
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Trạng thái
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Ngày tạo
                </th>
                <th className="px-5 py-3.5 text-left text-[12px] font-medium uppercase tracking-wider text-white/40">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {getUserAdmin.length === 0 ? (
                <tr>
                  <td
                    className="px-5 py-10 text-center text-[13px] text-white/30"
                    colSpan={7}
                  >
                    Chưa có dữ liệu
                  </td>
                </tr>
              ) : (
                pagedUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-white/5 transition-colors hover:bg-white/3"
                  >
                    <td className="px-5 py-3.5 text-[13px] text-white">
                      {user.fullName || "—"}
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-white/60">
                      {user.email}
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-white/60">
                      {user.phone || "—"}
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-white/60">
                      {user.role === "ADMIN" ? "Admin" : "User"}
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                          user.isActive
                            ? "bg-green-500/15 text-green-400"
                            : "bg-red-500/15 text-red-400"
                        }`}
                      >
                        {user.isActive ? "Hoạt động" : "Đã khóa"}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-white/60">
                      {new Date(user.createdAt).toLocaleDateString("vi-VN")}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400">
                          <Pencil size={13} />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-white/6 px-5 py-4">
          <p className="text-[13px] text-white/40">
            Hiển thị {getUserAdmin.length} người dùng
          </p>
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Users;
