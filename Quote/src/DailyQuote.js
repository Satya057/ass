import React, { useState, useEffect, useRef } from 'react';

const spinnerStyle = {
  display: 'inline-block',
  width: 32,
  height: 32,
  border: '4px solid #ccc',
  borderTop: '4px solid #333',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
  margin: '16px auto',
};

const spinnerKeyframes = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;

function DailyQuote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef();

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      setQuote(data);
    } catch (e) {
      setQuote({ content: 'Failed to fetch quote.', author: '' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
    timerRef.current = setInterval(fetchQuote, 30000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div style={{ margin: '32px 0', textAlign: 'center', minHeight: 120 }}>
      <style>{spinnerKeyframes}</style>
      {loading ? (
        <div style={spinnerStyle} />
      ) : quote ? (
        <>
          <div style={{ fontSize: 20, fontStyle: 'italic', marginBottom: 8, transition: 'opacity 0.3s' }}>
            "{quote.content}"
          </div>
          <div style={{ fontWeight: 'bold', color: '#555', marginBottom: 16 }}>
            — {quote.author}
          </div>
        </>
      ) : null}
      <button onClick={fetchQuote} disabled={loading} style={{ padding: '8px 16px', fontSize: 16 }}>
        {loading ? 'Loading...' : 'Get New Quote'}
      </button>
    </div>
  );
}

export default DailyQuote; 