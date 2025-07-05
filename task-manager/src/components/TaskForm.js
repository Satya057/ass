import React, { useState } from 'react';

const priorities = ['High', 'Medium', 'Low'];

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title: title.trim(), priority });
    setTitle('');
    setPriority('Medium');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        {priorities.map(p => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
} 