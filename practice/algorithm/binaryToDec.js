const binary1 = '11';
const binary2 = '12';

function binaryToDecimal(binary){

    // Input must only contain 0 or 1
    for (let place of binary) {
        if (place != 1 && place != 0) {
            return [false, binary];
        }
    }

    let decimal = 0;
    let factor = 1;

    for (let i = binary.length - 1; i >= 0; i--){ // 'in' is for the index
        console.log(`Factor: ${factor}`)
        decimal += factor * binary[i];
        console.log(`Place: ${binary[i]}`)
        factor *= 2;
    }
    return [true, decimal];
}

let [result1, number1] = binaryToDecimal(binary1)
console.log(result1 === true ? `Result: ${number1}` : `'${number1}' is not a binary number.`);

let [result2, number2] = binaryToDecimal(binary2)
console.log(result2 === true ? `Result: ${number2}` : `'${number2}' is not a binary number.`);

