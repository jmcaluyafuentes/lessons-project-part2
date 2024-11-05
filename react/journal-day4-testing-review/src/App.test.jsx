
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"

describe('App Component', () => {
    it('shows the heading', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )

        expect(screen.getByText('Entries')).toBeInTheDocument();
    })
})
