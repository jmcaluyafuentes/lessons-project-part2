// import React from 'react'
import React, { useState } from 'react'
  // Added import useState because we the 'lift state up' from child to parent component 
import BitcoinIndex from './BitcoinIndex'
import CurrencySelector from './CurrencySelector'

const App = () => {
  const [currency, setCurrency] = useState("AUD")
    // Place the currency state to parent component because multiple children components depend on it 
    // This term is called 'lifting state up'
    // Bitcoin and CurrencySelector are siblings components. Their parent it the App component

  // Create a function in such a way that child component will not know the useState setCurrency or any complex implementation in parent component
  const updateCurrency = (code) => {
    // We can do validation of code here, or logging of timestamp, etc
    setCurrency(code)
  }

  return (
    <>
        <h1>Bitcoin Index</h1>
        {/* <BitcoinIndex foo='nan'/> */}
        {/* We want to show 3 currencies by making 3 instances of BitcoinIndex */}
        {/* <BitcoinIndex currency="AUD"/>
        <BitcoinIndex currency="USD"/>
        <BitcoinIndex currency="EUR"/> */}

        {/* <BitcoinIndex currency="AUD"/> */}
        <BitcoinIndex currency={currency}/>
        {/* We can use a button */}
        {/* <CurrencySelector setCurrency={setCurrency}/> */}
        <CurrencySelector setCurrency={updateCurrency} currency={currency}/>

    </>
  )
}

export default App