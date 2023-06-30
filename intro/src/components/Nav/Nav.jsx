import React from 'react'
import "./nav.css"

function Nav({ links }) {
    return (
    <nav>
        { links.map((link,index) => <a href="" key={index} className="nav-link">{link}</a>)}
    </nav>
    )
}

export default Nav