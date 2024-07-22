// const x = 2
// // const y = 5
// const y = 'fafsaf'

function adder(a, b){
    return a + b
}

function adderPromise(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x === 'number' && typeof y === 'number') {
            const answer = adder(x, y)
            resolve(answer)
        } else {
            reject('x and y must be numbers')
        }
    })
}

// // console.log(calc)
// adderPromise(10, 20)
//     // .then(value => console.log(value)) // When the promise is resoleved, 'then' keyword is used to execute a callback function
//     .then(value => {
//         adderPromise(value, 'asd')
//             .then(value => console.log(value))
//             .catch(err => console.log(err))
//     })
//     .catch(err => console.error(err)) // 'catch' is a method of promises that invokes a callback function if the promise is rejected

// We can chain the resolve promise
adderPromise(10, 20)
    .then(value => adderPromise(value, 5))
    .then(value => console.log(value))
    .catch(err => console.error(err)) // 'catch' is a method of promises that invokes a callback function if the promise is rejected

console.log('This happens without waiting for the promise or the then callback')

