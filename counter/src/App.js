import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        
        <div className="counter-display">
          <h2>Count: {count}</h2>
          {count === 10 && (
            <div className="goal-message">
              <h3>🎉 Goal Reached! 🎉</h3>
            </div>
          )}
        </div>

        <div className="button-container">
          <button onClick={increment} className="btn btn-increment">
            Increment
          </button>
          <button onClick={decrement} className="btn btn-decrement" disabled={count === 0}>
            Decrement
          </button>
          <button onClick={reset} className="btn btn-reset">
            Reset
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
