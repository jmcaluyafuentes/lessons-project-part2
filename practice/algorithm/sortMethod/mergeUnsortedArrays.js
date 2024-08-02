arr1 = [1, 3, 5, 7]
arr2 = [2, 4, 6, 0]

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    const sortedArray = [];
    // Compare current element to the rest of elements
    // If current element is less than the rest of elements, push it to the new array
    for (let i=0; i < mergedArray.length; i++) {
        for (let j=0; mergedArray.length - i; j++) {
            let smallestValue = null;
            if (mergedArray[i] > mergedArray[j]) {
                continue;
            } else {
                smallestValue = mergedArray[i];
            }
        }
        sortedArray.push(mergedArray[i]);
    }
    return sortedArray;
}

console.log(mergeSortedArrays(arr1, arr2))