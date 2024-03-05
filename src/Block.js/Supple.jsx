import React, { useState } from 'react';
import './Supple.css';

const Supple =() =>{
  

  return (
    <div className="fitness-tracker-container" style={{backgroundImage:"url('https://musclemotive.co/cdn/shop/collections/BurnSeries.jpg?v=1678877745')", backgroundSize:"cover"}}>
      <h1 style ={{color:"LIGHTBLUE" ,fontSize:"60px",fontFamily:"'Orbitron', sans-serif"}}>SUPPLEMENTS <span style ={{color:"white",fontFamily:"'Orbitron', sans-serif"}}>SITE</span></h1>
      <div className="activity-form" style={{backgroundColor:"#08080886", height:"100px"}}>
        <select  style ={{backgroundColor:"white" ,height:"50px",width:"1000px",borderRadius:"10px",color:"black",borderColor:"BLACK",fontFamily:"'Orbitron', sans-serif"}}>
          <option value="">SELECT SUPPLEMENT TYPE</option>
          <option value="walking">Weight gain</option>
          <option value="running">Weight loss</option>
          <option value="cycling">Sports Diet</option>
          
        </select>
       
    
      </div><br></br><br></br><br></br>
      <div className="zactivity-list">
        <h3 style ={{color:"lightblue",fontSize:"40px",fontFamily:"'Orbitron', sans-serif"}}>PRODUCTS</h3>
        <ul style={{backgroundColor:"#c66565",color:"white",fontFamily:"'Orbitron', sans-serif"}}>
        
        </ul>
      </div>
      <div  className="zactivity-container">
        <div className="zactivity"  style={{backgroundImage:"url('https://pbs.twimg.com/media/E7hq2vZUYAMn7xc.jpg')" ,backgroundSize:"cover"}}>
         <div style={{backgroundColor:"#0000008d" ,height:"80px",width:"175px"}}> <h2 style={{color:"white",fontFamily:"'Orbitron', sans-serif"}}>MUSCELE BLAZE</h2></div> 
         <a href="https://www.muscleblaze.com"><div class="triangle-right"></div></a>
        </div>




        <div className="zactivity" style={{backgroundImage:"url('https://m.media-amazon.com/images/I/51Wrnf2VGoL._AC_UF1000,1000_QL80_.jpg')" ,backgroundSize:"cover"}}>
          <div style={{backgroundColor:"#0000008d" ,height:"80px",width:"175px"}}><h2  style={{color:"white",fontFamily:"'Orbitron', sans-serif"}}>CREATINE</h2></div> 
          <a href="https://my.clevelandclinic.org/health/treatments/17674-creatine"><div class="triangle-right"></div></a>
        </div>
        <div className="zactivity"  style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5wg43BH5qSou0dGgF7gMj2_ywlb7377Xp7v8v2Hr04jCaBVRRf86Y0akfmtTgkozPOEQ&usqp=CAU')" ,backgroundSize:"cover"}}>
         <div style={{backgroundColor:"#0000008d" ,height:"80px",width:"175px"}}> <h2  style={{color:"white",fontFamily:"'Orbitron', sans-serif"}}>VEGAN PRODUCTS</h2></div> 
         <a href="https://naturaltein.in/product/creatine/"><div class="triangle-right"></div></a>
        
        </div>



        <div className="zactivity"  style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXyVEt3iXfK4pJqzWNO1UcDsxVtJIryGID8sJY3Q3c8LnFBX3Z1WhkO-W6my968HogKnc&usqp=CAU')" ,backgroundSize:"cover"}}>
          <div style={{backgroundColor:"#0000008d" ,height:"80px",width:"175px"}}> <h2  style={{color:"white",fontFamily:"'Orbitron', sans-serif"}}>WHEY PROTIEN</h2></div> 
          <a href ="https://nutrabay.com/product-category/bodybuilding/proteins/whey-proteins/"><div class="triangle-right"></div></a>
        </div>




        <div className="zactivity"  style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5zljBwTYHdUQVKx6tRLXIuCGgl7m61meumP_EHy0gv-BwuPAxCT8CwiQaQFOKDx2ZPk&usqp=CAU')" ,backgroundSize:"cover"}}>
         <div style={{backgroundColor:"#0000008d" ,height:"80px",width:"175px"}} > <h2  style={{color:"white",fontFamily:"'Orbitron', sans-serif"}}>PROGANIQ</h2></div> 
         <a href="https://prorganiq.com/"><div class="triangle-right"></div></a>
        </div>


        <div className="zactivity"  style={{backgroundImage:"url('https://myvaluefitness.com/cdn/shop/products/custom_resized_039cfb0d-15dd-4ab0-a3b4-c60521239c2d_1024x.jpg?v=1678327329')" ,backgroundSize:"cover"}}>
         <div style={{backgroundColor:"#0000008d" ,height:"80px",width:"175px"}}><h2  style={{color:"white",fontFamily:"'Orbitron', sans-serif"}}>PRE SUPPLEMENT</h2></div> 
         <a href="https://nutrabay.com/product-category/bodybuilding/bodybuilding-essentials/pre-workout/"><div class="triangle-right"></div></a>
        </div>


      </div><br></br><br></br><br></br><br></br>
      <div style={{backgroundColor:"black", backgroundSize:"cover"}} className="zsummary">
        <h2 style={{color:"yellow",fontFamily:"'Orbitron', sans-serif"}}> ⚠️NOTE : Kindly intake the supplements as per the trainers instruction</h2>
        
        <h3 style={{color:"red",fontFamily:"'Orbitron', sans-serif"}}>OVERTAKE CAN LED TO VARIOUS HEALTH FAILS. . . .</h3>
      </div>
      
    </div>
  );
}

export default Supple;