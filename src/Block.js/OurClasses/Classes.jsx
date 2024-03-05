
import React, { useState } from "react";
import LinksContainer from "./LinksContainer";
import Results from "./Results";
import Container from "../Container";
import './Classes.css'

const Classes = ({ text }) => {
  const [training, setTraining] = useState("FirstClass");

  return (
    <section className="ourClasses" id="ourClasses">
      <h2 style={{fontFamily:"'Orbitron', sans-serif"}}> 
        OUR <span style={{fontFamily:"'Orbitron', sans-serif"}}>CLASSES</span>
      </h2>
    
      <p>
        FITNESS PROGRAMME GIVES YOU IDEA ABOUT HOW TO START
        <br />
         Kindly use it. . . .
      </p>
      <Container>
        <LinksContainer setTraining={setTraining} training={training} />
        <Results training={training} />
      </Container>
    </section>
  );
};

export default Classes;
