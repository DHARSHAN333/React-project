import React from 'react';
import './D.css'; 

function D() {
    const handleModelChange = (backgroundImage, modelName, sleep, cardio, range) => {
        const header = document.getElementById("header");
        const model = document.getElementById("model");
        const mphElement = document.getElementById("sleep");
        const speedElement = document.getElementById("cardio");
        const rangeElement = document.getElementById("range");

        header.style.backgroundImage = `url(${backgroundImage})`;
        model.innerHTML = modelName;
        mphElement.innerHTML = sleep;
        speedElement.innerHTML = cardio;
        rangeElement.innerHTML = range;
    };

    return (
        <div>
           
            <div className="headeriii" id="header">
            <div className="info">
                    <div>
                        <h2 id="sleep" >2 mon </h2>
                        <p style={{color:"red"}}>CALORIE</p>
                    </div>
                    <div>
                        <h2 id="cardio">B A L A N C E</h2>
                        <p style={{color:"red"}}>BMI</p>
                    </div>
                    <div>
                        <h2 id="range">200cal</h2>
                        <p style={{color:"red"}}>SLEEP</p>
                    </div>
                    <div className="line"></div>
                    
                    <div>
                        <h2 id="model">25 bmi</h2>
                    </div>
                </div>
                <nav className="navi"> 
                
                    <div className="logo">
                        <h1 style={{color:"white",fontFamily:"'Orbitron', sans-serif"}}>WORKOUT <span style={{color:"red",fontFamily:"'Orbitron', sans-serif"}}>PLANS</span></h1>
                    </div>
                    <ul>
                        <li><a href="#" style={{fontFamily:"'Orbitron', sans-serif"}} onClick={() => handleModelChange(
                            'https://www.transparentlabs.com/cdn/shop/articles/an-on-treadmill-1954524.jpg?v=1579389680',
                            
                            'B A L A N C E',
                            '200CAL',
                            '22.7 bmi',
                            '8 hr',
                        )}>WEIGHT LOSS</a></li>
                        <li><a href="#" style={{fontFamily:"'Orbitron', sans-serif"}} onClick={() => handleModelChange(
                            'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2021-12/211208-working-out-stock-mn-1310-55e1c7.jpg',
                            
                            'B A L A N C E',
                            '400CAL',
                            '26.8 bmi',
                            '8 hr',
                        )}>CARDIO</a></li>
                        <li><a href="#" style={{fontFamily:"'Orbitron', sans-serif"}} onClick={() => handleModelChange(
                            'https://steelsupplements.com/cdn/shop/articles/shutterstock_452379049_1600x.jpg?v=1602009725',
                            
                            'H E A V Y',
                            '500CAL',
                            '21.7 bmi',
                            '8 hr',
                        )}>CORE</a></li>
                        <li><a href="#" style={{fontFamily:"'Orbitron', sans-serif"}} onClick={() => handleModelChange(
                            'https://media.gq.com/photos/59a9a273dc3ba42b1cdca2e9/16:9/w_2560%2Cc_limit/2017-09_GQ-FITNESS-Stretching_3x2.jpg',
                            
                            'L I T E',
                            '200CAL',
                            '22.7 bmi',
                            '8 hr',
                        )}>ATHELETIC</a></li>
                    </ul>
                    <a style={{fontFamily:"'Orbitron', sans-serif"}} href="/Supple" className="btn">SUPPLEMENT</a>
                </nav>
                </div>
                
            </div>
        
    );
}

export default D;