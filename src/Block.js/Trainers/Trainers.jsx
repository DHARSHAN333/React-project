
import React from "react";
import TrainerCard from "./TrainerCard.jsx";
import Container from "../Container.jsx";
import './Trainers.css';


const Trainers = () => (
  <section  className="trainers" id="trainers">
    <h2 style={{textAlign:"left",fontFamily:"'Orbitron', sans-serif"}}>
      EXPERT <span style={{fontFamily:"'Orbitron', sans-serif"}}>TRAINERS</span>
    </h2>
    
    
    <Container>
    <TrainerCard
        title="Power Trainer"
        name="Paul D. Newman"
        desc="From form correction to motivation injection, we sculpt champions."
        img={"https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/08/Benefits-of-Being-a-Personal-Trainer-scaled.jpg?fit=2560%2C1682&ssl=1"}
      />
       <TrainerCard
        title="Muscele Trainer"
        name="David strauss"
        desc="From form correction to motivation injection, we sculpt champions."
        img={"https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/08/Benefits-of-Being-a-Personal-Trainer-scaled.jpg?fit=2560%2C1682&ssl=1"}
      />
      <TrainerCard
        title="Physio Trainer"
        name="John Abraham"
        desc="From form correction to motivation injection, we sculpt champions."
        img={"https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/08/Benefits-of-Being-a-Personal-Trainer-scaled.jpg?fit=2560%2C1682&ssl=1"}
      />
        <TrainerCard
        title="Dietian"
        name="Devi laskshni "
        desc="From form correction to motivation injection, we sculpt champions."
        img={"https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/08/Benefits-of-Being-a-Personal-Trainer-scaled.jpg?fit=2560%2C1682&ssl=1"}
      />
    </Container>
  </section>
);

export default Trainers;
