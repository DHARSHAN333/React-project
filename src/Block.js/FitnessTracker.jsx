import React, { useState } from 'react';
import './FitnessTracker.css';

function FitnessTracker() {
  const [activities, setActivities] = useState([]);
  const [exerciseType, setExerciseType] = useState('');
  const [duration, setDuration] = useState(0);
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [distance, setDistance] = useState(0);
  const [activeTime, setActiveTime] = useState(0);
  const [waterIntake, setWaterIntake] = useState(0);
  const [sleepDuration, setSleepDuration] = useState(0);

  const handleIncrementSteps = () => {
    setSteps(prevSteps => prevSteps + 1);
    setCalories(prevCalories => prevCalories + 0.05); 
  };

  const handleAddActivity = (activityType, value) => {
    switch (activityType) {
      case 'distance':
        setDistance(prevDistance => prevDistance + parseFloat(value));
        break;
      case 'activeTime':
        setActiveTime(prevActiveTime => prevActiveTime + parseFloat(value));
        break;
      case 'waterIntake':
        setWaterIntake(prevWaterIntake => prevWaterIntake + parseFloat(value));
        break;
      case 'sleepDuration':
        setSleepDuration(prevSleepDuration => prevSleepDuration + parseFloat(value));
        break;
      default:
        break;
    }
  };

  const handleAddExercise = () => {
    const activity = {
      exerciseType,
      duration
    };
    setActivities([...activities, activity]);
    setExerciseType('');
    setDuration(0);
  };

  const totalDuration = activities.reduce((total, activity) => total + activity.duration, 0);
  const totalActivities = steps + distance + activeTime + waterIntake + sleepDuration;

  const handleReset = () => {
    setSteps(0);
    setCalories(0);
    setDistance(0);
    setActiveTime(0);
    setWaterIntake(0);
    setSleepDuration(0);
    setActivities([]);
  };

  return (
    <div className="fitness-tracker-container" style={{backgroundImage:"url('https://img.freepik.com/premium-vector/abstract-hexagon-dark-red-background_5205-122.jpg')", backgroundSize:"cover"}}>
      <h1 style ={{fontFamily:"'Orbitron', sans-serif",color:"red" ,fontSize:"60px"}}>FITNESS <span style ={{fontFamily:"'Orbitron', sans-serif",color:"white"}}>TRACKER</span></h1>
      <div className="activity-form" style={{backgroundColor:"#08080886", height:"160px"}}>
        <select  style ={{backgroundColor:"black" ,height:"50px",width:"1000px",borderRadius:"10px",color:"white",borderColor:"BLACK",fontFamily:"'Orbitron', sans-serif"}}value={exerciseType} onChange={(e) => setExerciseType(e.target.value)}>
          <option value="">Select Exercise Type</option>
          <option value="walking">Walking</option>
          <option value="running">Running</option>
          <option value="cycling">Cycling</option>
          
        </select>
        <input
           style ={{backgroundColor:"black" ,height:"50px",width:"400px",borderRadius:"10px",color:"white",borderColor:"BLACK",fontFamily:"'Orbitron', sans-serif"}}
          type="number"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          placeholder="Duration (minutes)"
        /><br></br><br></br>
        <button style={{fontFamily:"'Orbitron', sans-serif"}} class ="Click Click1" onClick={handleAddExercise}>Add Exercise</button>
      </div><br></br><br></br><br></br>
      <div className="activity-list">
        <h2 style ={{color:"red",fontSize:"40px",fontFamily:"'Orbitron', sans-serif"}}>EXCERCISE <span style={{color:"white",fontFamily:"'Orbitron', sans-serif"}}>LIST</span></h2>
        <ul style={{backgroundColor:"#c66565",color:"white",fontFamily:"'Orbitron', sans-serif"}}>
          {activities.map((activity, index) => (
            <li key={index}>
              {activity.exerciseType} - {activity.duration} minutes
            </li>
          ))}
        </ul>
      </div>
      <div  className="activity-container">
        <div className="activity"  style={{backgroundImage:"url('https://images.assetsdelivery.com/compings_v2/maulejobs/maulejobs2201/maulejobs220100156.jpg')" ,backgroundSize:"cover"}}>
          <h2 style={{color:"white",fontFamily:"'Orbitron', sans-serif"}}>REP: {steps}</h2>
          <button style={{fontFamily:"'Orbitron', sans-serif"}} class ="Click Click1" onClick={handleIncrementSteps}>Increment Steps</button>
        </div>
        <div className="activity" style={{backgroundImage:"url('https://images.assetsdelivery.com/compings_v2/maulejobs/maulejobs2201/maulejobs220100156.jpg')" ,backgroundSize:"cover"}}>
          <h2  style={{color:"white",fontFamily:"'Orbitron', sans-serif"}}>Calories Burned: {calories.toFixed(2)}</h2>
        </div>
        <div className="activity"  style={{backgroundImage:"url('https://images.assetsdelivery.com/compings_v2/maulejobs/maulejobs2201/maulejobs220100156.jpg')" ,backgroundSize:"cover"}}>
          <h2  style={{color:"white",fontFamily:"'Orbitron', sans-serif"}}>Distance Covered (km): {distance.toFixed(2)}</h2>
          <input
            style={{backgroundColor:"red" ,color:"white",height:"50px",width:"190px",fontsize:"40px",borderColor:"rgb(99, 9, 9)",borderRadius:"10px",fontFamily:"'Orbitron', sans-serif"}}
            type="number"
            placeholder="Enter distance km"
            onChange={(e) => handleAddActivity('distance', e.target.value)}
          />
        </div>
        <div className="activity"  style={{backgroundImage:"url('https://images.assetsdelivery.com/compings_v2/maulejobs/maulejobs2201/maulejobs220100156.jpg')" ,backgroundSize:"cover"}}>
          <h2  style={{color:"white",fontFamily:"'Orbitron', sans-serif"}}>Active Time (minutes): {activeTime}</h2>
          <input
                     style={{backgroundColor:"red" ,color:"white",height:"50px",width:"190px",fontsize:"40px",borderColor:"rgb(99, 9, 9)",borderRadius:"10px",fontFamily:"'Orbitron', sans-serif"}}
            type="number"
            placeholder="Enter active time in minutes"
            onChange={(e) => handleAddActivity('activeTime', e.target.value)}
          />
        </div>
        <div className="activity"  style={{backgroundImage:"url('https://images.assetsdelivery.com/compings_v2/maulejobs/maulejobs2201/maulejobs220100156.jpg')" ,backgroundSize:"cover"}}>
          <h2  style={{color:"white",fontFamily:"'Orbitron', sans-serif"}}>Water Intake (liters): {waterIntake.toFixed(2)}</h2>
          <input
                      style={{backgroundColor:"red" ,color:"white",height:"50px",width:"190px",fontsize:"40px",borderColor:"rgb(99, 9, 9)",borderRadius:"10px",fontFamily:"'Orbitron', sans-serif"}}
            type="number"
            placeholder="Enter water intake in liters"
            onChange={(e) => handleAddActivity('waterIntake', e.target.value)}
          />
        </div>
        <div className="activity"  style={{backgroundImage:"url('https://images.assetsdelivery.com/compings_v2/maulejobs/maulejobs2201/maulejobs220100156.jpg')" ,backgroundSize:"cover"}}>
          <h2  style={{color:"white",fontFamily:"'Orbitron', sans-serif"}}>Sleep Duration (hours): {sleepDuration.toFixed(2)}</h2>
          <input
                      style={{backgroundColor:"red" ,color:"white",height:"50px",width:"190px",fontsize:"40px",borderColor:"rgb(99, 9, 9)",borderRadius:"10px",fontFamily:"'Orbitron', sans-serif"}}
            type="number"
            placeholder="Enter sleep duration in hours"
            onChange={(e) => handleAddActivity('sleepDuration', e.target.value)}
          />
        </div>
      </div><br></br><br></br><br></br><br></br>
      <div style={{backgroundImage:"url('https://www.shutterstock.com/image-photo/fitness-woman-running-over-red-260nw-1924263845.jpg')", backgroundSize:"cover"}} className="summary">
        <h2 style={{fontFamily:"'Orbitron', sans-serif"}}>TOTAL WORK-OUT: {totalActivities.toFixed(2)}</h2>
        <h2 style={{fontFamily:"'Orbitron', sans-serif"}}>TOTAL DURATION: {totalDuration} minutes</h2>
      </div>
      <button style={{fontFamily:"'Orbitron', sans-serif"}} class ="Click Click1" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default FitnessTracker;