const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Home route
app.get('/home', (req, res) => {
    res.send('<h1>Welcome to Home Page</h1>');
});

// About Us route
app.get('/aboutus', (req, res) => {
    res.json({
        message: "Welcome to About Us"
    });
});

// Contact Us route
app.get('/contactus', (req, res) => {
    const contactDetails = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 234 567 8900",
        address: "123 Main Street, City, Country"
    };
    res.json(contactDetails);
});

// 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 