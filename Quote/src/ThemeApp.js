import React, { useState, useEffect } from 'react';
import DailyQuote from './DailyQuote';

const ThemeApp = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const boxStyle = {
    backgroundColor: theme === 'dark' ? '#222' : '#fff',
    color: theme === 'dark' ? '#fff' : '#222',
    border: '1px solid',
    borderColor: theme === 'dark' ? '#444' : '#ccc',
    borderRadius: '8px',
    padding: '24px',
    margin: '16px 0',
    textAlign: 'center',
    transition: 'all 0.3s',
  };

  return (
    <div style={{ minHeight: '100vh', background: theme === 'dark' ? '#181c23' : '#f4f4f4', transition: 'background 0.3s' }}>
      <div style={{ padding: 32, maxWidth: 600, margin: '0 auto' }}>
        <button onClick={toggleTheme} style={{ marginBottom: 24 }}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
        <DailyQuote />
        <div style={boxStyle}>This is Box 1</div>
        <div style={boxStyle}>This is Box 2</div>
        <div style={boxStyle}>This is Box 3</div>
      </div>
    </div>
  );
};

export default ThemeApp; 