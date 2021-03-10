import React from 'react';
import "./Navbar.css";
import {AiOutlineAliwangwang} from 'react-icons/ai';

function Navbar() {
    return (
        <div className="navbar-conteiner">
            <div className="icon-logo"><AiOutlineAliwangwang/></div>
            <div className="logo">lukols</div>
            <div className="box-resp-none"></div>
            <div className="menu-conteiner">
                <ul className="menu-links">
                    <li><a href="/" className="link">Home</a></li>
                    <li><a href="/" className="link">About me</a></li>
                    <li><a href="/" className="link">Skills</a></li>
                    <li><a href="/" className="link">Portfolio</a></li>
                    <li><a href="/" className="link">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
