"use strict";
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}`);
}
greet('John', new Date());
function add(a, b) {
    return a + b;
}
const answer = add(5, 24);
function makeList(arr) {
    return arr.map((el, index) => `${index + 1}. ${el}`);
}
console.log(makeList(['John', 'Mark', 'Jean', 'Camille']));
function foo(store) {
}
function printPoint(point) {
    let out = `x: ${point.x}, y: ${point.y}`;
    if (point.z)
        out += `, z: ${point.z}`;
    console.log(out);
}
const foo1 = { x: 3, y: 7 };
const bar = { x: -5, y: 25, z: 2 };
printPoint(foo1);
printPoint(bar);
console.log(0x2A);
console.log(0b1010101);
var Sizes;
(function (Sizes) {
    Sizes[Sizes["XS"] = 0] = "XS";
    Sizes[Sizes["S"] = 1] = "S";
    Sizes[Sizes["M"] = 2] = "M";
    Sizes[Sizes["L"] = 3] = "L";
    Sizes[Sizes["XL"] = 4] = "XL";
})(Sizes || (Sizes = {}));
const item = { color: 'White', size: Sizes.M };
let ted = {
    name: 'Ted',
    age: 15,
};
class Animal1 {
    constructor(name, age) {
        this.name = '';
        this.age = 1;
        this.name = name;
        this.age = age;
    }
}
class Dog extends Animal1 {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = '';
        this.breed = breed;
    }
    greet() { console.log('Woof!'); }
}
let jack = new Dog('Jack', 5, 'Labrador');
jack.greet();
