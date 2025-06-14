# Simple Dishes API

A simple Express.js API for performing CRUD operations on a collection of dishes, using `db.json` as a database.

## Features
- Add, retrieve, update, and delete dishes
- Search for dishes by (partial) name
- Handles undefined routes with a 404 error

## Setup Instructions

1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd Simple-Dishes-API
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the server**
   ```sh
   node server.js
   ```
   The server will run on `http://localhost:3000` by default.

## API Endpoints

### Add a new dish
- **POST** `/dishes`
- **Body:** `{ "id": 1, "name": "Idly", "price": 50, "category": "Breakfast" }`

### Get all dishes
- **GET** `/dishes`

### Get a dish by ID
- **GET** `/dishes/:id`

### Update a dish by ID
- **PUT** `/dishes/:id`
- **Body:** `{ "name": "Dosa", "price": 60, "category": "Breakfast" }`

### Delete a dish by ID
- **DELETE** `/dishes/:id`

### Search for dishes by name (partial match supported)
- **GET** `/dishes/get?name=<dish_name>`

  - If found: returns an array of matching dishes
  - If not found: `{ "message": "No dishes found" }`

### Undefined routes
- Returns `{ "error": "404 Not Found" }`

## Testing
Use [Postman](https://www.postman.com/) or your browser to test the endpoints.

## License
ISC 