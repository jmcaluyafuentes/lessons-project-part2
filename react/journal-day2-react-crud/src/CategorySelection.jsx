import React, { useState } from "react"
import { Link } from "react-router-dom"

// Pass the state as prop from parent App to child
const CategorySelection = ({ categories }) => {
    // Lift the state up to common parent so that NewEntry component can acces it
    // const [categories, setCategories] = useState([
    //     {id: 1, name: "Food"},
    //     {id: 2, name: "Gaming"},
    //     {id: 3, name: "Coding"},
    //     {id: 4, name: "Other"}
    // ])

    return (
        <>
            <h3>Please select a category:</h3>
            <ul>
                {categories.map((cat) => (
                    <li>
                        <Link to={`/entry/new/${cat.id}`}>{cat.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CategorySelection
