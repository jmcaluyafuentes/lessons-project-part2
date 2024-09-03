import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import CategorySelection from './CategorySelection'
import NewEntry from './NewEntry'
import NavBar from './NavBar'
import ShowEntry from './ShowEntry'

const App = () => {
  const [categories, setCategories] = useState([
    {id: 1, name: 'Food'},
    {id: 2, name: 'Gaming'},
    {id: 3, name: 'Coding'},
    {id: 4, name: 'Other'}
  ])

  const [entries, setEntries] = useState([])

  const addEntry = (cat_id, content) => {
    // console.log(cat_id, content)

    // TODO: Sanitise and validate entry data
    // Create a new entry from the entered data
    const newEntry = { category: cat_id, content: content } // This data structure is from the API Entry schema
    // Add the new entry to the list of entries
    setEntries([...entries, newEntry])
  }

  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<CategorySelection categories={categories}/>} />
          <Route path="/entry">
            <Route path=':id' element={<ShowEntry entries={entries}/>}></Route>
            <Route path="new/:cat_id" element={<NewEntry categories={categories} addEntry={addEntry}/>} />
          </Route>
          <Route path="*" element={<h3>Page not found</h3>} />
        </Routes>
    </>
  )
}

export default App
