# Simple Express User Routes App

## Setup Instructions

1. **Clone the repository** (if not already in your local system):
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   node server.js
   ```

4. **Test the routes:**
   - Visit [http://localhost:3000/users/get](http://localhost:3000/users/get) to get a single user.
   - Visit [http://localhost:3000/users/list](http://localhost:3000/users/list) to get a list of users.
   - Visit any undefined route (e.g., [http://localhost:3000/unknown](http://localhost:3000/unknown)) to see the 404 error response.

## Example Responses

- **GET /users/get**
  ```json
  { "id": 1, "name": "John Doe", "email": "john@example.com" }
  ```

- **GET /users/list**
  ```json
  [
    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Doe", "email": "jane@example.com" },
    { "id": 3, "name": "Bob Smith", "email": "bob@example.com" }
  ]
  ```

- **Undefined Route**
  ```json
  { "error": "404 Not Found" }
  ``` 