import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize state with sample tasks
  const [tasks, setTasks] = useState(["Buy milk", "Study React"]);
  const [newTask, setNewTask] = useState("");

  // Function to add a new task
  const addTask = () => {
    // Validate input to avoid adding empty tasks
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask(""); // Clear the input field
    }
  };

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // Function to clear all tasks
  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>Todo List</h1>
        
        {/* Input section */}
        <div className="input-section">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a new task..."
            className="task-input"
          />
          <button onClick={addTask} className="add-btn">
            Add Task
          </button>
        </div>

        {/* Tasks list */}
        <div className="tasks-section">
          {tasks.length === 0 ? (
            <p className="empty-message">No tasks available.</p>
          ) : (
            <ul className="tasks-list">
              {tasks.map((task, index) => (
                <li key={index} className="task-item">
                  {task}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Clear All button */}
        {tasks.length > 0 && (
          <button onClick={clearAllTasks} className="clear-btn">
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}

export default App; 