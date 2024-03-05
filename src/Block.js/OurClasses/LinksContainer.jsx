
import React from "react";
import './LinksContainer.css'

const LinksContainer = ({ setTraining, training }) => (
  <div  className="linksContainer">
    <button
      className={training === "FirstClass" ? "active" : ""}
      onClick={() => setTraining("FirstClass")}
    >
      <img src="https://i.pinimg.com/originals/f0/89/cd/f089cd1e0f570f5f91c55adca2ddf078.png" alt="dumbbell" width="50" height="50"/> First Training Class
    </button>
    <button
      className={training === "SecondClass" ? "active" : ""}
      onClick={() => setTraining("SecondClass")}
    >
      <img src="https://i.pinimg.com/originals/f0/89/cd/f089cd1e0f570f5f91c55adca2ddf078.png" alt="dumbbell" width="50" height="50"/> Second Training Class
    </button>
    <button
      className={training === "ThirdClass" ? "active" : ""}
      onClick={() => setTraining("ThirdClass")}
    >
      <img src="https://i.pinimg.com/originals/f0/89/cd/f089cd1e0f570f5f91c55adca2ddf078.png" alt="dumbbell" width="50" height="50"/> Third Training Class
    </button>
    <button
      className={training === "FourthClass" ? "active" : ""}
      onClick={() => setTraining("FourthClass")}
    >
      <img src="https://i.pinimg.com/originals/f0/89/cd/f089cd1e0f570f5f91c55adca2ddf078.png" alt="dumbbell" width="50" height="50"/> Fourth Training Class
    </button>
    
  </div>
);


export default LinksContainer;
