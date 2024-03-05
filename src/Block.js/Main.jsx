import React, { useState } from 'react';
import './main.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Classes from './OurClasses/Classes';
import Fit from './Fit';
import Schedule from './Schedule/Schedule';
import C from './C';
import Trainers from './Trainers/Trainers';



const Main = () => {

const top=()=>{window.scrollTo(0,0);
}


  const [activities, setActivities] = useState([]);
  const [streak, setStreak] = useState(0);

  const handleDateClick = (date) => {
    const dateString = date.toLocaleDateString();
    const existingActivity = activities.find(activity => activity.date === dateString);

    if (existingActivity) {
     
      return;
    } 

  
    const newActivity = {
      date: dateString,
    };

    setActivities([...activities, newActivity]);

    const consecutiveDates = activities.filter(activity => isConsecutive(activity.date));
    setStreak(consecutiveDates.length + 1);
  };

  const isConsecutive = (dateString) => {
    const today = new Date(dateString);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    return (
      today.toDateString() === yesterday.toDateString() ||
      today.toDateString() === new Date().toDateString()

    );
  };

   
  return (
    <div style={{backgroundImage:"url('https://img.freepik.com/premium-photo/gym-training-heavy-weights-stacks-fitness-workout-row-weights-lined-up-gym_116317-10992.jpg')", backgroundSize:"cover"}}class="height" >
      <br></br><br></br> <br></br><br></br> <br></br><br></br>

      <center>
      <div class="c1">

        <h3>A Lead to your <span>FITNESS. . . .</span> Plan your day. . . .</h3><br></br>
        <h1>POWER <span>PULSE</span></h1>
        <br></br><br></br><br></br><br></br>
       <a href="/preeork" ><button  class="buttoM buttoM1"><span style={{fontFamily:"'Orbitron', sans-serif",color:"black"}} >GET STARTED</span></button></a>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
       
      <Schedule/>
      <Classes/>
     
     
      <div class="c2">
        <br></br>
        <h2 style={{textAlign:"left",fontFamily:"'Orbitron', sans-serif"}}>MEMBERSHIP <span style={{fontFamily:"'Orbitron', sans-serif"}}>PLAN</span></h2>
       
        <div class="john22" id="jo1">
              <h2 style={{color:"white",fontFamily:"unset",textAlign:"left"}}>| NORMAL <span style={{color:"rgb(227, 180, 79)",fontFamily:"unset",textAlign:"left"}}>PACK</span></h2>
              
              
                 
                <form>
                <h5 style={{color:"red"}}>NOT HAS SUPPLEMENT ACCESS</h5><br></br>
                    <br></br><br></br><button class="BButton"><span><a   style={{color:"black"}} href="/PaymentPage">$ 1.00</a></span></button>
                    
                </form>
            </div>

            <div class="john22" id="jo1">
              <h2 style={{color:"white",fontFamily:"unset",textAlign:"left"}}>| TRAINERS <span style={{color:"rgb(227, 180, 79)",fontFamily:"unset",textAlign:"left"}}>PACK</span></h2>
              
              
                
                <form>
                <h5 style={{color:"rgb(241, 203, 121)"}}>TRACKER KIT AVAILABLE</h5><br></br>
                    <br></br><br></br><button class="BButton"><span><a style={{color:"black"}} href="/PaymentPage">$ 5.00</a></span></button>
                   
                </form>
            </div>

            <div class="john22" id="jo1">
              <h2 style={{color:"white",fontFamily:"unset",textAlign:"left"}}>| PREMIUM <span style={{color:"rgb(227, 180, 79)",fontFamily:"unset",textAlign:"left"}}>PACK</span></h2>
              
              
                
                <form>
                <h5 style={{color:"rgb(241, 203, 121)"}}>ACCESS FOR SUPPLEMENTS</h5><br></br>
                    <br></br><br></br><button class="BButton"><span><a style={{color:"black"}} href="/PaymentPage">$ 10.00</a></span></button>
                   
                </form>
            </div>
       
       </div>
      </center>


<div className="fitnes-tracker-container" style={{backgroundImage:"url('https://img.freepik.com/premium-photo/gym-training-heavy-weights-stacks-fitness-workout-row-weights-lined-up-gym_116317-10992.jpg')", backgroundSize:"cover",color:"white" ,height:"1100px"}}>
  <br></br><br></br><br></br>
    <h1 className="title" style={{color:"white" ,fontSize:"90px",fontFamily:"'Orbitron', sans-serif"}}>DAILY <span  style={{color:"WHITE",fontFamily:"'Orbitron', sans-serif"}} >PROGRESS</span></h1> 
      <div className="calendar-container" >
        <Calendar onClickDay={handleDateClick} />
      </div>
      <Fit/>
      
      
    </div>
    <Trainers/>
    <C/>
    
    <div class="floating-container">
      <div><button onClick={top} class="floating-button" style={{fontFamily:"'Orbitron', sans-serif"}}>TOP</button></div>
      <div class="element-container">
      </div>
    </div>

    </div>

  )
}




export default Main
