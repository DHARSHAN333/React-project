import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <h1 style={{fontFamily:"'Orbitron', sans-serif",color:"red"}}>CONTACT US</h1>
            <p style={{fontFamily:"'Orbitron', sans-serif",color:"white"}}>THANK YOU!!!  for your interest in contacting us. We value your feedback and inquiries.</p>
            <br></br><br></br>
            <form className="contact-form">
                <label style={{fontFamily:"'Orbitron', sans-serif",color:"white"}}>NAME:</label>
                <input type="text" name="name" />

                <label style={{fontFamily:"'Orbitron', sans-serif",color:"white"}}>EMAIL:</label>
                <input type="email" name="email" />

                <label style={{fontFamily:"'Orbitron', sans-serif",color:"white"}} >SUBJECT:</label>
                <input type="text" name="subject" />

                <label style={{fontFamily:"'Orbitron', sans-serif",color:"white"}}>MESSAGE:</label>
                <textarea name="message"></textarea>

                <button type="submit" style={{fontFamily:"'Orbitron', sans-serif",color:"black"}}>SEND</button>
            </form>

            <div className="contact-info">
                <h2 style={{fontFamily:"'Orbitron', sans-serif",color:"red"}}>CONTACT INFO:</h2><br></br>
                <p style={{fontFamily:"'Orbitron', sans-serif",color:"white"}}>Email: powerpulse@gmail.com</p>
                <p style={{fontFamily:"'Orbitron', sans-serif",color:"white"}}>Phone: 9677512068</p>
                <p style={{fontFamily:"'Orbitron', sans-serif",color:"white"}}>Address: COIMBATORE</p>
                
            </div>

           

            <div className="feedback-section">
                <h2 style={{fontFamily:"'Orbitron', sans-serif",color:"red"}}>FEEDBACK:</h2>
                <p style={{fontFamily:"'Orbitron', sans-serif",color:"YELLOW"}}>We appreciate your feedback! Let us know how we're doing.</p>
                {/* Add feedback form or links here */}
                <form className="contact-form">
                <label style={{fontFamily:"'Orbitron', sans-serif",color:"black"}} >SUBJECT:</label>
                <input type="text" name="subject" />
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
