import React from 'react';
import "./Skill.css";
import {AiOutlineMobile} from "react-icons/ai";
import {BiCodeBlock} from "react-icons/bi";
import {IoSchoolOutline} from "react-icons/io5";


function Skill() {
    return (
        <div className="skill-conteiner">
            <div className="box-border" >
                <h2>Skills</h2>
                <p>Technologies and tools that I currently use and which I want to learn in 2021.</p>
                <div className="skill-box-image">
                    <div className="skill-mobileDev">
                       
                        <div className="skill-icon"><AiOutlineMobile/></div>
                        <p>Mobile developer:</p>
                        <div className="horizontal-skill-box">
                            <img src="image/Android.png"></img>
                            <img className="Kotlin-img" src="image/Kotlin.png"></img>
                            <img className="Java-img" src="image/Java.png"></img>
                        </div>
                        <div className="horizontal-skill-box">
                            <img className="MySQL-img" src="image/MySQL.png"></img>
                            <img className="Firebase-img" src="image/Firebase.png"></img>
                            <img className="Git-img" src="image/git.png"></img>
                        </div>
                        <div className="horizontal-skill-box">
                            <img className="Figma-img" src="image/Figma.png"></img>
                            <img className="Canva-img" src="image/Canva.png"></img>
                        </div>
                    </div>
                 
                    <div className="skill-webDev">
                        <div className="skill-icon"><BiCodeBlock/></div>
                        <p>Front-end developer:</p>
                        <div className="horizontal-skill-box">
                            <img className="JavaScript-img" src="image/JavaScript.png"></img>
                            <img className="HTML-img" src="image/HTML.png"></img>
                            <img className="CSS-img" src="image/CSS.png"></img>
                        </div>
                        <div className="horizontal-skill-box">
                            <img className="React-img" src="image/React.png"></img>
                            <img className="MySQL-img" src="image/MySQL.png"></img>
                            <img className="Firebase-img" src="image/Firebase.png"></img>
                        </div>
                        <div className="horizontal-skill-box">
                            <img className="node-img" src="image/nodeJS.png"></img>
                            <img className="Git-img" src="image/git.png"></img>
                        </div>
                        <div className="horizontal-skill-box">
                        <img className="Figma-img" src="image/Figma.png"></img>
                            <img className="Canva-img" src="image/Canva.png"></img>
                        </div>
                    </div>
                    <div className="skill-lern">
                        <div className="skill-icon"><IoSchoolOutline/></div>
                        <p>What I want to lern:</p>
                        <div className="horizontal-skill-box">
                            <img className="R-Native" src="image/ReactNative.png"></img>
                            <img className="TensorFlow-img" src="image/TensorFlow.png"></img>
                            <img className="Three-img" src="image/threeJS.png"></img>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
    )
}
export default Skill;
