import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const NewEntry = ({ categories, addEntry }) => {
    const [content, setContent] = useState('')

    const nav = useNavigate()
    const { cat_id } = useParams()
    // console.log(cat_id)
    // Change the cat.id into cat._id to match the data from the api
    const cat = categories.find((c) => c._id == cat_id)
    // console.log(cat)

    // Add async and await since addEntry from App is async
    const submitHandler = async e => {
        e.preventDefault()
        // Add the new entry to the list of entries
        const id = await addEntry(cat._id, content)
        // console.log(cat._id)
        // Return success message or redirect to the entry
        nav(`/entry/${id}`)
    }

    return cat ? (
        <div className="container is-fluid">
            <h2 className="my-2 is-size-5">New Entry in category {cat.name}</h2>
            <form onSubmit={submitHandler}>
                <div className="field">
                    <div className="control">
                        <textarea value={content} onChange={e => setContent(e.target.value)} className="textarea" placeholder="Type your entry here"></textarea>
                    </div>
                </div>
                <div className="control">
                    <button className="button is-primary">Create Entry</button>
                </div>
            </form>
        </div>
    ) : (
        <h3>Invalid Category ID!</h3>
    )
}

export default NewEntry
