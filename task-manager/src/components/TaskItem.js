import React from 'react';

export default function TaskItem({ task, onToggle, onDelete }) {
  const priorityColors = {
    High: '#ffcccc',
    Medium: '#fff7cc',
    Low: '#e6ffe6',
  };
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.5rem',
        padding: '0.5rem 1rem',
        border: task.priority === 'High' ? '2px solid #ff0000' : '1px solid #ccc',
        background: priorityColors[task.priority],
        borderRadius: 6,
        fontWeight: task.priority === 'High' ? 'bold' : 'normal',
        opacity: task.completed ? 0.6 : 1,
      }}
    >
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title} <small>({task.priority})</small>
      </span>
      <span>
        <button onClick={onToggle} style={{ marginRight: 8 }}>
          {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button onClick={onDelete} style={{ color: '#fff', background: '#d11a2a', border: 'none', borderRadius: 4, padding: '0.2rem 0.6rem' }}>
          Delete
        </button>
      </span>
    </li>
  );
} 