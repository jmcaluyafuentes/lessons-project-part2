const arr1 = [1, 3, 5];
const arr2 = [2, 6, 10];

// Solution 1: 
// Time Complexity O(k * log(k)) => O((m+n) * log(m+n))
// Space Complexity O(m + n)
// function combineArrays(arr1, arr2) {

//     const newArr = [...arr1, ...arr2];

//    // const arrMerged = arr1.concat(arr2) <-- Another method to concatenate arrays

//     // return newArr.sort(); // Log: [ 1, 10, 2, 3, 5, 6 ]
//         // --> sort() by default i twill sort the elements by strings. For example [1, 2, 10] is sorted as [1, 10, 2]
//     return newArr.sort((a, b) => a - b) // [ 1, 2, 3, 5, 6, 10 ]
// }

// Solution 2

function combineArrays(arr1, arr2) {
    const newArray = [];
    let i = 0; // index pointer for arr1
    let j = 0; // index pointer for arr2

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArray.push(arr1[i]);
            i++;
        } else {
            newArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        newArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        newArray.push(arr2[j])
        j++;
    }
    return newArray;
}

console.log(combineArrays(arr1, arr2));