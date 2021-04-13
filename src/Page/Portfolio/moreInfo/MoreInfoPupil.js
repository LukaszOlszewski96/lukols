import React from 'react';
import "./MoreInfo.css";
import {AiFillCloseSquare} from "react-icons/ai";

function MoreInfoPupil() {
    return (
        <div className="more-info-conteiner">
            <div className="more-info-box">
            <div className="information-box">
                <a href="/" className="exit-more"><AiFillCloseSquare/></a>
                <p className="title-more">Projet - Pupil</p>
                <p className="in-progress">- W trakcie realizacji -</p>
                <div className="horizontal-box-more">
                    <div className="left-image-more">

                        <img src="image/lukols_laptop.png"></img>
                    </div>
                    <div className="right-text-more">
                        <p className="title-more-info">INFO</p>
                        <p className="description-info">Pupil jest to projekt aplikacji dla systemu andorid. Celem projektu jest stworzenie aplikacji ułatwiającej poszukiwanie i zgłaszanie zaginięcia lub znalezienia pupila.</p>
                        <p className="description-tech">Aplikacja została wykonana przy użyciu: Andorid Studio, Kotlin, Firebase.</p>
                        <p className="description-tech">Grafikę przygotowano przy użyciu: Figma, Canva, Photoshop</p>
                        <p className="title-more-area">ZAKRES PRAC</p>
                        <p className="description-tech">Design / UI / UX / Mobile Development.</p>
                        <p className="link-bottom-des">Link:<a className="link-to-side">soon</a></p>
                    </div>
                </div>
            </div>


            </div>
        </div>
    )
}

export default MoreInfoPupil;