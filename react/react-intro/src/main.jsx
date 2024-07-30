/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Greeting } from "./Greeting.jsx"

// Refactor
// Create a React component
// function Greeting() { // Naming convention is Pascalcase to identify it is a function. Can use an arrow function.
  
//   return ( // This returns a jsx
//     <>
//       <p>FR: Bonjour!</p>
//       <p>ES: Hola!</p> 
//     </>
//   )
// }


ReactDOM.createRoot(document.getElementById('root')).render( // The React components will be rendered inside the 'root' element declared in index.html
  // We can have mulltiple React components in one web page by referring to Id selector


  // <React.StrictMode> {/*this is xml */}
    <App /> //An element with no child must self close
  // </React.StrictMode>,

  // Refactor: Transfer to App.jsx
  // <div>
  // <> {/* This will make h1 and p to be direct children in root element */}
  //   <h1>Hello</h1>    
  //   {/* We are passing this to render method */}
  //   {/* React component that represents an h1 element */}
  //     {/* We can verify this at swc.rs */}
  //         {/* In Playground, put '<h1>Hello</h1>' in input, a react element will be generated in the output */}
    
  //   <Greeting/> {/* To render a component */}
  //   <Greeting/> {/* An instance of the component. They are different from one another. */}
  //   <Greeting/>

  //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cupiditate sapiente maxime quia obcaecati, nam, eos, at nisi quos voluptatem nihil magnam ex praesentium facere mollitia ipsa numquam quisquam officia.</p>
  // {/* </div> */}
  // </>
)
