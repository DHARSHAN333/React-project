import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './SignUp.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Here you can implement your login logic
      console.log('Form submitted with:', formData);
      // Reset form fields after successful submission
      setFormData({
        email: '',
        password: '',
      });
    }
  };

  return (
    <div style={{backgroundImage:"url('https://img.freepik.com/premium-photo/dark-gym-with-red-wall-black-bar-that-says-gym_876956-1222.jpg')", backgroundSize:"cover"}} class="heighttt" > 
    <div className="root">
      <div className="formContainer">
        <h2 style={{fontFamily:"'Orbitron', sans-serif"}}>LOG<span style={{fontFamily:"'Orbitron', sans-serif"}}>IN</span></h2>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            className="textField"
            label="EMAIL"
            variant="outlined"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          <br/>
          
          <TextField
            className="textField" 
            label="Password"
            variant="outlined"
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
          <br/>
        <a href="/preeork">
        <Button
          type="submit"
          style={{backgroundColor :"lightred"}}
        >
         <span style={{fontFamily:"'Orbitron', sans-serif",color:"red"}}>LOG IN</span>
        </Button>
          </a>
          <a href="/signUp">
          <Button
            style={{backgroundColor :"lightred"}}
          >
           <span style={{fontFamily:"'Orbitron', sans-serif"}}> NO ACCOUNT? <span style={{fontFamily:"'Orbitron', sans-serif",color:"red"}}>SIGN IN</span></span>
          </Button>
          </a>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
