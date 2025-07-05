# Attendance Manager

A React-based Attendance Manager application that helps track student attendance using React hooks.

## Features

- **Student Management**: Manage a list of students with their attendance status
- **Attendance Tracking**: Toggle between Present and Absent for each student
- **Real-time Statistics**: View total number of present students
- **Filtering**: Filter students by All, Present, or Absent status
- **Visual Indicators**: Green styling for present students, red for absent students
- **Responsive Design**: Works on desktop and mobile devices

## Student Object Structure

Each student object contains:
```javascript
{
  id: number,
  name: string,
  present: boolean
}
```

## Requirements Met

✅ Initialize state with an array of at least 5 students  
✅ Display each student's name and attendance status  
✅ Add "Toggle" button for each student to change attendance  
✅ Show total number of present students  
✅ Filter dropdown to view "All", "Present", or "Absent" students  
✅ Style present students with green and absent students with red  

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Technologies Used

- React 18.2.0
- React Hooks (useState)
- CSS3 with modern styling
- Responsive design principles

## Project Structure

```
src/
├── App.js          # Main component with attendance logic
├── App.css         # Styling for the attendance manager
├── index.js        # React app entry point
└── index.css       # Global styles
```

## Usage

1. **View Students**: All students are displayed with their current attendance status
2. **Toggle Attendance**: Click the "Toggle" button next to any student to change their status
3. **Filter Students**: Use the dropdown to filter by All, Present, or Absent students
4. **Monitor Statistics**: The total present count updates automatically

## Screenshots

The app features a clean, modern interface with:
- Gradient background
- Card-based layout
- Color-coded attendance status
- Smooth animations and hover effects
- Mobile-responsive design

## Contributing

This project was created as an assignment for learning React useState hooks and state management. 