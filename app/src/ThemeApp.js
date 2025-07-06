import React, { useState, useEffect } from 'react';
import ThemedBox from './ThemedBox';

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

  return (
    <div style={{ minHeight: '100vh', background: theme === 'dark' ? '#181c23' : '#f4f4f4', transition: 'background 0.3s' }}>
      <div style={{ padding: 32, maxWidth: 600, margin: '0 auto' }}>
        <button onClick={toggleTheme} style={{ marginBottom: 24 }}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
        <ThemedBox theme={theme}>This is Box 1</ThemedBox>
        <ThemedBox theme={theme}>This is Box 2</ThemedBox>
        <ThemedBox theme={theme}>This is Box 3</ThemedBox>
      </div>
    </div>
  );
};

export default ThemeApp; 