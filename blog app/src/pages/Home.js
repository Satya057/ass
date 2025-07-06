import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      setPosts(data.posts);
      setFilteredPosts(data.posts);
    } catch (err) {
      setError('Failed to fetch posts. Please try again later.');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      <div className="home-header">
        <h1>Welcome to Our Blog</h1>
        <p>Discover interesting articles and stories</p>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search posts by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="posts-grid">
        {filteredPosts.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id} className="post-card">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-excerpt">
              {post.body.length > 150 
                ? `${post.body.substring(0, 150)}...` 
                : post.body
              }
            </p>
            <div className="post-meta">
              <span>Post #{post.id}</span>
              <div className="post-tags">
                {post.tags && post.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="post-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && searchTerm && (
        <div className="loading">
          No posts found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default Home; 