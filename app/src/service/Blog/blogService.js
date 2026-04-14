import http from "@/utils/http";

// GET /api/blogs?postIdea=&page=&limit=
export const fetchPosts = ({ postIdeaId, page = 1, limit = 9 } = {}) => {
  const params = new URLSearchParams({ page, limit });
  if (postIdeaId) params.set("postIdea", postIdeaId);
  return http.get(`blogs?${params.toString()}`).then((r) => r.data);
};

// GET /api/blogs/post-ideas
export const fetchPostIdeas = () =>
  http.get("blogs/post-ideas").then((r) => r.data);

// GET /api/blogs/:slug
export const fetchPostBySlug = (slug) =>
  http.get(`blogs/${slug}`).then((r) => r.data);
