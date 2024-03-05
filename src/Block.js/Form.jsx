import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className={`wrapper ${isSignUp ? 'animate-signUp' : 'animate-signIn'}`}>
            <div className="form-wrapper sign-up">
                <form action="">
                    <h2>Sign Up</h2>
                    <div className="input-group">
                        <input type="text" required />
                        <label htmlFor="">Username</label>
                    </div>
                    <div className="input-group">
                        <input type="email" required />
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="input-group">
                        <input type="password" required />
                        <label htmlFor="">Password</label>
                    </div>
                    <button type="submit" className="btn">Sign Up</button>
                    <div className="sign-link">
                        <p>Already have an account? <button onClick={toggleForm} className="signIn-link">Sign In</button></p>
                    </div>
                </form>
            </div>

            <div className="form-wrapper sign-in">
                <form action="">
                    <h2>Login</h2>
                    <div className="input-group">
                        <input type="text" required />
                        <label htmlFor="">Username</label>
                    </div>
                    <div className="input-group">
                        <input type="password" required />
                        <label htmlFor="">Password</label>
                    </div>
                    <div className="forgot-pass">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="sign-link">
                        <p>Don't have an account? <button onClick={toggleForm} className="signUp-link">Sign Up</button></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
