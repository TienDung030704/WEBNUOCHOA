const blogService = require("../services/blog.service");

// [GET] /api/blogs?postIdea=&page=&limit=
const getAllPosts = async (req, res) => {
  try {
    const { postIdea, page, limit } = req.query;
    const result = await blogService.getAllPosts({
      postIdeaId: postIdea,
      page: page ? parseInt(page) : 1,
      limit: limit ? parseInt(limit) : 9,
    });
    res.success(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// [GET] /api/blogs/post-ideas
const getAllPostIdeas = async (req, res) => {
  try {
    const ideas = await blogService.getAllPostIdeas();
    res.success(ideas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// [GET] /api/blogs/:slug
const getPostBySlug = async (req, res) => {
  try {
    const post = await blogService.getPostBySlug(req.params.slug);
    if (!post)
      return res.status(404).json({ message: "Không tìm thấy bài viết" });
    res.success(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllPosts, getAllPostIdeas, getPostBySlug };
