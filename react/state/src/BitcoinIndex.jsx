import React, { useState, useEffect } from 'react'

// https://api.coindesk.com/v1/bpi/currentprice.json
// https://api.coindesk.com/v1/bpi/currentprice/AUD.json

// const BitcoinIndex = async () => {
    // React components cannot be asynchronouse
    // React is expecting a return JSX and not a promise 
const BitcoinIndex = ({ foo }) => {
    const [price, setPrice] = useState(0)
    // useState returns an array (getter and getter) with anonymous names
    // The names are arbitrary (in this example, we called it price and setPrice)
    // console.log(userState(0))

    // All useEffects will be triggered on mount

    // Case 1: Will be triggered every update
    // useEffect(() => console.log('effect triggered'))
        // By default, useEffect will be triggered in every update.
        // userEffect will run asynchronous, meaning non-blocking

    // Case 2: Will be triggered if any of the dependencies change
    // useEffect(() => console.log('price effect triggered'), [price])
        // Second parameter: An array of dependencies (anything that is reactive such as props and state)

    // useEffect(() => console.log('foo effect triggered'), [foo])

    // Case 3: Will be triggered on mount only
    // useEffect(() => console.log('mount effect triggered'), [])

    // Now, refactor fetch by using the 3rd case.
    useEffect(() => {
        console.log('Fetching...')
        fetch('https://api.coindesk.com/v1/bpi/currentprice/AUD.json')
            .then(res => res.json())
            .then(data => setPrice(data.bpi.AUD.rate))
    }, []) // Second parameter is an empty array of dependencies

    // const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice/AUD.json')
    // const data = await res.json()
    // console.log(data)

    // console.log('Fetching...')
        // Rendering happens 3 times.
            // First, is in App.jsx by calling the BitcoinIndex component
            // Second, is in BitcoinIndex.jsx with useState of initial value of 0
            // Third, when the setter value is changed

    // Refactor:
    // fetch('https://api.coindesk.com/v1/bpi/currentprice/AUD.json')
    //     .then(res => res.json())
    //     .then(data => setPrice(data.bpi.AUD.rate))

        // We don't have to wait for the fetch response because we can still render h2 element with the initial value of 0 in useState.

    return (
    // <h2>Current Price (AUD): 100,000</h2> 
    <h2>Current Price (AUD): {price}</h2>
        //Hardcode everything initially to see what it looked like in end user.
        // Starting with the end results first. Styling will be done later.
        // Principle of software eng'g. MVP Minimum Viable Product.
        // Begin with one currency first
    )
}

export default BitcoinIndex