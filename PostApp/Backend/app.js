const express = require('express');
const app = express();

app.use('/api/posts',(req, res, next) => {
  const postList = [
    {
      id: 'fad123d3w',
      title: 'First Post',
      content: 'The content of the first post from the server side'
    },
    {
      id: 'gfh145ert',
      title: 'Second Post',
      content: 'The content of the second post from the server side'
    },
    {
      id: 'sfe956qrs',
      title: 'Third Post',
      content: 'The content of the third post from the server side'
    }
  ];

  res.status(200).json(postList);
});

module.exports = app;
