import React from 'react';

export default function Filters({ priorityFilter, setPriorityFilter, statusFilter, setStatusFilter }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      <label>
        Priority:
        <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>
      <label>
        Status:
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </label>
    </div>
  );
} 