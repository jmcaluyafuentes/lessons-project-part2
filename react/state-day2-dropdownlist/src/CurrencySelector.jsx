import React, { useEffect, useState } from 'react'

const CurrencySelector = ({ currency, setCurrency }) => { // This is not good approach because we are exposing the implementastion of useState of parent to child component
  
  // TODO: Add all currencies to the select element (drop down list)
  const [ currencies, setCurrencies ] = useState(
    [
      {
        "currency": "AUD",
        "country": "Australia Dollar"
      }
    ]
  )

  useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/supported-currencies.json')
      .then(res => res.json())
      .then(data => setCurrencies(data))
  })

  return (
    // <div> {/* use div rather then fragment because we want to layoyut the buttons on the page */}
    <select value={currency} onChange={(evt) => setCurrency(evt.target.value)}>  
        {/* "Two-way binding": Update select when the currency has changed */}
        {/* In React it is also called "Control Component" */}

        {/* <button onClick={() => setCurrency('AUD')}>Australian Dollar (AUD)</button>
        <button onClick={() => setCurrency('USD')}>US Dollar (USD)</button>
        <button onClick={() => setCurrency('EUR')}>Euro Dollar (EUR)</button> */}

        {/* <option value="AUD">Australian Dollar</option>
        <option value="USD">US Dollar</option>
        <option value="AUD">Euro</option> */}

        {currencies.map(cur => <option value={cur.currency}>{cur.country}</option>)}
    {/* </div> */}
    </select>
  )
}

export default CurrencySelector