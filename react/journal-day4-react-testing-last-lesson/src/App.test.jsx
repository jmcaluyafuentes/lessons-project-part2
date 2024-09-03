// References:
// https://vitest.dev/api/expect.html#tocontain
// https://testing-library.com/docs/ecosystem-jest-dom/
// https://github.com/testing-library/jest-dom?tab=readme-ov-file


import '@testing-library/jest-dom' // This needs to be the first import
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import user from '@testing-library/user-event' // Use to simulate user events
    // "user" is arbitrary name on import because it is exported in default
import App from "./App.jsx"

// describe and it functions are part of Vitest framework. They are implicitly imported by Vitest
describe('App Component', () => { // "describe()" declares a test suite
    // 'App Component' is the test suite (1st parameter)
    // Declare the test in callback function (2nd parameter)
    
    it('shows the heading', () => {
        // "it()" to write a test
        // We do our testing in the callback function (2nd parameter)
        
        // render( // render function with jsx parameter. We need to import render
        //     // The components are rendered to the virtual dom 
        //     // "render" returns an object. 
        //     // Within that object has attribute "container". Container is anologous to builtin "document" in the browser
        //     <BrowserRouter>
        //         <App />
        //     </BrowserRouter>
        // )

        const { container } = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )

        // We know that the Home component is rendered because the test sees 'Entries' in virtual DOM
        // Only the Home component has the text 'Entries'
        // expect(screen.getByText('Entries')).toBeInTheDocument() 
            // "expect" refer to vitest.dev/api/expect.html
            // screen is the object that represents the renderered component in which we can do queries
            // "screen" refer to testing library website
            // "getByText" returns the first element that matches the argument. It returns an undefined if no match found.
            // "toBeInTheDocument()" is a method, refer to testing library website

        const h2 = container.querySelector('h2')

        // expect(container.querySelector('h2')).toBeInTheDocument()
        expect(h2).toBeInTheDocument()
        expect(h2).toHaveTextContent('Entries') // Argument passed is string or expression
    })

    it('render CategorySelection when New Entry menu is clicked', async () => {
        // make the callback function async

        const { container } = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )


        // Get a reference to the New Entry menu item
        const newEntry = container.querySelector('nav #newEntry')

        // Simulate user clicking the New Entry
        await user.click(newEntry)
            // "user" object
            // "click" is one of the attributes of "user"
            // "click" will simulate the user clicking on the element
            // Make this await

            // After simulating a click event, it re-renders the CategorySelection
            // Then we want to test if there is h3 element with text "Please select a category:" in the rendered component
            const heading = container.querySelector('h3')

            // expect(container.querySelector('h2')).toBeInTheDocument()
            expect(heading).toBeInTheDocument()
            expect(heading).toHaveTextContent('Please select a category:') // Argument passed is string or expression
    })
})
