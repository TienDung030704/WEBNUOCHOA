import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { fetchPostBySlug } from "@/service/Blog/blogService";
import { Clock, ChevronRight, ArrowLeft } from "lucide-react";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchPostBySlug(slug)
      .then(setPost)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1b1d1e] pt-[116px]">
        <div className="mx-auto max-w-[860px] px-6 py-14 space-y-6 animate-pulse">
          <div className="h-8 rounded bg-white/10 w-3/4" />
          <div className="h-4 rounded bg-white/6 w-1/3" />
          <div className="h-[400px] rounded-2xl bg-white/6" />
          <div className="space-y-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-4 rounded bg-white/6"
                style={{ width: `${80 + (i % 3) * 8}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#1b1d1e] text-white/40">
        Không tìm thấy bài viết.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1b1d1e] text-white">
      {/* Thumbnail hero */}
      {post.image && (
        <div className="relative h-[380px] w-full overflow-hidden bg-[#111]">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1d1e] via-[#1b1d1e]/40 to-transparent" />
        </div>
      )}

      <div className="mx-auto max-w-[860px] px-6 py-10">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-[13px] text-white/40">
          <NavLink to="/" className="hover:text-white">
            Trang chủ
          </NavLink>
          <ChevronRight size={12} />
          <NavLink to="/kien-thuc-nuoc-hoa" className="hover:text-white">
            Kiến thức nước hoa
          </NavLink>
          <ChevronRight size={12} />
          <span className="line-clamp-1 text-white/70">{post.title}</span>
        </nav>

        {/* PostIdea tag */}
        {post.postIdea && (
          <span className="mb-4 inline-block rounded-full border border-white/15 px-3 py-1 text-[12px] text-white/55">
            {post.postIdea.title}
          </span>
        )}

        {/* Title */}
        <h1 className="mb-4 font-['SVN-Gilroy'] text-[32px] font-bold leading-tight text-white">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="mb-8 flex items-center gap-6 text-[13px] text-white/40">
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {formatDate(post.publishedAt)}
          </span>
          {post.minRead && <span>{post.minRead} phút đọc</span>}
          {post.user && (
            <span className="flex items-center gap-1.5">
              {post.user.avatar ? (
                <img
                  src={post.user.avatar}
                  className="h-5 w-5 rounded-full object-cover"
                />
              ) : null}
              {post.user.username}
            </span>
          )}
        </div>

        <hr className="mb-8 border-white/8" />

        {/* Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-['SVN-Gilroy'] prose-headings:text-white
            prose-p:text-white/75 prose-p:leading-[1.85]
            prose-a:text-white/70 prose-a:underline hover:prose-a:text-white
            prose-img:rounded-xl prose-img:border prose-img:border-white/10
            prose-blockquote:border-white/20 prose-blockquote:text-white/50
            prose-code:text-white/70 prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <hr className="my-10 border-white/8" />

        {/* Back */}
        <button
          onClick={() => navigate("/kien-thuc-nuoc-hoa")}
          className="flex items-center gap-2 text-[14px] text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          Quay lại danh sách bài viết
        </button>
      </div>
    </div>
  );
}
