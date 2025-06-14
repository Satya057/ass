const express = require('express');
const app = express();
const PORT = 3000;

// Dummy user data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  { id: 3, name: 'Bob Smith', email: 'bob@example.com' }
];

// GET /users/get - single user
app.get('/users/get', (req, res) => {
  res.status(200).json(users[0]);
});

// GET /users/list - list of users
app.get('/users/list', (req, res) => {
  res.status(200).json(users);
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: '404 Not Found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 