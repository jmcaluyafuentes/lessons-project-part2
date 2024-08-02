const arrayOfObjects = [
    { name: 'John', age: 35 },
    { name: 'Mark', age: 34 },
    { name: 'Camille', age: 36 }
] 

function sortObjects(arr) {
    const ageSorted = [...arr].sort((a, b) => a.age - b.age)
    const nameSorted = arr.sort((a, b) => a.name.localeCompare(b.name))
    return [ageSorted, nameSorted];
}

console.log('Original array after sorting: ', arrayOfObjects)
console.log('Sorted array: ', sortObjects(arrayOfObjects));
console.log('Original array after sorting: ', arrayOfObjects)