import React, { useState } from "react"
import { useParams } from 'react-router-dom'

// Pass the state as prop from parent App to child
const NewEntry = ({ categories, addEntry }) => {
    const [content, setContent] = useState('')
    
    const { cat_id } = useParams() // useParams always return a string

    // Find a match in categories from CategorySelection with cat_id
    const cat = categories.find(c => c.id == cat_id)

    const submitHandle = e => {
        e.preventDefault(); // preventDefault() will prevent the browser to do full reload
        // Add the new entry to the list of entries
        addEntry(cat.id, content)
        // Return success message or redirect to the entry
    }

    return cat ? (
        <div class="container is-fluid">
        <h2 class="my-2 is-size-5">New Entry in category {cat.name}</h2>
        <form onSubmit={submitHandle}> 
            <div class="field">
                <div class="control">
                    <textarea value={content} onChange={e => setContent(e.target.value)} class="textarea" placeholder="Type your entry here"></textarea>
                </div>
            </div>
            <div class="control">
                <button class="button is-primary">Create Entry</button>
            </div>
        </form>
        </div>
    ) : (
        <h2>Invalid category ID!</h2>
    )
}

export default NewEntry
