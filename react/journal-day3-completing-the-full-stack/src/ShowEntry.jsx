import React from 'react'

const ShowEntry = ({ content, category }) => {
  // TODO: When connecting to API, add a fetch to get categories
  return (
    <>
        {/* category field is not available in entries from api */}
        {/* <p>Posted in {entry.category}</p> */}
        <p>Posted in {category}</p>
        <h2 className="my-5 is-size-5">{content}</h2>
    </>
  )
}

export default ShowEntry