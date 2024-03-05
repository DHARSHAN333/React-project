
import React from "react";
import Socials from "./Socials";
import './TrainerCard.css';


const TrainerCard = ({ title, name, desc, img }) => (
  <div className="card">
    <img src={img} alt="trainer" />
    <h5>{title}</h5>
    <h3>{name}</h3>
    <p>{desc}</p>
    <Socials />
  </div>
);


export default TrainerCard;
