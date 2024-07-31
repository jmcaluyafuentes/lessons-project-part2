// Purpose of this component: Fetching and displaying bitcoin index

import React, { useState, useEffect } from 'react'
 
const BitcoinIndex = ({ currency }) => {
    const [price, setPrice] = useState(0)

    // Day 2 Activity: Change the currency
    // const [currency, setCurrency] = useState("AUD") <-- Refactor: Move to the parent App component
        // Commented out because we are not receiving currency in props

    useEffect(() => {
        console.log('Fetching...')
        // fetch('https://api.coindesk.com/v1/bpi/currentprice/AUD.json')
        fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
            .then((res) => res.json())
            // .then(data => setPrice(data.bpi.AUD.rate))
            .then((data) => setPrice(data.bpi[currency].rate)) // Use square brackets rather than dot notation since we are referencing the variable currency.
    // }, []) // If this is empty, it will not call the useEffect function even if currency changes.
    }, [currency]) // If the currency changes, the useEffect function will be called again

    return (
    // <h2>Current Price (AUD): {price}</h2>
    <h2>Current Price ({currency}): {price}</h2>
    )
}

export default BitcoinIndex