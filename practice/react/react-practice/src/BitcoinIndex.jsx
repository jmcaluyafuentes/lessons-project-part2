import React, { useState, useEffect } from 'react'

let countCallComponent = 0;

const BitcoinIndex = ({currency}) => {
    let [price, setPrice] = useState(0);

    console.log(countCallComponent, price)

    console.log(currency)

    useEffect(()=> console.log('useEffect triggered'))

    countCallComponent += 1;

    useEffect(()=> {
        fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
        .then((res) => res.json())
        .then((data) => setPrice(data.bpi[currency].rate))
    }, [currency])
    
  return (
    <>
        <h2>Current Price ({currency}): {price}</h2>
    </>
  )
}

export default BitcoinIndex