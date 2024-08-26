class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isCheckedOut = false;
    }

    checkOut() {
        if (!this.isCheckedOut) {
            this.isCheckedOut = true;
            return true;
        }
        return false;
    }

    returnBook() {
        if (this.isCheckedOut) {
            this.isCheckedOut = false;
            return true;
        }
        return false;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    checkOutBook(title) {
        const book = this.books.find(b => b.title === title);
        return book ? book.checkOut() : false;
    }

    returnBook(title) {
        const book = this.books.find(b => b.title === title);
        return book ? book.returnBook() : false;
    }

    listAvailableBooks() {
        const availableBooks = this.books.filter(b => !b.isCheckedOut);
        console.log('Available Books:');
        availableBooks.forEach(book => console.log(`Title: ${book.title}, Author: ${book.author}`));
    }
}

const library = new Library();

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee');

library.addBook(book1);
library.addBook(book2);

library.listAvailableBooks(); // Output: Title: The Great Gatsby, Author: F. Scott Fitzgerald
                               //         Title: To Kill a Mockingbird, Author: Harper Lee

console.log(library.checkOutBook('The Great Gatsby')); // Output: true

// Try to check out the same book again
console.log(library.checkOutBook('The Great Gatsby')); // Output: false

console.log(library.returnBook('The Great Gatsby')); // Output: true

// List available books again
library.listAvailableBooks(); // Output: Title: The Great Gatsby, Author: F. Scott Fitzgerald
                               //         Title: To Kill a Mockingbird, Author: Harper Lee
