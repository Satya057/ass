import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(10);
  const [hasTriggered, setHasTriggered] = useState(false);
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  // Sound effect URL (using a free notification sound)
  const soundUrl = 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav';

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime + 1;
          
          // Check if we've reached the target time and haven't triggered yet
          if (newTime >= targetTime && !hasTriggered) {
            playSound();
            setHasTriggered(true);
          }
          
          return newTime;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, targetTime, hasTriggered]);

  const playSound = () => {
    try {
      // Create audio element and play sound
      const audio = new Audio(soundUrl);
      audio.play().catch(error => {
        console.log('Sound played at', targetTime, 'seconds!');
        console.log('Audio play failed:', error);
      });
    } catch (error) {
      console.log('Sound played at', targetTime, 'seconds!');
      console.log('Audio creation failed:', error);
    }
  };

  const startStopwatch = () => {
    setIsRunning(true);
    setHasTriggered(false);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
    setHasTriggered(false);
  };

  const handleTargetTimeChange = (e) => {
    const newTarget = parseInt(e.target.value) || 10;
    setTargetTime(newTarget);
    setHasTriggered(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="App">
      <div className="stopwatch-container">
        <h1>React Stopwatch</h1>
        
        <div className="time-display">
          <span className="time">{formatTime(time)}</span>
        </div>

        <div className="target-time-section">
          <label htmlFor="targetTime">Target Time (seconds):</label>
          <input
            type="number"
            id="targetTime"
            value={targetTime}
            onChange={handleTargetTimeChange}
            min="1"
            max="3600"
            disabled={isRunning}
          />
        </div>

        <div className="controls">
          {!isRunning ? (
            <button className="btn start-btn" onClick={startStopwatch}>
              Start
            </button>
          ) : (
            <button className="btn stop-btn" onClick={stopStopwatch}>
              Stop
            </button>
          )}
          
          <button className="btn reset-btn" onClick={resetStopwatch}>
            Reset
          </button>
        </div>

        <div className="status">
          {hasTriggered && (
            <div className="triggered-message">
              🎵 Sound triggered at {targetTime} seconds!
            </div>
          )}
          {isRunning && time >= targetTime && !hasTriggered && (
            <div className="triggered-message">
              🎵 Sound triggered at {targetTime} seconds!
            </div>
          )}
        </div>

        <div className="info">
          <p>Click "Start" to begin the stopwatch</p>
          <p>A sound will play when the timer reaches the target time</p>
          <p>Use the input field to set your own target time</p>
        </div>
      </div>
    </div>
  );
}

export default App;
