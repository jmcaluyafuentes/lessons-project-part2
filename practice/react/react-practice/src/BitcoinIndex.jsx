import React, { useState, useEffect } from 'react'
let countCallComponent = 0;
const BitcoinIndex = () => {
    let [price, setPrice] = useState(0);

    console.log(countCallComponent, price)

    useEffect(()=> console.log('useEffect triggered'))

    countCallComponent += 1;

    // console.log('Fetching...')
    fetch('https://api.coindesk.com/v1/bpi/currentprice/AUD.json')
        .then((res) => res.json())
        .then((data) => setPrice(data.bpi.AUD.rate))

  return (
    <>
        <h2>Current Price (AUD): {price}</h2>
    </>
  )
}

export default BitcoinIndex