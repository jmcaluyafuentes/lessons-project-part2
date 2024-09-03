import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const NewEntry = ({ categories, addEntry }) => {
  const { cat_id } = useParams() // useParams always returns a string

  const [content, setContent] = useState('')
  const nav = useNavigate()
  // console.log(nav)

  const cat = categories.find((cat) => cat.id == cat_id) // cat.id from categories is a number while cat_id is a string, thus, use non-strict equality to perform type coersion
  // console.log(cat_name)

  const submitHandler = (e) => {
    e.preventDefault() // preventDefault() will prevent browser to reload when button is clicked
    // Add the new entry to the list of entries
    addEntry(cat.id, content)
    // Return success message or redirect to the entry
    nav(`/entry/${cat.id}`)
  }
  
  return cat ? ( 
    // Display the name of the found category
    <div className="container is-fluid">
      <h2 className="my-2 is-size-5">New Entry in category {cat.name}</h2> 
      <form onSubmit={submitHandler}> 
        <div className="field">
          <div className="control">
          <textarea value={content} onChange={e => setContent(e.target.value)} className="textarea" placeholder="Type your entry here" name='' id=''></textarea>
          {/* "Controlled component" or "two-way binding" between the state and the textarea element */}
          </div>
        </div>
        <div>
          <button className="button is-primary mt-2">Create Entry</button>
        </div>
      </form>
    </div>
  ) : ( 
    // If cat_id is not found in the categories array:
    <h3>Invalid Category ID!</h3>
    // <Redirect to='/category' />
  )
}

export default NewEntry