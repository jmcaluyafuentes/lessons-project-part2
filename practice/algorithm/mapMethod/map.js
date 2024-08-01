const numbers = [1, 2, 3, 4, 5]

numbers.push(6)

const squares = numbers.map((number)=> number ** 2 )

console.log(squares)

squares.shift()
squares.pop()
squares.unshift(0)

console.log(numbers)
console.log(squares)

const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 499 },
    { id: 3, name: 'Tablet', price: 299 }
];

const productNames = products.map(product => product.name)
console.log(productNames)