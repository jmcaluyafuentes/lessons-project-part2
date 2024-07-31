import React, { useState } from 'react'
import BitcoinIndex from './BitcoinIndex'
// import Counter from './Counter.jsx'
import CurrencySelector from './CurrencySelector'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [currency, setCurrency] = useState('AUD')
  return (
    <>
      <h1>Bitcoin Index</h1>
      <BitcoinIndex currency={currency}/>
      <CurrencySelector setCurrency={setCurrency}/>
      {/* <Counter/> */}
    </>

  )
}

export default App
