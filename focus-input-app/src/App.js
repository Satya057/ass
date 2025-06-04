import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = '#e0ffe0'; // light green
      setFocused(true);
    }
  };

  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
        style={{ padding: '10px', fontSize: '16px', marginBottom: '10px' }}
      />
      <button onClick={handleFocus} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Focus Input
      </button>
      {focused && <div style={{ marginTop: '15px', color: 'green', fontWeight: 'bold' }}>Focused!</div>}
    </div>
  );
}

export default App;
