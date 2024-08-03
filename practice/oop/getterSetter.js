class Person {
    constructor (name, age) {
        this.__name = name;
        this.__age = age;
    }

    // Getter for the 'name' property
    get name() {
        return this.__name;
    }

    // Setter for the 'name' property
    set name(value) {
        if (typeof value === 'string' && value.length > 0) {
            this.__name = value;
        } else {
            console.error('Invalid name')
        }
    }

    // Getter for the 'age' property
    get age() {
        return this.__age;
    }

    // Setter for the 'age' Value
    set age(value) {
        if (Number.isInteger(value) && value >= 0) {
            this.__age = value;
        } else {
            console.error('Invalid age')
        }
    }
}

// Usage
const person = new Person('Alice', 30);

console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 30

person.name = 'Bob';      // Valid update
console.log(person.name); // Output: Bob

person.age = 35;         // Valid update
console.log(person.age); // Output: 35

person.name = '';        // Invalid update, will show an error
console.log(person.name); // Output remains Bob

person.age = -5;         // Invalid update, will show an error
console.log(person.age); // Output remains 35