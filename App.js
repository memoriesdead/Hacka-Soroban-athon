import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('/api/posts');
        setPosts(response.data);
      } catch (e) {
        setError(e);
      }
    }
    fetchPosts();
  }, []);

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  if (!posts) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Blog Posts:</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
