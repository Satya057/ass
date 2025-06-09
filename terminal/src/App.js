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

  const handleCommand = (command) => {
    const args = command.trim().split(' ');
    const cmd = args[0].toLowerCase();

    switch (cmd) {
      case 'help':
        setOutput(prev => [...prev, 
          'Available commands:',
          'add-task <title> <due-date> - Add a new task',
          'list-tasks - Show all tasks',
          'complete-task <id> - Mark a task as completed',
          'help - Show this help message',
          'clear - Clear the terminal'
        ]);
        break;

      case 'add-task':
        if (args.length < 3) {
          setOutput(prev => [...prev, 'Error: Please provide task title and due date']);
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
        setOutput(prev => [...prev, `Task added: ${title} (Due: ${dueDate})`]);
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

      case 'complete-task':
        if (args.length < 2) {
          setOutput(prev => [...prev, 'Error: Please provide task ID']);
          return;
        }
        const taskId = args[1];
        setTasks(prev => prev.map(task => 
          task.id === taskId ? { ...task, status: 'completed' } : task
        ));
        setOutput(prev => [...prev, `Task ${taskId} marked as completed`]);
        break;

      case 'clear':
        setOutput([]);
        break;

      default:
        setOutput(prev => [...prev, `Unknown command: ${cmd}. Type "help" for available commands.`]);
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