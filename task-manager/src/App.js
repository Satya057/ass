import React, { useState, useMemo } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filters from './components/Filters';

function getPriorityValue(priority) {
  if (priority === 'High') return 3;
  if (priority === 'Medium') return 2;
  return 1;
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const addTask = ({ title, priority }) => {
    setTasks(prev =>
      [...prev, { id: Date.now(), title, priority, completed: false }]
    );
  };

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  // Sort and filter tasks
  const filteredTasks = useMemo(() => {
    let result = [...tasks];
    if (priorityFilter !== 'All') {
      result = result.filter(task => task.priority === priorityFilter);
    }
    if (statusFilter !== 'All') {
      result = result.filter(task =>
        statusFilter === 'Completed' ? task.completed : !task.completed
      );
    }
    // Sort by priority (High > Medium > Low)
    result.sort((a, b) => getPriorityValue(b.priority) - getPriorityValue(a.priority));
    return result;
  }, [tasks, priorityFilter, statusFilter]);

  return (
    <div className="App" style={{ maxWidth: 500, margin: '2rem auto', padding: 24, background: '#f9f9f9', borderRadius: 8 }}>
      <h1>Advanced Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <Filters
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
