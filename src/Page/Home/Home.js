import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import HireBtn from './Button/HireBtn';
import "./Home.css";

function Home() {
    return (
        <div className="home-conteiner">
            <Navbar/>
            <div className="left-box-home">
                <p className="font-size-text">Hello</p>
                <p className="font-size-name">I'm Luke</p>
                <p className="font-size-text-2">Web & Mobile Developer</p>
                <HireBtn/>
            </div>
                <img className="background-image" src="image/element.png"/>
        </div>
    )
}

export default Home;
