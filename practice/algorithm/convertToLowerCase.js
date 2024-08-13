function convertToLowerCase(str) {
    let arr = str.split(" ")
    let lowercaseStr = arr.map((a) => a[0].toLowerCase() + a.slice(1))
    let newStr = lowercaseStr.join("-")
    console.log(newStr)
}

convertToLowerCase('R8 Explain how to use this applications API endpoints Each endpoint should be explained including the following data for each endpoint')