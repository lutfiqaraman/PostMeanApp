const Post = require("../models/post");

// Posts - Create a new post
exports.create = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  
  await post.save().then((result) => {
    res.status(201).json({
      postID: result.id
    });
  });
};

// Posts - Get all posts
exports.getAllPosts = async (req, res) => {
  await Post.find().then(data => {
    res.status(200).json(data);
  });
};

// Posts - Delete a post
exports.deletePost = async (req, res) => {
  const postID = req.params.id;
  
  Post.deleteOne({ _id: postID }).then((result) => {
    res.status(200).json(result);
  });
}
