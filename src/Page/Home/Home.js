import React from 'react';
import "./Home.css";
import HireBtn from "./Button/HireBtn";
import {FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
    return (
        <div className="home-conteiner">
            <div className="left-box-home">
                <p className="font-size-text">Hello</p>
                <p className="font-size-name">I'm Luke</p>
                <p className="font-size-text-2">Web & Mobile Developer</p>
                <HireBtn/>
                <div className="icons-profiles">
                <div className="icons-profiles-linkedin">
                    <a href="https://www.linkedin.com/in/%C5%82ukasz-olszewski/"><FaLinkedin/></a>
                </div>
                <div className="icons-profiles-git">
                    <a href="https://github.com/LukaszOlszewski96"><FaGithub/></a>
                </div>
                </div>
            </div>
               
        </div>
    )
}

export default Home;
