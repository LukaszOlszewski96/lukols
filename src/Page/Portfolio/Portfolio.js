import React from 'react';
import "./Portfolio.css";

function Portfolio() {
    return (
        <div className="portfolio-conteiner">
            <h2>My Work</h2>
            <p>Opis tekstowy mojej pracy</p>
            <div className="box-portfolio">
            <div className="horizontal-box-portfolio">
                <div className="portfolio-box-image">
                    <img src="image/automatyka.png"></img>
                </div>
                <div className="portfolio-box-image">
                    <img src="image/automatyka.png"></img>
                </div>
                <div className="portfolio-box-image">
                    <img src="image/automatyka.png"></img>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Portfolio;
