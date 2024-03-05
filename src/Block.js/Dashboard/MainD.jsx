import React from 'react';
import './MainD.css';
import UserProfile from './UserProfile';
import NutritionGuidance from './NutritionGuidance';
import WorkoutTracker from './WorkoutTracker';

const Main = () => {
  return (
    <div className="app" style={{backgroundImage:"url('https://img.freepik.com/premium-vector/abstract-hexagon-dark-red-background_5205-122.jpg')", backgroundSize:"cover"}}>
      <h1 style={{fontFamily:"'Orbitron', sans-serif"}}>Fitness <span style={{fontFamily:"'Orbitron', sans-serif"}}>Dashboard</span></h1>
      <div className="dashboard">
        <UserProfile />
        <WorkoutTracker />
        <NutritionGuidance />
      </div>
    </div>
  )
}

export default Main