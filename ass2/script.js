/**
 * L0 - Fixing Array and Object Operations
 *
 * This script demonstrates a simple library management system.
 * The original code had issues with data validation and error handling.
 * This version includes fixes and improvements.
 */

const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  /**
   * Adds a book to the library after validating it.
   * @param {object} book - The book object to add, must contain title, author, and year.
   */
  addBook(book) {
    // Improved validation: Check for the book object and its properties' types and values.
    if (!book || typeof book.title !== 'string' || book.title.trim() === '' ||
        typeof book.author !== 'string' || book.author.trim() === '' ||
        typeof book.year !== 'number') {
      // Throw an error for better error handling, instead of just logging.
      throw new Error("Invalid book data. A book must have a non-empty title, author, and a numeric year.");
    }

    // Bonus: Check for duplicates to maintain data integrity.
    if (this.findBookByTitle(book.title)) {
      console.warn(`A book with the title "${book.title}" already exists.`);
      return;
    }

    this.books.push(book);
    console.log(`"${book.title}" was successfully added to the library.`);
  },

  /**
   * Finds a book in the library by its title.
   * @param {string} title - The title of the book to find.
   * @returns {object|undefined} The book object if found, otherwise undefined.
   */
  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  /**
   * Removes a book from the library by its title.
   * @param {string} title - The title of the book to remove.
   */
  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`"${title}" was successfully removed from the library.`);
    } else {
      // More informative message.
      console.log(`Book with title "${title}" not found. Could not remove.`);
    }
  }
};

// --- Script Operations ---

console.log("Initial library book count:", library.books.length);
console.log("Initial library books:", library.books);

console.log("\n//--- Attempting to add an incomplete book (as in the original problem) ---");
try {
  // Original problematic call with incomplete data.
  library.addBook({ author: "George Orwell", year: 1949 });
} catch (error) {
  // The improved addBook method will throw an error, which we catch here.
  console.error("Error:", error.message);
}
console.log("Book count after trying to add incomplete book:", library.books.length);


console.log("\n//--- Adding a new, valid book ---");
// This is the corrected call with all necessary information.
try {
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
} catch (error) {
  console.error("Error:", error.message);
}

// Log the final state of the library.
console.log("Book count after adding '1984':", library.books.length);
console.log("Current library books:", library.books);

console.log("\n//--- Attempting to add a duplicate book ---");
try {
  library.addBook({ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 });
} catch (error) {
    console.error("Error:", error.message);
}
console.log("Book count after trying to add a duplicate:", library.books.length);


console.log("\n//--- Removing a book ---");
library.removeBook("The Hobbit");
console.log("Final book count:", library.books.length);
console.log("Final library books:", library.books); 