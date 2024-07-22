// const adder = (x, y, callback) => {
//     setTimeout(() => {callback(x + y)}, 1000)
// }

// adder(5, 10, answer => console.log(`Answer: ${answer}`))

// console.log('Done')

// Real world example
// Example for ajax request from the server

function getJoke(cb){
    const req = new XMLHttpRequest() // req is short for request

    // req.addEventListener('load', e => console.log(JSON.parse(e.target.response))) //e.target.response is a string json type
    req.open('GET', 'https://icanhazdadjoke.com/')
    req.setRequestHeader('Accept', 'application/json')
    req.responseType = 'json'
    req.addEventListener('load', e => cb(e.target.response.joke))
    req.send()
}

getJoke(joke => console.log(joke))

console.log('Waiting for joke ...')

