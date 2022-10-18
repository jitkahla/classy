import React, { useState } from 'react';
import './SignForm.css';
import { useLogin } from '../login-context';

const LogIn = () => {

// Result of login form
const [user, setUser] = useState({
    email: "",
    password: ""
});
const {setLogin} = useLogin();
const [error, setError] = useState(false);
const errorMesage = <div className="error">"Oops! That email and pasword combination is not valid."</div>;

// Function for submit the login form
const handleLogin = async (e) => {
  e.preventDefault();
    console.log(user);
    
    const optimist_api_key = '7prQ7FbeO9bvbdPjMCl6';
    try {
      const res = await fetch('https://testproject.optimistinc.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'optimist_api_key': optimist_api_key,
        },
        body: JSON.stringify(user),
      })
      if (res.status !== 200) {
        setError(true);
      }

      const data = await res.json();
        
        setLogin(data);
        
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(data));
        
        window.location.reload();
      }
    catch (exception) {console.log(res)}}
    

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