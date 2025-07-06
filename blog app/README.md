# Blog App

A simple and modern blog application built with React, featuring routing, navigation, and dynamic content fetching.

## Features

- **Homepage**: Displays a list of blog posts fetched from the DummyJSON API
- **Search Functionality**: Real-time filtering of posts by title (case-insensitive)
- **Individual Post Pages**: Detailed view of each blog post with full content
- **Navigation**: Responsive navbar with links to Home and About pages
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, modern design with smooth animations and transitions
- **Error Handling**: Graceful error handling and loading states

## Pages

1. **Home (`/`)**: 
   - Displays a grid of blog posts
   - Search input to filter posts by title
   - Click on any post card to view full details

2. **Post Details (`/post/:id`)**:
   - Shows the complete content of a selected post
   - Displays post tags
   - Back button to return to homepage

3. **About (`/about`)**:
   - Static page with project information
   - Technology stack details
   - Feature overview

## Technology Stack

- **React 18**: Frontend framework
- **React Router DOM**: For navigation and routing
- **CSS3**: Modern styling with responsive design
- **Fetch API**: For data retrieval
- **DummyJSON API**: External data source for blog posts

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd blog-app
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

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (not recommended)

## Project Structure

```
blog-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Navbar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── PostDetails.js
│   │   └── About.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## API Integration

The app fetches blog posts from the [DummyJSON API](https://dummyjson.com/posts):
- **All Posts**: `GET https://dummyjson.com/posts`
- **Single Post**: `GET https://dummyjson.com/posts/{id}`

Each post contains:
- `id`: Unique identifier
- `title`: Post title
- `body`: Post content
- `tags`: Array of tags
- `userId`: Author ID

## Features in Detail

### Search Functionality
- Real-time filtering as you type
- Case-insensitive search
- Searches through post titles only
- Shows "No posts found" message when no matches

### Responsive Design
- Mobile-first approach
- Grid layout that adapts to screen size
- Touch-friendly navigation
- Optimized for all device types

### Error Handling
- Network error handling
- Loading states for better UX
- Graceful fallbacks for missing data
- User-friendly error messages

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created as part of a learning project to master React fundamentals including:
- Component architecture
- State management
- Routing and navigation
- API integration
- Modern CSS practices 