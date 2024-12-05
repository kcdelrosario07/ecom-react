import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='login-signUp'>
      <div className="login-signUp-container">
        <h1>Sign Up</h1>
        <div className="login-signUp-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="login-signUp-login">
          Already have an account? 
          <span>Login here</span>
        </p>
        <div className="login-signUp-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp