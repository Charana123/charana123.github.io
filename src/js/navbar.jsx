import React from 'react'

import "../css/navbar.css"

export default function NavBar() {
    return (
        <nav className="sidenav">
        <div className="logo-container">
            <span className="logo"> Charana Nandasena </span>
            <span className="logo-text"> Software Engineer </span>
        </div>
        <div id="scroll-spyed-list" className="list-group">
            <a className="list-group-item list-group-item-action"
                href="#intro1">
                Link 1
            </a>
            <a className="list-group-item list-group-item-action"
                href="#intro2">
                Link 2
            </a>
        </div>
        </nav>
    )
}