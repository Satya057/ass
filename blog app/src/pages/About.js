import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Blog</h1>
      
      <p>
        Welcome to our blog! This is a simple yet powerful blog application built with React 
        that showcases modern web development practices and provides an engaging reading experience.
      </p>
      
      <p>
        Our blog features a collection of interesting articles and stories fetched from the 
        DummyJSON API, demonstrating how to integrate external data sources into React applications. 
        Each post comes with rich content, tags, and a unique identifier for easy navigation.
      </p>
      
      <p>
        <strong>Key Features:</strong>
      </p>
      <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
        <li>Responsive design that works on all devices</li>
        <li>Real-time search functionality to filter posts by title</li>
        <li>Individual post pages with full content display</li>
        <li>Tag-based categorization system</li>
        <li>Modern UI with smooth animations and transitions</li>
        <li>Error handling and loading states</li>
      </ul>
      
      <p>
        <strong>Technology Stack:</strong>
      </p>
      <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
        <li>React 18 for the frontend framework</li>
        <li>React Router for navigation and routing</li>
        <li>CSS3 for styling with modern design principles</li>
        <li>Fetch API for data retrieval</li>
        <li>DummyJSON API for blog post data</li>
      </ul>
      
      <p>
        This project was created as part of a learning journey to master React fundamentals, 
        including component architecture, state management, routing, and API integration. 
        It serves as a foundation for building more complex web applications.
      </p>
      
      <p>
        Feel free to explore the blog posts, use the search functionality, and navigate 
        through different pages to experience the full range of features this application offers.
      </p>
    </div>
  );
};

export default About; 