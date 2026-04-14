const express = require("express");
const blogController = require("../controllers/blog.controller");

const router = express.Router();

// [GET] /api/blogs
router.get("/", blogController.getAllPosts);

// [GET] /api/blogs/post-ideas
router.get("/post-ideas", blogController.getAllPostIdeas);

// [GET] /api/blogs/:slug
router.get("/:slug", blogController.getPostBySlug);

module.exports = router;
