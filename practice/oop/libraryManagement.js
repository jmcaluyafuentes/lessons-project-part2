class LibraryItem {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isBorrowed = this.isBorrowed;
    }

    borrow() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`${this.title} has been borrowed.`)
        } else {
            console.log(`${this.title} is not available.`)
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
        return `${this.title} with author ${this.author} is ${this.isBorrowed ? 'not available.': 'available.'}`
    }
}

class Book extends LibraryItem {
    constructor (title, author, isbn = 'no info') {
        super(title, author);
        this.isbn = isbn;
    }

    getDetails() {
        return `${super.getDetails()}, ISBN: ${this.isbn}`
    }
}

class DVD extends LibraryItem {
    constructor (title, author, duration = 'No info') {
        super(title, author);
        this.duration = duration;
    }

    getDetails() {
        return `${super.getDetails()}, duration: ${this.duration}`
    }
}

class Library {
    constructor () {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        console.log(`${item.title} is added to the library.`)
    }

    borrowItem(title) {
        // Query if item with given title is in the list of items
        const item = this.items.find(item => item.title === title);
        if (item) {
            item.borrow(); 
        } else {
            console.log(`${title} not found.`)
        }
    }

    returnItem(title) {
        const item = this.items.find(item => item.title === title);
        if (item) {
            item.return();
        } else {
            console.log(`${item.title} not found.`)
        }
    }

    listAvailableItems() {
        console.log('Available items:')
        this.items
            .filter(item => !item.isBorrowed)
            .forEach(item => console.log(item.getDetails()))
    }
}

const harryPotter = new Book('Harry Potter', 'John');
// harryPotter.borrow();
// console.log(harryPotter.getDetails());
// harryPotter.return();
// console.log(harryPotter.getDetails());

const library = new Library();
library.addItem(harryPotter);
library.borrowItem('Harry Potter');
library.returnItem('Harry Potter');
library.listAvailableItems();

const magazine = new LibraryItem('Reader\'s Digest', 'Mark');
library.addItem(magazine)
library.listAvailableItems();
console.log(magazine.getDetails());
magazine.borrow();
console.log(magazine.getDetails());