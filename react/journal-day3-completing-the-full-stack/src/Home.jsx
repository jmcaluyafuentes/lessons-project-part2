import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ entries }) => {
  return (
    // <div>Hello World</div>
    <>
      <ul>
        {entries.map(entry => (
          <li key={entry._id}>
            {/* {console.log(entry._id)} */}
            <Link to={`/entry/${entry._id}`}>{entry.content}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home