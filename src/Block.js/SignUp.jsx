import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './SignUp.css'


const SignUp = () => {
  
  
  return (
    <div style={{backgroundImage:"url('https://img.freepik.com/premium-photo/dark-gym-with-red-wall-black-bar-that-says-gym_876956-1222.jpg')", backgroundSize:"cover"}}class="heighttt" > 
    <div className="root">
      <div className="formContainer">
        <h2 style={{fontFamily:"'Orbitron', sans-serif"}}>SIGN <span  style={{fontFamily:"'Orbitron', sans-serif"}}>UP</span></h2>
        <form className="form"  >
          <TextField
            className="textField"
            label="Full Name"
            variant="outlined"
            id="fullname"
            name="fullname"
           
            fullWidth
          />
          <br/>
          <TextField
            className="textField"
            label="Email"
            variant="outlined"
            id="email"
            name="email"
          
            fullWidth
          /><br/>
          <TextField
            className="textField" 
            label="Password"
            variant="outlined"
            id="password"
            name="password"
            type="password"
            fullWidth
          /><br/>
          <TextField
            className="textField"
            label="Confirm Password"
            variant="outlined"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            fullWidth
          /><br/>
          
          <a href="/Preeork">
          <Button
            style={{backgroundColor :"lightred"}}
          >
           <span style={{fontFamily:"'Orbitron', sans-serif",color:"red"}}>SIGN IN</span>
          </Button>
          </a>
        </form>

        


      </div>
    </div>
    </div>
  );
};

export default SignUp;