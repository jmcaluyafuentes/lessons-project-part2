import React from 'react'

const CurrencySelector = ({setCurrency}) => {

  return (
    <div>
        <button onClick={()=> setCurrency('EUR')}>EUR</button>
        <button onClick={()=> setCurrency('JPY')}>JPY</button>
        <button onClick={()=> setCurrency('PHP')}>PHP</button>
    </div>
  )
}

export default CurrencySelector