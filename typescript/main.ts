// console.log('Hello World!') // output: Hello World! --> js is subset of ts
// // console.log(name)

// let x = 5
// // const name = 'John'
// const firstName = 'Mark'

// firstName1()

// const user = {
//     name: 'John',
//     age: 51
// }

// console.log(user.location)

// ----------------------------------
function greet(person: string, date: Date): void { // void means it does not return anything
    console.log(`Hello ${person}, today is ${date}`)
    // return 42; --> this is an error because the return type is void
}

// greet("John")
greet('John', new Date())

// ----------------------------------
function add(a: number, b: number): number { // best practice to explicitly indicate the retuurn type
    return a + b;
}

// console.log(add(5, 24))

const answer = add(5, 24)

// ----------------------------------
function makeList(arr: string[] | number[]): string[] { // string[] means an array of elements with string type
    return arr.map((el: string | number, index: number) => `${index+1}. ${el}`)
}

// console.log(makeList([12, 45, 'Jim', 3.141659])) --> using any[] type in the fucntion parameter is acceptable. any[] means an array of elements with any type
console.log(makeList(['John', 'Mark', 'Jean', 'Camille']))

// ----------------------------------
function foo(store: {categories: string[]}) {

}

// ----------------------------------

// A class in ts is first class data structure
// class Point {
//     x: number = 0
//     y: number = 0
//     z?: number = 0 // z? means optional
// }

type Point = { // Since we do not use an instance of a class, we only need its datatype
    x: number
    y: number
    z?: number
}

// function printPoint(point: {x: number, y: number}) { // {x: number, y: number} is the shape of the object, it has 2 attributes
    function printPoint(point: Point): void { // Abstracted the object shape to class
    // console.log(`x: ${point.x}, y: ${point.y}`)
    let out: string = `x: ${point.x}, y: ${point.y}`
    if (point.z) out += `, z: ${point.z}`
    console.log(out)
}

// printPoint({x: 3, y: 7, z: 10}) // {x: 3, y: 7, z: 10} is the shape of the object, it has 3 attributes

// const foo: {x: number, y: number} = {x: 3, y: 7, z: 10}
// const foo1: Point = {x: 3, y: 7, z: 10}
const foo1: Point = {x: 3, y: 7}
const bar: Point = {x: -5, y: 25, z: 2}

printPoint(foo1)
printPoint(bar)

// ----------------------------------

console.log(0x2A) // specify in hex. output: 42 (decimal)
console.log(0b1010101) // specify in binary. output: 85 (decimal)

// ----------------------------------

// const tshirtSizes = ['XS', 'S', 'M', 'L', 'XL']

enum Sizes { // enum is a data type
    XS, S, M, L, XL
}

type TShirt = {
    color: string
    // size: string
    size: Sizes
}

// const item: TShirt = {color: 'White', size: 'M'}
const item: TShirt = {color: 'White', size: Sizes.M}

// ----------------------------------

type Animal = {
    name: string
    age: number
}

let ted: Animal = {
    name: 'Ted',
    age: 15,
}

// type Dog = {
//     breed: string
// }

// let jack: Animal & Dog = {
//     name: 'Jack',
//     age: 5,
//     breed: 'Labrador'
// }

// type Dog = Animal & {
//     breed: string
//     // greet(): void { console.log('Woof!') }
// }

// let jack: Dog = {
//     name: 'Jack',
//     age: 5,
//     breed: 'Labrador'
// }

abstract class Animal1 { // abstract keyword means the Animal class cannot be instantiated. Opposite of abstract is concrete
    name: string = ''
    age: number = 1

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    abstract greet(): void // abstract method means no body but has signature (name, parameters, return nothing). This will enforce the child class to implement greet method.
}

class Dog extends Animal1 {
    breed: string = ''
    constructor(name: string, age: number, breed: string){
        super(name, age)
        this.breed = breed
    }
    greet(): void { console.log('Woof!') }
}

let jack: Dog = new Dog('Jack', 5, 'Labrador')
jack.greet()

// let magpie: Animal = new Animal1('Jack', 5)
// magpie.greet()
