import React, { useState } from 'react';
import './WorkoutTracker.css';

const WorkoutTracker = () => {

  const [workouts, setWorkouts] = useState([]);

  const addWorkout = () => {
    const newWorkout = {
      id: workouts.length + 1,
      date: new Date().toLocaleDateString(),
      exercise: 'Push-ups',
      sets: 3,
      reps: 10
    };
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <div className="workout-tracker">
      <h1 style={{fontFamily:"'Orbitron', sans-serif"}}>Workout Tracker</h1>
      <button class="button"onClick={addWorkout} style={{fontFamily:"'Orbitron', sans-serif"}}> + A D D</button>
      <div className="workout-list">
        {workouts.map(workout => (
          <div key={workout.id} className="workout-item">
            <div style={{fontFamily:"'Orbitron', sans-serif"}}><strong style={{fontFamily:"'Orbitron', sans-serif"}}>Date:</strong> {workout.date}</div>
            <div style={{fontFamily:"'Orbitron', sans-serif"}}><strong style={{fontFamily:"'Orbitron', sans-serif"}}>Exercise:</strong> {workout.exercise}</div>
            <div style={{fontFamily:"'Orbitron', sans-serif"}}><strong style={{fontFamily:"'Orbitron', sans-serif"}}>Sets:</strong> {workout.sets}</div>
            <div style={{fontFamily:"'Orbitron', sans-serif"}}><strong style={{fontFamily:"'Orbitron', sans-serif"}}>Reps:</strong> {workout.reps}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkoutTracker