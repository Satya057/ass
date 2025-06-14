# Booking Storage API

A simple Express.js API for managing a collection of books using a JSON file as a database.

## Features

- CRUD operations for books
- Search books by author (with partial matching)
- Search books by title (with partial matching)
- Error handling for undefined routes
- JSON file-based storage

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   For development with auto-reload:
   ```bash
   npm run dev
   ```

The server will start on http://localhost:3000

## API Endpoints

### Books

- `POST /books` - Add a new book
- `GET /books` - Get all books
- `GET /books/:id` - Get a book by ID
- `PUT /books/:id` - Update a book by ID
- `DELETE /books/:id` - Delete a book by ID

### Search

- `GET /books/search?author=<author_name>` - Search books by author
- `GET /books/search?title=<title>` - Search books by title

## Example Usage

### Adding a new book
```bash
POST /books
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "year": 1988
}
```

### Searching books by author
```bash
GET /books/search?author=paulo
```

### Searching books by title
```bash
GET /books/search?title=alchemist
```

## Error Handling

- 404 Not Found for undefined routes
- 400 Bad Request for invalid search parameters
- 500 Internal Server Error for server issues 