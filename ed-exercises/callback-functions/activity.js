// shortToLong
// Used to sort objects by length (like arrays or strings) 
// Returns
// 	positive number if the length of val1 is bigger than val2
//  negative number if the length of val2 is bigger than val1
//  0 if the length of both objects is equal
function shortToLong(val1, val2) {
	const length1 = val1.length;
	const length2 = val2.length;
	return length1 - length2;
}

// caplitalise
// Returns value with the first character capitalised
function capitalise(value) {
	return value.charAt(0).toUpperCase() + value.slice(1)
}
// console.log(capitalise('john'))

// isNumber 
// Return true if value has a number data type
function isNumber(value) {
	if (typeof value === 'number') {
		return true;
	} else {
		return false;
	}
}

// Use your callback functions here

// getTheNumbers
//   Parameter: list
//      An array of different kinds of data (numbers, strings, etc)
//   Returns an array that only contains the numbers from list
// Use filter and isNumber to return all the numbers in list
function getTheNumbers(list) {
	return list.filter(item => isNumber(item));
}

// shortestToLongest
// Parameter: list
//		An array of strings or other arrays of varying lengths
// Returns the array with values sorted by length, shortest to longest
// Use sort and shortToLong to return the elements in list ordered by length
function shortestToLongest(list) {
	return list.sort((a,b) => shortToLong(a, b));
}

// capitaliseFirst
// Parameter: strings
//		An array of strings
// Returns the array with the first word of each string capitalised
// Use map and capitalise to return the strings with the first word of each string capitalised
function capitaliseFirst(strings) {
	return strings.map(word => capitalise(word))
}

// For testing with Run
console.log(capitaliseFirst("one day i will rule the world".split(" ")).join(" "))
console.log(capitaliseFirst(["this is the first.", "this is second.", "finally the last one."]))

console.log(shortestToLongest(["different sizes", "with a clever callback function!", "strings of", "can be put in order."]))

console.log(getTheNumbers([45,"3","cats",12,4,{key: "value"},29]))

module.exports = {
	getTheNumbers,
	shortestToLongest,
	capitaliseFirst
}
