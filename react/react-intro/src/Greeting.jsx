import React from 'react'

// export const Greeting = (props) => { //props is incoming object. "Props" is just a convention name.
export const Greeting = ({ name, age='unknown' }) => { //props is incoming object. "Props" is just a convention name.

    // console.log(props)

    // Destructure
    // const { name, age='unknown' } = props // 'unknown' is default value

    // const message = `Hello, ${props.name}` // String interpolation in JS
    // const message = `Hello, ${name}`
    
    return (
        <>
            {/* <p>FR: Bonjour{props.name ? ", ": ""} {props.name}!</p>  String interpolation in JSX */}
            <p>FR: Bonjour{name ? ", ": ""} {name}!</p>  {/*String interpolation in JSX*/}
            <p>ES: Hola!</p> 
            <p>EN: You are {age} years old!</p>
        </>
    )
}
