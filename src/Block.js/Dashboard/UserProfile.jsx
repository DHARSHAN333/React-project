import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <h1 style={{fontFamily:"'Orbitron', sans-serif"}}>User Profile</h1>
      <div className="profile-details">
        <div className="profile-item">
          <span className="label" style={{fontFamily:"'Orbitron', sans-serif"}}>Name:</span>
          <span className="value" style={{fontFamily:"'Orbitron', sans-serif"}}>Arun</span>
        </div>
        <div className="profile-item">
          <span className="label" style={{fontFamily:"'Orbitron', sans-serif"}}>Age:</span>
          <span className="value" style={{fontFamily:"'Orbitron', sans-serif"}}>19</span>
        </div>
        <div className="profile-item">
          <span className="label" style={{fontFamily:"'Orbitron', sans-serif"}}>Email:</span>
          <span className="value" style={{fontFamily:"'Orbitron', sans-serif"}}>arunraj10@gmail.com</span>
        </div>
        <div className="profile-item">
          <span className="label" style={{fontFamily:"'Orbitron', sans-serif"}}>Membership:</span>
          <span className="value" style={{fontFamily:"'Orbitron', sans-serif"}}>Premium</span>
        </div>
        
      </div>
    </div>
  )
}

export default UserProfile