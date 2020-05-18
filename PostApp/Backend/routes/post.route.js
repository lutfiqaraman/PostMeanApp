const express = require("express");
const router = express.Router();
const Post = require("../controllers/post.controller");

router.post("/api/posts", Post.create);

router.get("/api/posts/:id", Post.getPost);
router.get("/api/posts", Post.getAllPosts);
  
router.delete("/api/posts/:id", Post.deletePost);
router.put("/api/posts/:id", Post.updatePost);

module.exports = router;
