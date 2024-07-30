import React, { useState } from 'react'

const ShowCount = ({ value }) => { // Abstract. Separate of concerns.
  return <h3>You have clicked {value} times</h3> // If count changes, React will detect it and will re-render the p element.
}

const App = () => { // App defines the functional component using an arrow function

  // let count = 0
  const [count, setCount] = useState(0)
  // [count, setCount] destructor the returned array from useState
  // count: A state variable that stores the current count value. Initially set to 0.
  // setCount has prefix of set meaning it's a setter
  // setCount: A function to update the value of count. When called, it triggers a re-render of the component with the updated state.
  // setCount is cameCase

  // let x = useState('hi')  // create an instance
  //     // parameter of useState is any type of value
  //     // We are telling React to monitor the data passed in useState
  //     // If the state of this data changes, React will re-render all elements that depends on this data.  
  //   console.log(x)
  //     // useState returns an array with two elements (index 0 and 1)
  //     // Index 0 is the getter
  //     // Index 1 is the setter
  
  return (
    <> 
    {/* <> ... </>: A shorthand for React.Fragment. It groups multiple elements without adding extra nodes to the DOM. */}
    
      <h1>State</h1>

      {/* Refactor: */}
      {/* <h3>You have clicked {count} times</h3> If count changes, React will detect it and will re-render the p element. */}
      <ShowCount value={count}/>
      
      {/* <button onClick={() => console.log('Clicked button')}>Click Me!</button> */}
      {/* <button onClick={() => console.log(++count)}>Click Me!</button> */}
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </>
  )
}

export default App