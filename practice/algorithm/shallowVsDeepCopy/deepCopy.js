//Shallow copy

console.log('---- Shallow Copy ----\n')
const arr = [1, 'a', [2, 4], {name: 'John'}]

const newArr = [...arr]
newArr[2].push(6)

console.log('New array: ', newArr)
console.log('Original array: ', arr, '\n')

// Deep copy

console.log('---- Deep Copy ----\n')
const arrDeep = [1, 'a', [2, 4], {name: 'John'}]

const arrDeepCopy = JSON.parse(JSON.stringify(arrDeep))
arrDeepCopy[2].push(6)

console.log('New array: ', arrDeepCopy)
console.log('Original array: ', arrDeep)