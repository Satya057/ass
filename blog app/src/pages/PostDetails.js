import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/posts/${id}`);
      if (!response.ok) {
        throw new Error('Post not found');
      }
      const data = await response.json();
      setPost(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch post. Please try again later.');
      console.error('Error fetching post:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading post...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="error">
        <p>Post not found</p>
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      
      <article className="post-details">
        <h1>{post.title}</h1>
        
        <div className="post-meta">
          <span>Post #{post.id}</span>
          <div className="post-tags">
            {post.tags && post.tags.map((tag, index) => (
              <span key={index} className="post-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="post-content">
          {post.body.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default PostDetails; 