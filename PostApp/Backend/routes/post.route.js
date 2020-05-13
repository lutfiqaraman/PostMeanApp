module.exports = app => {
  // Posts - post the post
app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  res.status(201).json(post);
});

// Posts - Get a list of posts
app.get("/api/posts", (req, res, next) => {
  const listOfPosts = [
    {
      id: "fad123d3w",
      title: "First Post",
      content: "The content of the first post from the server side",
    },
    {
      id: "gfh145ert",
      title: "Second Post",
      content: "The content of the second post from the server side",
    },
    {
      id: "sfe956qrs",
      title: "Third Post",
      content: "The content of the third post from the server side",
    },
  ];

  res.status(200).json(listOfPosts);
});
}