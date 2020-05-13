module.exports = app => {
  const Post = require('../controllers/post.controller');

  app.post("/api/posts", Post.create);
  app.get("/api/posts", Post.getAllPosts);
  
}