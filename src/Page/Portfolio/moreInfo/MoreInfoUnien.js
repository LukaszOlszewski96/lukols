import React from 'react';
import "./MoreInfo.css";
import {AiFillCloseSquare, AiFillGithub} from "react-icons/ai";

function MoreInfoUnien() {
    return (
        <div className="more-info-conteiner">
            <div className="more-info-box">
            <div className="information-box">
                <a href="/" className="exit-more"><AiFillCloseSquare/></a>
                <p className="title-more">Projekt - UNIEN</p>
                <p className="in-progress">- W trakcie realizacji -</p>
                <div className="horizontal-box-more">
                    <div className="left-image-more">

                        <img src="image/unien_info.png"></img>
                    </div>
                    <div className="right-text-more">
                        <p className="title-more-info">INFO</p>
                        <p className="description-info">Unien to projekt serwisu szkoleniowego, którego celem jest podniesienie kompetencji polskich inżynierów z zakresu Automatyki, Robotyki, Elektryki i Elektroniki.</p>
                        <p className="description-tech">Serwis tworzony jest przy użyciu technologii: HTML5, CSS 3, JavaScript, React, Node.js, Firebase.</p>
                        <p className="description-tech">Grafikę przygotowano przy użyciu: Figma, Canva, Photoshop.</p>
                        <p className="title-more-area">ZAKRES PRAC</p>
                        <p className="description-tech">Design / UI / UX / front-end / back-end development.</p>
                        <p className="link-bottom-des">Link:<a className="link-to-side">soon</a></p>
                    </div>
                </div>
            </div>


            </div>
        </div>
    )
}

export default MoreInfoUnien;