// Posts - Create a new post
exports.create = async (req, res) => {
  const post = req.body;
  await res.status(201).json(post);
}

// Posts - Get all posts
exports.getAllPosts = async (req, res) => {
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
}