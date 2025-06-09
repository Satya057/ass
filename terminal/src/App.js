import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, TextField, Paper } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(['Welcome to Terminal Task Manager!', 'Type "help" for available commands.']);
  const inputRef = useRef(null);

  useEffect(() => {
    // Load tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to localStorage whenever they change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const displayError = (message) => {
    setOutput(prev => [...prev, `Error: ${message}`]);
  };

  const displaySuccess = (message) => {
    setOutput(prev => [...prev, `Success: ${message}`]);
  };

  const findTaskByIdOrTitle = (identifier) => {
    return tasks.find(task => task.id === identifier || task.title.toLowerCase() === identifier.toLowerCase());
  };

  const handleCommand = (command) => {
    const args = command.trim().split(' ');
    const cmd = args[0].toLowerCase();

    switch (cmd) {
      case 'help':
        setOutput(prev => [...prev, 
          'Available commands:',
          'add-task <title> <due-date> - Add a new task',
          'list-tasks - Show all tasks',
          'update-task <id/title> <new-title/new-date> - Update task title or due date',
          'delete-task <id/title> - Delete a task',
          'search-tasks <title/date> - Search tasks by title or date',
          'complete-task <id/title> - Mark a task as completed',
          'help - Show this help message',
          'clear - Clear the terminal'
        ]);
        break;

      case 'add-task':
        if (args.length < 3) {
          displayError('Please provide task title and due date');
          return;
        }
        const title = args.slice(1, -1).join(' ');
        const dueDate = args[args.length - 1];
        const newTask = {
          id: uuidv4(),
          title,
          dueDate,
          status: 'pending'
        };
        setTasks(prev => [...prev, newTask]);
        displaySuccess(`Task added: ${title} (Due: ${dueDate})`);
        break;

      case 'list-tasks':
        if (tasks.length === 0) {
          setOutput(prev => [...prev, 'No tasks found.']);
        } else {
          const taskList = tasks.map(task => 
            `[${task.id}] ${task.title} - Due: ${task.dueDate} - Status: ${task.status}`
          );
          setOutput(prev => [...prev, ...taskList]);
        }
        break;

      case 'update-task':
        if (args.length < 3) {
          displayError('Please provide task identifier (ID/title) and new value');
          return;
        }
        const taskIdentifier = args[1];
        const newValue = args.slice(2).join(' ');
        const taskToUpdate = findTaskByIdOrTitle(taskIdentifier);
        
        if (!taskToUpdate) {
          displayError('Task not found');
          return;
        }

        setTasks(prev => prev.map(task => {
          if (task.id === taskToUpdate.id) {
            // Check if the new value is a date (simple validation)
            const isDate = /^\d{4}-\d{2}-\d{2}$/.test(newValue);
            return {
              ...task,
              title: isDate ? task.title : newValue,
              dueDate: isDate ? newValue : task.dueDate
            };
          }
          return task;
        }));
        displaySuccess(`Task updated successfully`);
        break;

      case 'delete-task':
        if (args.length < 2) {
          displayError('Please provide task ID or title');
          return;
        }
        const taskToDelete = findTaskByIdOrTitle(args[1]);
        
        if (!taskToDelete) {
          displayError('Task not found');
          return;
        }

        setTasks(prev => prev.filter(task => task.id !== taskToDelete.id));
        displaySuccess(`Task "${taskToDelete.title}" deleted successfully`);
        break;

      case 'search-tasks':
        if (args.length < 2) {
          displayError('Please provide search term (title or date)');
          return;
        }
        const searchTerm = args.slice(1).join(' ').toLowerCase();
        const matchingTasks = tasks.filter(task => 
          task.title.toLowerCase().includes(searchTerm) || 
          task.dueDate.includes(searchTerm)
        );

        if (matchingTasks.length === 0) {
          setOutput(prev => [...prev, 'No matching tasks found.']);
        } else {
          const taskList = matchingTasks.map(task => 
            `[${task.id}] ${task.title} - Due: ${task.dueDate} - Status: ${task.status}`
          );
          setOutput(prev => [...prev, 'Matching tasks:', ...taskList]);
        }
        break;

      case 'complete-task':
        if (args.length < 2) {
          displayError('Please provide task ID or title');
          return;
        }
        const taskToComplete = findTaskByIdOrTitle(args[1]);
        
        if (!taskToComplete) {
          displayError('Task not found');
          return;
        }

        setTasks(prev => prev.map(task => 
          task.id === taskToComplete.id ? { ...task, status: 'completed' } : task
        ));
        displaySuccess(`Task "${taskToComplete.title}" marked as completed`);
        break;

      case 'clear':
        setOutput([]);
        break;

      default:
        displayError(`Unknown command: ${cmd}. Type "help" for available commands.`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setOutput(prev => [...prev, `> ${input}`]);
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        bgcolor: '#1e1e1e',
        color: '#fff',
        p: 2,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Paper
        elevation={3}
        sx={{
          flex: 1,
          bgcolor: '#2d2d2d',
          p: 2,
          overflow: 'auto',
          fontFamily: 'monospace'
        }}
      >
        {output.map((line, index) => (
          <Typography key={index} sx={{ mb: 1, whiteSpace: 'pre-wrap' }}>
            {line}
          </Typography>
        ))}
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ mr: 1 }}>{'>'}</Typography>
            <TextField
              inputRef={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              fullWidth
              variant="standard"
              sx={{
                '& .MuiInputBase-input': {
                  color: '#fff',
                  fontFamily: 'monospace'
                },
                '& .MuiInput-underline:before': {
                  borderBottomColor: '#666'
                }
              }}
              autoFocus
            />
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default App; 