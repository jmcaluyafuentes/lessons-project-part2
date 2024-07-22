// const adder = (x, y, callback) => {
//     setTimeout(() => {callback(x + y)}, 1000)
// }

// adder(5, 10, answer => console.log(`Answer: ${answer}`))

// console.log('Done')

// Real world example
// Example for ajax request from the server



// function getJoke(cb){
//     const req = new XMLHttpRequest() // req is short for request

//     // req.addEventListener('load', e => console.log(JSON.parse(e.target.response))) //e.target.response is a string json type
//     req.open('GET', 'https://icanhazdadjoke.com/')
//     req.setRequestHeader('Accept', 'application/json')
//     req.responseType = 'json'
//     req.addEventListener('load', e => cb(e.target.response.joke))
//     req.send()
// }

// getJoke(joke => console.log(joke))



// *** Applying the Promises

function getJoke(){
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest() // req is short for request. It will make ajax request.

        // req.addEventListener('load', e => console.log(JSON.parse(e.target.response))) //e.target.response is a string json type
        req.open('GET', 'https://icanhazdadjoke.com/')
        req.setRequestHeader('Accept', 'application/json')
        req.responseType = 'json'
        req.addEventListener('load', e => {
            if (e.target.response.joke) {
                resolve(e.target.response.joke)
            } else {
                reject('Invalid response')
            }
        })         
        req.send()
    })
}


// Alternative approach of sending a request
function fetchJoke() {
    fetch('https://icanhazdadjoke.com/', { // fetch returns a promise
        headers: {
            'Accept': 'application/json'
        }
    })
    // .then(res => res.text()) // The return is a string wrapped in a promise
    .then(res => res.json()) // To have a json response
    .then(data => console.log(data)) // The second step is to get the data from the string
}

fetchJoke()
getJoke().then(joke => console.log(joke))

// const jokes = []

// Get 3 jokes

// getJoke().then(joke => console.log(joke))

// jokes.push(getJoke()) // This is wrong because it will result in Promises
// jokes.push(getJoke())
// jokes.push(getJoke())

// getJoke().then(joke => jokes.push(joke))
// getJoke().then(joke => jokes.push(joke))
// getJoke().then(joke => jokes.push(joke))
// console.log(jokes)

// getJoke() // This approach will add up the time it takes to get joke in each promise
//     .then(joke => {
//         jokes.push(joke)
//         return getJoke()
//     })
//     .then(joke => {
//         jokes.push(joke)
//         return getJoke()
//     })
//     .then(joke => {
//         jokes.push(joke)
//         console.log(jokes)
//     })


// const jokePromises = []

// for (let i = 0; i < 3; i++) {
//     jokePromises.push(getJoke())
// }

// // Wait for all promises in the array to resolve,
// // then cak=ll our 'then' callback
// Promise.all(jokePromises).then(jokes => console.log(jokes))

console.log('Waiting for joke ...')



