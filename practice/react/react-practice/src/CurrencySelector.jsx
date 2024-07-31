import React, { useState, useEffect } from 'react'

const CurrencySelector = ({currency, setCurrency}) => {

    const [currencies, setCurrencies] = useState(
        [

          ]
    )

    useEffect(()=> {
        console.log('Fetching all data...')
        fetch('https://api.coindesk.com/v1/bpi/supported-currencies.json')
        .then((res)=> res.json())
        .then((data)=> setCurrencies(data))
    }, [])
    

  return (
    <select value={currency} onChange={(evt)=>setCurrency(evt.target.value)}>
        {currencies.map(cur => <option value={cur.currency}>{cur.country}</option>)}
        
        
    </select>
  )
}

export default CurrencySelector