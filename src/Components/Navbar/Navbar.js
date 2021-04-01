import React from 'react';
import "./Navbar.css";
import {AiOutlineAliwangwang} from 'react-icons/ai';
import {TiThMenuOutline} from 'react-icons/ti';

function Navbar() {
    
    const [hamburger,setHamburger] = React.useState(false);
    const [click, setClick] = React.useState(false);

    const clickMenu =()=>{
        setClick(!click);
    }

    const showHamburger = ()=>{
        if (window.innerWidth <= 800){
            setHamburger(true);
        }
        else{
            setHamburger(false)
        }
    };

    window.addEventListener('resize',showHamburger);

    return (
        <div className="navbar-conteiner">
            <div className="icon-logo"><AiOutlineAliwangwang/></div>
            <div className="logo">lukols</div>
            {hamburger ? 
            <div className="hamburger-menu"> 
                <a className="hamburger-icon" href="#" onClick={clickMenu}><TiThMenuOutline/></a>
                <div className="menu-conteiner">
                    <ul className={click ? 'menu-links active' : 'menu-links'}>
                        <li><a href="#go-home" className="link">Home</a></li>
                        <li><a href="#go-about" className="link">About me</a></li>
                        <li><a href="#go-skill" className="link">Skills</a></li>
                        <li><a href="#go-portfolio" className="link">Portfolio</a></li>
                        <li><a href="#go-contact" className="link">Contact</a></li>
                    </ul>
                </div>
            </div>
             : <div className="menu-conteiner">
                <ul className="menu-links">
                    <li><a href="#go-home" className="link">Home</a></li>
                    <li><a href="#go-about" className="link">About me</a></li>
                    <li><a href="#go-skill" className="link">Skills</a></li>
                    <li><a href="#go-portfolio" className="link">Portfolio</a></li>
                    <li><a href="#go-contact" className="link">Contact</a></li>
                </ul>
            </div>}
        </div>
    )
}

export default Navbar;
