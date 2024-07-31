import React, { useState } from 'react'
import BitcoinIndex from './BitcoinIndex'
import Counter from './Counter.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Bitcoin Index</h1>
      <BitcoinIndex/>
      <Counter/>
    </>

  )
}

export default App
