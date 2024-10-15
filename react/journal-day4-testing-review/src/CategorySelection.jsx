import React, { useState } from "react"
import { Link } from "react-router-dom"

const CategorySelection = ({ categories }) => {
    return (
        <>
            <h3>Please select a category:</h3>
            <ul>
                {categories.map((cat) => (
                    <li key={cat._id}>
                        {/* {console.log(cat._id)} */}
                        {/* Change the cat.id into cat._id to match the data from the api */}
                        <Link to={`/entry/new/${cat._id}`}>{cat.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CategorySelection
