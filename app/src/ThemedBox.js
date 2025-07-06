import React from 'react';

const ThemedBox = ({ theme, children }) => {
  const styles = {
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
  return <div style={styles}>{children}</div>;
};

export default ThemedBox; 