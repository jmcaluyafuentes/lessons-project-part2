const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

function mergeSortedArrays(arr1, arr2) {
    // const arrMerged = [...arr1, ...arr2]
    const arrMerged = arr1.concat(arr2)
    arrMerged.sort()
    return arrMerged
}

console.log(mergeSortedArrays(arr1, arr2))
