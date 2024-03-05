
import React from "react";
import Output from "./Output";
import './Results.css'


const Results = ({ training }) => (
  <div  className="results">
    {training === "FirstClass" && (
      <Output
        title="First Training Class"
        info="Evidence has shown that practicing and improving fitness has positive effects on human body."
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhCVmJxrLQh76sC3SNFZItpigcQTPg9iiDaA&usqp=CAU"
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="Second Training Class"
        info="In children and adolescents, the effects of practicing regular physical activity can give a positive base for a healthy future life. Aerobic training especially it has been shown in improving cardiovascular fitness."
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSqz_Cek1IxaAgJXIw_7BreE_GNM1RRtbF7w&usqp=CAU"
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Third Training Class"
        info="In children and adolescents, the effects of practicing regular physical activity can give a positive base for a healthy future life. Aerobic training especially it has been shown in improving cardiovascular fitness."
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEiIqWy6HCuPMt7VLcZOwfu8b7S5L_8EU69Q&usqp=CAU"
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="Fourth Training Class"
        info="In children and adolescents, the effects of practicing regular physical activity can give a positive base for a healthy future life. Aerobic training especially it has been shown in improving cardiovascular fitness."
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPSF68U14Gyp3cc64L2ox7C7VtrXL-uwUSg&usqp=CAU"
      />
    )}
  </div>
);


export default Results;
