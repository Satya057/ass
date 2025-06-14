# Basic Express Server

A simple Express.js server with basic routing functionality.

## Setup Instructions

1. Make sure you have Node.js installed on your system
2. Clone this repository
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node server.js
   ```

## Available Routes

- `GET /home` - Returns HTML welcome message
- `GET /aboutus` - Returns JSON welcome message
- `GET /contactus` - Returns dummy contact details
- Any undefined route will return a 404 Not Found message

## Testing the Server

You can test the server using:
- Web browser: Visit `http://localhost:3000/[route]`
- Postman: Send GET requests to `http://localhost:3000/[route]`

## Expected Responses

1. Home Page (`/home`):
   - HTML response: "Welcome to Home Page"

2. About Us (`/aboutus`):
   - JSON response: `{ "message": "Welcome to About Us" }`

3. Contact Us (`/contactus`):
   - JSON response with contact details

4. Undefined Routes:
   - Text response: "404 Not Found" 