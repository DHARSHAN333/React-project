import React, { useState } from 'react';
import './FormExample.css'

const FormExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const [isFormFilled, setIsFormFilled] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username && formData.email) {
      setIsFormFilled(true);
      setSubmittedData([...submittedData, formData]);
      setFormData({
        username: '',
        email: '',
      });
    } else {
      setIsFormFilled(false);
      console.error('Please fill out both username and email fields.');
    }
  };

  return (
    <div className="asd">
    <br/><br/><br/><br/>
    <div className="form-container">
    <h1>User detail 👤</h1>
    <br/><br/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button className="submit-btn" type="submit"><a style={{color:"white"}} href="/PaymentPage">Make Payment</a></button>
      </form>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
};

export default FormExample;
