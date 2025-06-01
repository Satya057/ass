const library = {
    books: [
        { 
            title: "The Hobbit", 
            author: "J.R.R. Tolkien", 
            year: 1937 
        }
    ],

    // Improved addBook method with better validation
    addBook(book) {
        // Check if book is an object
        if (typeof book !== 'object' || book === null) {
            console.log("Invalid book data: Must be an object");
            return false;
        }

        // Validate required fields
        const requiredFields = ['title', 'author', 'year'];
        const missingFields = requiredFields.filter(field => !book[field]);
        
        if (missingFields.length > 0) {
            console.log(`Book information is incomplete. Missing fields: ${missingFields.join(', ')}`);
            return false;
        }

        // Validate year is a number and reasonable
        if (typeof book.year !== 'number' || book.year < 1000 || book.year > new Date().getFullYear()) {
            console.log("Invalid year: Must be a number between 1000 and current year");
            return false;
        }

        // Check for duplicate books
        if (this.findBookByTitle(book.title)) {
            console.log(`Book "${book.title}" already exists in the library`);
            return false;
        }

        this.books.push(book);
        console.log(`Book "${book.title}" added successfully`);
        return true;
    },

    // Improved findBookByTitle method with case-insensitive search
    findBookByTitle(title) {
        if (!title || typeof title !== 'string') {
            console.log("Invalid title: Must be a non-empty string");
            return null;
        }
        return this.books.find(book => 
            book.title.toLowerCase() === title.toLowerCase()
        );
    },

    // Improved removeBook method with better feedback
    removeBook(title) {
        if (!title || typeof title !== 'string') {
            console.log("Invalid title: Must be a non-empty string");
            return false;
        }

        const index = this.books.findIndex(book => 
            book.title.toLowerCase() === title.toLowerCase()
        );

        if (index === -1) {
            console.log(`Book "${title}" not found in the library`);
            return false;
        }

        const removedBook = this.books.splice(index, 1)[0];
        console.log(`Book "${removedBook.title}" removed successfully`);
        return true;
    },

    // New method to display all books
    displayAllBooks() {
        if (this.books.length === 0) {
            console.log("The library is empty");
            return;
        }
        console.log("\nLibrary Collection:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.year})`);
        });
    }
};

// Test the improved library system
console.log("Testing Library System:\n");

// Try to add a book with missing title
library.addBook({ author: "George Orwell", year: 1949 });
console.log("Current number of books:", library.books.length);

// Add a valid book
library.addBook({ 
    title: "1984", 
    author: "George Orwell", 
    year: 1949 
});

// Try to add the same book again
library.addBook({ 
    title: "1984", 
    author: "George Orwell", 
    year: 1949 
});

// Display all books
library.displayAllBooks();

// Try to find a non-existent book
library.findBookByTitle("Non-existent Book");

// Remove a book
library.removeBook("The Hobbit");

// Display final state
library.displayAllBooks(); 