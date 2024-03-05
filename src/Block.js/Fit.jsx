import React from 'react';
import './Fit.css';

const Fit = () => {
  const recentExerciseData = [
    { type: 'WALK', duration: '16 minutes', calories: '122 cals', bpm: '88 bpm avg' },
    { type: 'JOG', duration: '22 minutes', calories: '214 cals', bpm: '98 bpm avg' },
    { type: 'CYCLE', duration: '23 minutes', calories: '224 cals', bpm: '89 bpm avg' },
  ];

  const vitalsData = {
    restingHeartRate: '84 bpm',
    weightLossGoal: '3.9 lbs',
  };

  const sleepData = {
    awake: '6 hr 41 min',
    restless: '2x',
    totalSteps: '25,000 steps',
  };

  return (
    <div>
    <div className="app-container">
      <header className="header">
        <h1 style={{color:"red"}}>TODAY - <span style={{color:"white"}}>MARCH 4,2024</span></h1>
      </header>
      <main className="main-content">
        <section className="friends-section">
          <h2>F R I E N D S</h2>
          <p style={{color:"orange"}}>You</p>
          <p style={{color:"orange"}}>41,406</p>
         <a href="https://www.facebook.com"><button className='Kutton'>Invite</button></a>
          <button className='Kutton'>Explore</button>
         <a href="https://mail.google.com"> <button className='Kutton'>Send Email</button></a>
          <p style={{color:"lightblue"}}>Last Sync: just now</p>
        </section>
        <section className="recent-exercise-section">
          <h2>R E C E N T</h2><br></br>
          <ul className="exercise-list">
            {recentExerciseData.map((exercise, index) => (
              <li key={index}>
                <strong>{exercise.type}</strong> - {exercise.duration} - {exercise.calories} - {exercise.bpm}
              </li>
            ))}
          </ul>
        </section>
        <section className="vitals-section">
          <h2>V I T A L S</h2>
          <p style={{color:"lightblue"}}>Resting Heart Rate: {vitalsData.restingHeartRate}</p>
          <p style={{color:"lightblue"}}>Weight Loss Goal: {vitalsData.weightLossGoal} lbs</p>
        </section>
        <section className="sleep-section">
          <h2>S L E E P</h2>
          <p style={{color:"lightblue"}}>Awake: {sleepData.awake}</p>
          <p style={{color:"lightblue"}} >Restless: {sleepData.restless}</p>
          <p style={{color:"lightblue"}}>Total Steps: {sleepData.totalSteps}</p>
        </section>
      </main>
    </div>
    </div>
  );
};

export default Fit;