import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const charactersPerPage = 10;
  const currentPage = useRef(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiPage = Math.ceil(currentPage.current / 2); // API returns 20 per page
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${apiPage}`);
        const data = await response.json();
        setTotalPages(Math.ceil(data.info.count / charactersPerPage));
        // Slice 10 from the 20 returned by API
        const start = (currentPage.current % 2 === 1) ? 0 : 10;
        setCharacters(data.results.slice(start, start + charactersPerPage));
      } catch (err) {
        setError('Failed to fetch characters');
      }
      setLoading(false);
    };
    fetchCharacters();
  }, [currentPage.current]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    currentPage.current = page;
    // Force re-render
    setCharacters([]);
  };

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="character-grid">
        {characters.map((char) => (
          <div key={char.id} className="character-card">
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
            <p>Status: {char.status}</p>
            <p>Species: {char.species}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              backgroundColor: currentPage.current === page ? '#61dafb' : '#282c34',
              color: currentPage.current === page ? '#282c34' : '#fff',
              margin: '0 4px',
              border: 'none',
              borderRadius: '4px',
              padding: '8px 12px',
              cursor: 'pointer',
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
