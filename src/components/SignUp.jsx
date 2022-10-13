import React, { useState } from 'react';
import './SignForm.css';

const SignUp = () => {

    // Result of signup form
const [user, setUser] = useState({
    id: "",
    fname:"",
    lname:"",
    email:"",
    password:"",
    repassword:""
})

const [error, setError] = useState(false);

const errorMesage = <p className="error">"Oops! Passwords don't match."</p>;

const handleSignUp = (e) => {
    e.preventDefault();
    if (user.password !== user.repassword) {
// show errorMesage
setError(true);
    }
    console.log(user);
    }

    return <main>

    <h1>
    Get started absolutely free.
    </h1>
    {error? errorMesage : <p>Enter your details below.</p>}
    
    <form className="sign-form" onSubmit={handleSignUp}>

        
        <label>
        First Name
        <br />
        <input type="text" id="fname" required onChange={(e) => setUser({...user, fname: e.target.value})} value={user.fname}/>
        </label>

        <label>
        Last Name
        <br />
        <input type="text" id="lname" onChange={(e) => setUser({...user, lname: e.target.value})} value={user.lname}/>
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
        <input type="password" id="repass" required onChange={(e) => setUser({...user, repassword: e.target.value})} value={user.repassword} />
        </label>
    

        <button className='button submit' type="submit">
        SIGN UP
        </button>
    </form>

   
    </main>
}

export default SignUp;