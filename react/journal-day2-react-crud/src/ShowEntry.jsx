import React from 'react'
import { useParams } from 'react-router-dom'

const ShowEntry = ({ entries }) => {

  const { id } = useParams()
  // console.log(id)
  // console.log(entries)
  const entriesByCat = entries.filter((entry) => entry.category==id)
  console.log(entriesByCat)

  return (
    <ul>
      {
        entriesByCat.map((entry) => (
          <li key={entry.category}>{entry.content}</li>
        ))
      }
    </ul>
  )
}

export default ShowEntry