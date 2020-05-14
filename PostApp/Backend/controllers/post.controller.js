const Post = require("../models/post");

// Posts - Create a new post
exports.create = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  
  await post.save();
  res.status(201).json(post);
};

// Posts - Get all posts
exports.getAllPosts = async (req, res) => {
  await Post.find().then(data => {
    res.status(200).json(data);
  });

  
};
