// Method 1: Using built-in array and string methods

const reverseString = (str) => {
    const reversed = str.split('').reverse().join('');
    return reversed
}

const originalStr = 'John';
const reversedStr = reverseString(originalStr);
console.log(reversedStr);

// Method 2: Using for loop to manually reverse the string

const originalString = 'John';
let reversedString = '';

for (let i = originalString.length - 1; i >= 0; i--) {
    let nextChar = originalString[i];
    reversedString += nextChar;
}

console.log(reversedString);