import React, { useState } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';
import './SignForm.css';

const SignForm = () => {

// State for rendering login form or signup form
const [registered, setRegistered] = useState(true);

const signText = ["Don't have account?", "Already have an account?"];
const buttonText = ["SIGN UP", "SIGN IN"];


// Successful login
const [isSubmitted, setIsSubmitted] = useState(false);


  return (
    <div className='container white'>

    <div className='logo absolute'>Classy.io</div>
    <div className="panel-container"> 
      <div className='quote'>
        <p>"Intelligence is like a four-wheel drive. It allows you to get stuck in more remote places.."
        </p>
        <hr />
        <p className='author'>Garrison Keillor</p>
        </div>
    </div>

    {/* render login or signup form */}
    {registered? <LogIn /> : <SignUp />}

    {/* switch to login or signup form */}
    <div className='signup'> 
    {registered ? signText[0] : signText[1]} 
    <button className='sign-button' onClick={() => setRegistered(!registered)}>
        {registered ? buttonText[0] : buttonText[1]}
    </button></div> 
    
    </div>
  );
};


export default SignForm;