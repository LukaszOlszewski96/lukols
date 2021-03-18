import React from 'react';
import "./Contact.css";
import ConBtn from "./Button/ConBtn";

function Contact() {
    return (
        <div className="contact-conteiner">
            <div className="contact-box">
                <h1>Interesting in collaborating?</h1>
                <p>I’m always open to discussing product design work or partnership opportunities.</p>
                <div className="contact-btn"><ConBtn/></div>
            </div>
        </div>
    )
}

export default Contact;
