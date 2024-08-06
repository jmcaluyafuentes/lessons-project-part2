import React, { useState, useEffect } from "react"
import { Routes, Route, useParams } from "react-router-dom"
import Home from "./Home"
import CategorySelection from "./CategorySelection"
import NewEntry from "./NewEntry"
import NavBar from "./NavBar"
import ShowEntry from "./ShowEntry"

// let newEntryId = 1

const App = () => {
    const [entries, setEntries] = useState([
        // { id: 1, category: 1, content: 'Pizza' },
        // { id: 2, category: 2, content: 'Coding is fun' },
        // { id: 3, category: 3, content: 'War never changes' }
    ])

    // Fetch the categories from api
    const [categories, setCategories] = useState([
        // { id: 1, name: "Food" },
        // { id: 2, name: "Gaming" },
        // { id: 3, name: "Coding" },
        // { id: 4, name: "Other" }
    ])

    useEffect(() => {
        // Add fetch call to the api to get the categories
        fetch('http://localhost:4001/categories') // Fetch is asynchronous (non-blocking)
            .then(res => res.json())
            .then(data => setCategories(data))

        // Add fetch call to the api to get the entries
        fetch('http://localhost:4001/entries')
            .then(res => res.json())
            .then(data => setEntries(data))
    }, [])

    // Add sync and await
    const addEntry = async (cat_id, content) => {
        // console.log(cat_id, content)
        // TODO: Sanitise and validate entry data
        // Create a new entry from the parameters
        // const newEntry = { id: newEntryId++, category: cat_id, content: content }
        const newEntry = { category: cat_id, content: content }

        // Post newEntry to the API and receive the returnedEntry
        const res = await fetch('http://localhost:4001/entries', {
            method: 'POST', 
            heders: {
                'Content-Type': 'application/json' // "application" is a mime type
            },
            body: JSON.stringify(newEntry)
        })

        const returnedEntry = await res.json()

        // Add the new entry to the list of entries
        // setEntries([...entries, newEntry])
        setEntries([...entries, returnedEntry])
        // return newEntryId-1
        return returnedEntry._id
    }

    // Higher-order Component (HOC)
    const ShowEntryWrapper = () => {
        // Get id from useParams
        const { id } = useParams()
        // console.log(id)

        // Get entry with the given id
        const entry = entries.find((e) => e._id == id)
        // console.log(entry)

        // console.log(categories)
        // const cat = categories.find(c => c._id == entry.category)
        const cat = entry ? categories.find(c => c._id == entry.category) : ''
        // Pass category as a prop
        // return entry ? <ShowEntry entry={entry} category={category} /> : <h3>Entry not found!</h3>
        return entry ? <ShowEntry content={entry.content} category={cat.name} /> : <h3>Entry not found!</h3>
    }

    return (
        <>
            <NavBar />
            <Routes>
                {/* Pass entries to Home component as prop */}
                <Route path="/" element={<Home entries={entries}/>} />
                <Route path="/category" element={<CategorySelection categories={categories} />} />
                <Route path="/entry">
                    <Route path=":id" element={<ShowEntryWrapper />} />
                    <Route path="new/:cat_id" element={<NewEntry categories={categories} addEntry={addEntry} />} />
                </Route>
                <Route path="*" element={<h3>Page not found!</h3>} />
            </Routes>
        </>
    )
}

export default App
