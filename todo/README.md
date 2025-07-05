# Todo List App

A simple and beautiful Todo List application built with React and useState hook.

## Features

- ✅ Initialize with sample tasks ("Buy milk", "Study React")
- ✅ Display list of tasks with beautiful styling
- ✅ Add new tasks with input validation
- ✅ Clear all tasks functionality
- ✅ Responsive design for mobile and desktop
- ✅ Modern UI with smooth animations
- ✅ Empty state message when no tasks available

## Requirements Met

- [x] Initialize state with an array of sample tasks
- [x] Display the list of tasks
- [x] Add input field and button to add new tasks
- [x] Add "Clear All" button to reset the list
- [x] Validate input to avoid adding empty tasks
- [x] Display message when list is empty

## Technologies Used

- React 18.2.0
- useState Hook
- CSS3 with modern styling
- Responsive design

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- **Add Task**: Type a task in the input field and click "Add Task" or press Enter
- **Clear All**: Click the "Clear All" button to remove all tasks
- **Input Validation**: Empty tasks are automatically prevented from being added

## Project Structure

```
todo-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main component with todo logic
│   ├── App.css         # Styling for the app
│   ├── index.js        # Entry point
│   └── index.css       # Global styles
├── package.json
└── README.md
```

## Key Features Implementation

### State Management
- Uses `useState` hook to manage tasks array and input field
- Initial state includes sample tasks: `["Buy milk", "Study React"]`

### Input Validation
- Prevents adding empty or whitespace-only tasks
- Uses `trim()` method to remove leading/trailing spaces

### User Experience
- Enter key support for adding tasks
- Smooth animations and hover effects
- Responsive design for all screen sizes
- Clear visual feedback for user interactions

## Deployment

To build the app for production:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE). 