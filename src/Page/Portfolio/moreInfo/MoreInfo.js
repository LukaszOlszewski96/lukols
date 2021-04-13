import React from 'react';
import "./MoreInfo.css";
import {AiFillCloseSquare} from "react-icons/ai";

function MoreInfo() {
    return (
        <div className="more-info-conteiner">
            <div className="more-info-box">
            <div className="information-box">
                <a href="/" className="exit-more"><AiFillCloseSquare/></a>
                <p className="title-more">Portfolio - lukols</p>
                <div className="horizontal-box-more">
                    <div className="left-image-more">

                        <img src="image/lukols_laptop.png"></img>
                    </div>
                    <div className="right-text-more">
                        <p className="title-more-info">INFO</p>
                        <p className="description-info">Lukols powstała w kwietniu 2021 roku i od tej pory wszystkie moje projekty realizuję właśnie pod tą nazwą.
                            Strona pełni funckję mojej wizytówki oraz mojego portfolio.</p>
                        <p className="description-tech">Witryna została wykonana przy użyciu technologii: HTML5, CSS 3, JavaScript, React, Node.js, Firebase.</p>
                        <p className="description-tech">Grafikę przygotowano przy użyciu: Figma, Canva, Photoshop.</p>
                        <p className="title-more-area">ZAKRES PRAC</p>
                        <p className="description-tech">Design / UI / UX / front-end / back-end development.</p>
                        <p className="link-bottom-des">Link:<a href="https://lukols.com/" className="link-to-side">lukols.com</a></p>
                    </div>
                </div>
            </div>


            </div>
        </div>
    )
}

export default MoreInfo;


