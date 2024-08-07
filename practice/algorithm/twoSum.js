const num = [2, 4, 6, 7];
const target = 9;

function twoSum(num, target) {

    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === target) {
                return [i, j];
            }
        }
    }

    return 'No match found'
}  

console.log(twoSum(num, target));