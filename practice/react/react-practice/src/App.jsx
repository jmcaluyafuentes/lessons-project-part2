import React, { useState } from 'react'
import BitcoinIndex from './BitcoinIndex'
// import Counter from './Counter.jsx'
import CurrencySelector from './CurrencySelector'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [currency, setCurrency] = useState('JPY')

  const updateCurrency = (value) => {
    setCurrency(value)
  }

  return (
    <>
      <h1>Bitcoin Index</h1>
      <BitcoinIndex currency={currency}/>
      <CurrencySelector setCurrency={updateCurrency} currency={currency}/>
      {/* <Counter/> */}
    </>

  )
}

export default App
