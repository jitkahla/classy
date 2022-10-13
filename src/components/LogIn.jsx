import React, { useState, useEffect } from 'react';
import './SignForm.css';

const LogIn = () => {

// Result of login form
const [user, setUser] = useState({
    email: "",
    password: ""
});

// Function for submit the login form
const handleLogin = (e) => {
    e.preventDefault();
    console.log(user);

//if user email and password is not valid, setError(true)

}

// Error message shows when user try to log in with invalid data
const [error, setError] = useState(false);
const errorMesage = <div className="error">"Oops! That email and pasword combination is not valid."</div>;

/* // Calling the API
useEffect(() => {
    fetch('https://testproject.optimistinc.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user
        }),
      })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.message === "SUCCESS") {
            alert("You are logged in.");

            // else render the error mesage
        }
      });
      
  }, []); */


    return <main>

    <h1>
    Sign in to Classy.
    </h1>
    {error? errorMesage : <p>Enter your details below.</p>}
    
    <form className="sign-form" onSubmit={handleLogin}>

        <label>
        Email
        <br />
        <input type="email" id="email" required onChange={(e) => setUser({...user, email: e.target.value})} value={user.email}/>
        </label>

        <label>
        Password
        <br />
        <input type="password" id="pass" required onChange={(e) => setUser({...user, password: e.target.value})} value={user.password}/>
        </label>


        <button className='button submit' type="submit">
        SIGN IN
        </button>
    </form>

   
    </main>
}

export default LogIn;