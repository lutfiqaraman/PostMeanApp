module.exports = app => {
  const Post = require('../controllers/post.controller');

  app.post("/api/posts", Post.create);

  app.get("/api/posts/:id", Post.getPost);
  app.get("/api/posts", Post.getAllPosts);
  
  app.delete("/api/posts/:id", Post.deletePost);
  app.put("/api/posts/:id", Post.updatePost);
}