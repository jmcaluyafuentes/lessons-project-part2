// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Greeting } from "./Greeting.jsx"

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React + Coder Academy</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

  const age = 35;

    // <div>
  return (
  <> {/* This will make h1 and p to be direct children in root element */}
    <h1>Hello</h1>    
    {/* We are passing this to render method */}
    {/* React component that represents an h1 element */}
      {/* We can verify this at swc.rs */}
          {/* In Playground, put '<h1>Hello</h1>' in input, a react element will be generated in the output */}
    
    <Greeting name="John" age={age} /> {/* To render a component */}
    <Greeting name="Mark"/> {/* An instance of the component. They are different from one another. */}
    <Greeting/>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate sapiente maxime quia obcaecati, nam, eos, at nisi quos voluptatem nihil magnam ex praesentium facere mollitia ipsa numquam quisquam officia.</p>
  {/* </div> */}
  </>
  )
}

export default App
