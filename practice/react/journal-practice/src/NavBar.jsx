import React from "react"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <h1>Journal</h1>
                    </Link>
                    <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/">Home</Link>
                        <Link className="navbar-item" to="/category">Select Category</Link>
                        <Link className="navbar-item" to="/entry/new">New Entry</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar