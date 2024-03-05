import React from 'react';
import './about.css'; // Import CSS file

function About() {
    return (
        <main className="main"> 
            <div className="page-1">
                <div className="header">
                    
                </div>

                <div className="page-1__body containero">
                    <h2 style={{color:"white" ,fontFamily:"'Sofia Sans Condensed', sans-serif"}}>Welcome to our</h2>
                    <h1 style={{color:"#df7373" ,fontSize:"115px",fontFamily:"'Sofia Sans Condensed', sans-serif"}}>POWER <span style={{color:"red" ,fontFamily:"'Sofia Sans Condensed', sans-serif"}}>PULSE</span></h1>
                    <p style={{color:"white",fontFamily:"'Sofia Sans Condensed', sans-serif"}}>PowerPulse can help you set calorie deficit goals based on your current weight,<br/><br></br> log your food intake, plan meal prep and track your workouts.<br/><br></br>It can also help you maintain or increase your activity level or water intake.<br/> Yet as calorie trackers grow in popularity, there are dozens of similar apps to choose from.</p>
                    <br></br><br></br>
                    <p style={{color:"#df7373",fontFamily:"'Sofia Sans Condensed', sans-serif",fontSize:"30px"}}>PowerPulse can help you set calorie deficit goals based on your current weight.<br/><br></br> </p>

                    <p style={{color:"white",fontFamily:"'Sofia Sans Condensed', sans-serif"}}>A healthy eating plan gives your body the nutrients it needs every day while staying within your daily calorie goal for weight loss.<br></br> A healthy eating plan also will lower your risk for heart disease and other health conditions. </p>
                    
                    
                    <br></br>
                    
                    
                    <div class="floating2-container">
      <div><a href="/fAQPage"><button class="floating2-button" style={{fontFamily:"'Orbitron', sans-serif",color:"red"}}>FAQ</button></a></div>
      <div class="element-container">
      </div>
    </div>
                    
                    <a href="/ContactPage" className="btn">CONTACT</a>
                </div>

                
            </div>
        </main>
    );
}

export default About;