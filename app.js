const express = require('express');

const app = express();

app.get('/api/posts', (req, res) => {
  const posts = [
    {
      id: 1,
      title: 'Post 1',
      body: 'This is the body of post 1',
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'This is the body of post 2',
    },
  ];
  res.json(posts);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
