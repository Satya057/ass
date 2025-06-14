const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Helper function to read and write to db.json
const readBooks = () => {
    const data = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8');
    return JSON.parse(data).books;
};

const writeBooks = (books) => {
    fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify({ books }, null, 2));
};

// POST /books - Add a new book
app.post('/books', (req, res) => {
    try {
        const books = readBooks();
        const newBook = {
            id: books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1,
            ...req.body
        };
        books.push(newBook);
        writeBooks(books);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET /books - Get all books
app.get('/books', (req, res) => {
    try {
        const books = readBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET /books/:id - Get book by ID
app.get('/books/:id', (req, res) => {
    try {
        const books = readBooks();
        const book = books.find(b => b.id === parseInt(req.params.id));
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT /books/:id - Update book by ID
app.put('/books/:id', (req, res) => {
    try {
        const books = readBooks();
        const index = books.findIndex(b => b.id === parseInt(req.params.id));
        if (index === -1) {
            return res.status(404).json({ error: 'Book not found' });
        }
        books[index] = { ...books[index], ...req.body, id: parseInt(req.params.id) };
        writeBooks(books);
        res.json(books[index]);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE /books/:id - Delete book by ID
app.delete('/books/:id', (req, res) => {
    try {
        const books = readBooks();
        const filteredBooks = books.filter(b => b.id !== parseInt(req.params.id));
        if (filteredBooks.length === books.length) {
            return res.status(404).json({ error: 'Book not found' });
        }
        writeBooks(filteredBooks);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET /books/search - Search books by author or title
app.get('/books/search', (req, res) => {
    try {
        const books = readBooks();
        const { author, title } = req.query;
        
        if (!author && !title) {
            return res.status(400).json({ error: 'Please provide either author or title parameter' });
        }

        let filteredBooks = books;
        
        if (author) {
            filteredBooks = filteredBooks.filter(book => 
                book.author.toLowerCase().includes(author.toLowerCase())
            );
        }
        
        if (title) {
            filteredBooks = filteredBooks.filter(book => 
                book.title.toLowerCase().includes(title.toLowerCase())
            );
        }

        if (filteredBooks.length === 0) {
            return res.json({ message: 'No books found' });
        }

        res.json(filteredBooks);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Handle undefined routes
app.use((req, res) => {
    res.status(404).json({ error: '404 Not Found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 