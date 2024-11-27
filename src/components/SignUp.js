// SignUp.js
import React from 'react';
import './signup.css'; // Add your CSS file for styling

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-up logic here
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your sign-up logic (e.g., API call) here
  };

  return (
    <div className='signup-container'>
      <div className="form-wrapper">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input type="email" required name='email' />
            <label>Email</label>
          </div>
          <div className="form-control">
            <input type="password" required name='password' />
            <label>Password</label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/login">Sign in now</a></p>
      </div>
    </div>
  );
}