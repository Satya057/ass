import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize state with an array of student objects
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", present: true },
    { id: 2, name: "Jane Smith", present: false },
    { id: 3, name: "Mike Johnson", present: true },
    { id: 4, name: "Sarah Wilson", present: true },
    { id: 5, name: "David Brown", present: false },
    { id: 6, name: "Emily Davis", present: true },
    { id: 7, name: "Alex Turner", present: false }
  ]);

  const [filter, setFilter] = useState("All");

  // Function to toggle attendance status
  const toggleAttendance = (id) => {
    setStudents(students.map(student => 
      student.id === id 
        ? { ...student, present: !student.present }
        : student
    ));
  };

  // Filter students based on selected filter
  const filteredStudents = students.filter(student => {
    if (filter === "Present") return student.present;
    if (filter === "Absent") return !student.present;
    return true; // "All" filter
  });

  // Calculate total present students
  const totalPresent = students.filter(student => student.present).length;

  return (
    <div className="App">
      <div className="attendance-container">
        <h1>Attendance Manager</h1>
        
        {/* Filter dropdown */}
        <div className="filter-section">
          <label htmlFor="filter">Filter by: </label>
          <select 
            id="filter"
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="filter-dropdown"
          >
            <option value="All">All</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>

        {/* Total present count */}
        <div className="total-section">
          <h3>Total Present: {totalPresent} / {students.length}</h3>
        </div>

        {/* Students list */}
        <div className="students-section">
          {filteredStudents.length === 0 ? (
            <p className="empty-message">No students found.</p>
          ) : (
            <ul className="students-list">
              {filteredStudents.map((student) => (
                <li 
                  key={student.id} 
                  className={`student-item ${student.present ? 'present' : 'absent'}`}
                >
                  <span className="student-name">{student.name}</span>
                  <span className="attendance-status">
                    {student.present ? 'Present' : 'Absent'}
                  </span>
                  <button 
                    onClick={() => toggleAttendance(student.id)} 
                    className="toggle-btn"
                  >
                    Toggle
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App; 