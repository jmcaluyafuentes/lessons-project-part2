import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CategorySelection = ({ categories }) => {

    // Refactor: Lift up this state to parent component App so that NewEntry can access
    // const [categories, setCategories] = useState([
    //     {id: 1, name: 'Food'},
    //     {id: 2, name: 'Gaming'},
    //     {id: 3, name: 'Coding'},
    //     {id: 4, name: 'Other'}
    // ])

  return (
    <>
        <h3>Please select a category:</h3>
        <ul>
            {categories.map((cat) => (
                <li key={cat.id}>
                    <Link to={`/entry/new/${cat.id}`}>{cat.name}</Link>
                </li>
            ))}
        </ul>
    </>
  )
}

export default CategorySelection