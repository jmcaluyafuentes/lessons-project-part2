import React from 'react'

const CurrencySelector = ({ setCurrency }) => { // This is not good approach because we are exposing the implementastion of useState of parent to child component
    return (
    <div> {/* use div rather then fragment because we want to layoyut the buttons on the page */}
        <button onClick={() => setCurrency('AUD')}>Australian Dollar (AUD)</button>
        <button onClick={() => setCurrency('USD')}>US Dollar (USD)</button>
        <button onClick={() => setCurrency('EUR')}>Euro Dollar (EUR)</button>
        
    </div>
  )
}

export default CurrencySelector