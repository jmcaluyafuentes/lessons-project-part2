class LibraryItem {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
    }

    borrow() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`${this.title} has been borrowed.`)
        } else {
            console.log(`${this.title} is already borrowed.`);
        }
    }

    return() {
        if (this.isBorrowed) {
            this.isBorrowed = false;
            console.log(`${this.title} has been returned.`)
        } else {
            console.log(`${this.title} was not borrowed.`)
        }
    }

    getDetails() {
        return `${this.title} by ${this.author} is ${this.isBorrowed ? 'currently borrowed': 'available for borrow.'}`
    }
}

class Book extends LibraryItem {
    constructor (title, author, isbn) {
        super(title, author);
        this.isbn = isbn;
    }

    getDetails() {
        return `${super.getDetails()} ISBN: ${this.isbn}`;
    }
}

class DVD extends LibraryItem {
    constructor (title, author, duration) {
        super(title, author);
        this.duration = duration;
    }

    getDetails() {
        return `${super.getDetails()} Duration: ${this.duration} minutes`
    }
}

class Library {
    constructor () {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        console.log(`${item.title} added to the library.`);
    }

    borrowItem(title) {
        const item = this.items.find(item => item.title === title)
        if (item) {
            item.borrow();
        } else {
            console.log(`Item with title ${title} not found.`)
        }
    }

    returnItem(title) {
        const item = this.items.find(item => item.title === title);
        if (item) {
            item.return();
        } else {
            console.log(`Item with title ${title} not found.`)
        }
    }

    listAvailableItems() {
        console.log('Available items:');
        this.items
            .filter(item => !item.isBorrowed)
            .forEach(item => console.log(item.getDetails()));
    }
}

// Usage
const library = new Library();

const book1 = new Book('1984', 'George Orwell', '1234567890');
const dvd1 = new DVD('The Matrix', 'Wachowskis', 136);

library.addItem(book1);
library.addItem(dvd1);

library.listAvailableItems();

library.borrowItem('1984');
library.returnItem('1984');

library.listAvailableItems();