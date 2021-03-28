import React from 'react';
import "./Portfolio.css";
import {AiOutlineAliwangwang} from 'react-icons/ai';
import PoBtn from './Button/PoBtn';

function Portfolio() {
    return (
        <div id="go-portfolio" className="portfolio-conteiner">
            <h2>My Work</h2>
            <p>Opis tekstowy mojej pracy</p>
            <div className="box-portfolio">
            <div className="horizontal-box-portfolio">
                <div className="portfolio-box-image">
                    <img src="image/automatyka.png"></img>
                    <div className="overlay-image" >
                        <div className="icon-logo-portfolio"><AiOutlineAliwangwang/></div>
                        <p>lukols</p>
                        <div className="more-info-button"><PoBtn/></div>
                    </div>
                </div>
                <div className="portfolio-box-image">
                    <img src="image/automatyka.png"></img>
                    <div className="overlay-image">
                        <p>Fox</p>
                        <div className="more-info-button"><PoBtn/></div>
                    </div>
                </div>
                <div className="portfolio-box-image">
                    <img src="image/automatyka.png"></img>
                    <div className="overlay-image">
                        <p>Pupil</p>
                        <div className="more-info-button"><PoBtn/></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Portfolio;
