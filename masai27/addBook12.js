const library = {
    books: [
      { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
    ],
  
    addBook(book) {
      // Enhanced validation for all fields
      if (
        typeof book !== "object" ||
        !book.title?.trim() ||
        !book.author?.trim() ||
        typeof book.year !== "number"
      ) {
        console.log("Book information is incomplete or invalid.");
        return;
      }
  
      this.books.push(book);
      console.log(`"${book.title}" added successfully.`);
    },
  
    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    },
  
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
      if (index !== -1) {
        const removed = this.books.splice(index, 1);
        console.log(`"${removed[0].title}" removed from library.`);
      } else {
        console.log("Book not found.");
      }
    }
  };
  
  // Test case with missing title (will now be blocked)
  library.addBook({ author: "George Orwell", year: 1949 }); // Shows error message
  
  // Valid book addition
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
  
  console.log("Total books:", library.books.length);
  console.log("Library books:", library.books);
  