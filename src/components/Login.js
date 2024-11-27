// Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import { auth, provider } from './firebase';
import { signInWithPopup } from "firebase/auth";
import './login.css';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value; // Ensure this uses the correct name attribute
    console.log('Username:', username);
    console.log('Password:', password);

    if (authenticateEmail(username)) {
      console.log('Username:', username);
      console.log('Password:', password);
    } else {
      console.error('Invalid email format or email does not exist.');
    }
  };

  const authenticateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }
    const validEmails = ['test@example.com', 'user@example.com'];
    return validEmails.includes(email);
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log("User  signed in with Google");
      // You can redirect or perform actions after sign-in
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <div className='login-container'>
      <div className="form-wrapper">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input type="email" required autoComplete="email" name='username' />
            <label>Email or phone number</label>
          </div>
          <div className="form-control">
            <input type="password" required name='password' />
            <label>Password</label>
          </div>
          <button type="submit">Sign In</button>
          <div className="form-help"> 
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="/">Need help?</a>
          </div>
          <button onClick={handleGoogleSignIn} className="google-signin-button">
           Sign in with Google
          </button>
        </form>
        <p>New to GlamCart? <Link to="/signup">Sign up now</Link></p>
        <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            <a href="https://www.google.com/recaptcha/about">Learn more.</a>
        </small>
      </div>
    </div>
  );
}