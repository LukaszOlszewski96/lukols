import React from 'react';
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar-conteiner">
            <div className="logo">Lukols</div>
            <div className="box-resp-none"></div>
            <div className="menu-conteiner">
                <ul className="menu-links">
                    <li><a href="/" className="link">Home</a></li>
                    <li><a href="/" className="link">About me</a></li>
                    <li><a href="/" className="link">Services</a></li>
                    <li><a href="/" className="link">Skills</a></li>
                    <li><a href="/" className="link">Portfolio</a></li>
                    <li><a href="/" className="link">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
