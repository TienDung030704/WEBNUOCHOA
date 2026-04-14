import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { fetchPosts, fetchPostIdeas } from "@/service/Blog/blogService";
import { Eye, Clock, ChevronRight } from "lucide-react";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function BlogListPage() {
  const [posts, setPosts] = useState([]);
  const [postIdeas, setPostIdeas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeIdea = searchParams.get("postIdea") || "";

  useEffect(() => {
    fetchPostIdeas().then(setPostIdeas).catch(console.error);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchPosts({ postIdeaId: activeIdea || undefined })
      .then((data) => setPosts(data.posts))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [activeIdea]);

  const handleCategory = (id) => {
    if (id) setSearchParams({ postIdea: id });
    else setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#1b1d1e] text-white">
      {/* Hero */}
      <div className="relative flex h-[280px] items-center justify-center overflow-hidden bg-[#111213]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        <div className="relative z-10 text-center">
          <p className="mb-2 text-[13px] uppercase tracking-[4px] text-white/40">
            DUWNG Perfume
          </p>
          <h1 className="font-['SVN-Gilroy'] text-[42px] font-bold text-white">
            Kiến thức nước hoa
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-14">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-[13px] text-white/40">
          <NavLink to="/" className="hover:text-white">
            Trang chủ
          </NavLink>
          <ChevronRight size={12} />
          <span className="text-white/75">Kiến thức nước hoa</span>
        </nav>

        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className="w-[220px] shrink-0">
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-[2px] text-white/40">
              Chuyên mục
            </h3>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => handleCategory("")}
                  className={`w-full rounded-lg px-4 py-2.5 text-left text-[14px] transition-colors ${
                    !activeIdea
                      ? "bg-white/10 font-semibold text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Tất cả
                </button>
              </li>
              {postIdeas.map((idea) => (
                <li key={idea.id}>
                  <button
                    onClick={() => handleCategory(idea.id)}
                    className={`w-full rounded-lg px-4 py-2.5 text-left text-[14px] transition-colors ${
                      activeIdea === String(idea.id)
                        ? "bg-white/10 font-semibold text-white"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {idea.title}
                    <span className="ml-2 text-[12px] text-white/30">
                      ({idea._count?.posts ?? 0})
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse rounded-2xl border border-white/8 bg-white/4 overflow-hidden"
                  >
                    <div className="h-[200px] bg-white/8" />
                    <div className="p-5 space-y-3">
                      <div className="h-4 rounded bg-white/10 w-3/4" />
                      <div className="h-3 rounded bg-white/8 w-full" />
                      <div className="h-3 rounded bg-white/8 w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : posts.length === 0 ? (
              <div className="flex h-[300px] items-center justify-center text-white/40">
                Chưa có bài viết nào.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <NavLink
                    key={post.id}
                    to={`/kien-thuc-nuoc-hoa/${post.slug}`}
                    className="group overflow-hidden rounded-2xl border border-white/8 bg-white/4 transition-all hover:border-white/20 hover:bg-white/6"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-[200px] overflow-hidden bg-white/5">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[40px] opacity-20">
                          🌸
                        </div>
                      )}
                      {post.postIdea && (
                        <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[12px] text-white/80 backdrop-blur-sm">
                          {post.postIdea.title}
                        </span>
                      )}
                    </div>

                    {/* Body */}
                    <div className="p-5">
                      <h2 className="mb-2 line-clamp-2 text-[15px] font-semibold leading-snug text-white/90 group-hover:text-white">
                        {post.title}
                      </h2>
                      {post.description && (
                        <p className="mb-4 line-clamp-2 text-[13px] leading-relaxed text-white/45">
                          {post.description}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-[12px] text-white/30">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {formatDate(post.publishedAt)}
                        </span>
                        {post.minRead && <span>{post.minRead} phút đọc</span>}
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
