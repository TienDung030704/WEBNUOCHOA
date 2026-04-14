const prisma = require("../lib/prisma");

class BlogService {
  // Lấy danh sách bài viết đã publish, filter theo postIdeaId
  async getAllPosts({ postIdeaId, page = 1, limit = 9 } = {}) {
    const where = { publishedAt: { not: null } };
    if (postIdeaId) where.postIdeaId = parseInt(postIdeaId);

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        include: {
          postIdea: { select: { id: true, title: true } },
          user: { select: { id: true, username: true, avatar: true } },
        },
        orderBy: { publishedAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.post.count({ where }),
    ]);

    return { posts, total, page, limit };
  }

  // Lấy chi tiết 1 bài theo slug
  async getPostBySlug(slug) {
    return prisma.post.findFirst({
      where: { slug, publishedAt: { not: null } },
      include: {
        postIdea: { select: { id: true, title: true } },
        user: { select: { id: true, username: true, avatar: true } },
      },
    });
  }

  // Lấy tất cả PostIdea (dùng để filter sidebar)
  async getAllPostIdeas() {
    return prisma.postIdea.findMany({
      include: { _count: { select: { posts: true } } },
      orderBy: { title: "asc" },
    });
  }
}

module.exports = new BlogService();
