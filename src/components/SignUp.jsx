import React, { useState } from 'react';
import './SignForm.css';

const SignUp = () => {

    // Result of signup form
const [newUser, setNewUser] = useState({
    id: "",
    fname:"",
    lname:"",
    email:"",
    password:""
})

const handleSignUp = () => {

    }

    return <main>

    <h1>
    Get started absolutely free.
    </h1>
    <p>Enter your details below.</p>
    
    <form className="sign-form" onSubmit={handleSignup}>

        
        <label>
        First Name
        <br />
        <input type="text" id="fname" required />
        </label>

        <label>
        Last Name
        <br />
        <input type="text" id="lname" />
        </label>

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

        <label>
        Repeat Password
        <br />
        <input type="password" id="repass" required/>
        </label>
    

        <button className='button submit' type="submit">
        SIGN UP
        </button>
    </form>

   
    </main>
}

export default SignUp;