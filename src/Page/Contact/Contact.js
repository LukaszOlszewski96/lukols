import React from 'react';
import "./Contact.css";
import ConBtn from "./Button/ConBtn";
import {AiOutlineAliwangwang} from 'react-icons/ai';

function Contact() {
    return (
        <div className="contact-block">
        <div id="go-contact" className="contact-conteiner">
            <div className="contact-box">
                <h1>Interesting in collaborating?</h1>
                <p>I’m always open to discussing product design work or partnership opportunities.</p>
                <div className="contact-btn"><ConBtn/></div>
            </div>
        </div>
        <div className="icon-logo-fot"><AiOutlineAliwangwang/></div>
        <div className="certificate"><p>Create by <a href="https://lukols.com/">lukols.com</a> © 2021</p></div>
        </div>
    )
}

export default Contact;
