import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import CategorySelection from './CategorySelection'
import NewEntry from './NewEntry'
import NavBar from './NavBar'
// import './App.css'

const App = () => {
  return (
    <>
      {/* <h1>Journal</h1>  */}
      {/* h1 is rendered outside the Router. This is static content */}
      
      <NavBar />

      {/* Refactor: Move BrowserRouter to main.jsx to wrap the whole App to prevent full page reload */}
      {/* <BrowserRouter> */}
        {/* <NavBar />  */}
        {/* If we need a navbar component */}
        {/* navbar is not a child of route */}
        
        <Routes>
          {/* <Route path="/" element={<p>Hello!</p>} /> */}
          {/* path will find a match in the routes */}

          {/* When found a match, it will stop to that route and will not continue to the following routes. */}
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<CategorySelection />} />
          <Route path="/entry">
            {/* child route */}
            <Route path="new/:cat_id" element={<NewEntry />} />
          </Route>

          {/* catch route */}
          <Route path="*" element={<h3>Page not found</h3>} />
        </Routes>

      {/* </BrowserRouter> */}
      {/* <Home />
      <CategorySelection />
      <NewEntry /> */}
    </>
  )
}

export default App
