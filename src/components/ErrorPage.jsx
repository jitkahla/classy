import React from "react";
import './ErrorPage.css';
import { Navigate, useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();

    return <div className='container white'>

    <div className='logo absolute'>Classy.io</div>
    <div className="panel-container"> 
      <div className='quote'>
        <p>"Intelligence is like a four-wheel drive. It allows you to get stuck in more remote places.."
        </p>
        <hr />
        <p className='author'>Garrison Keillor</p>
        </div>
    </div>

    <main>

    <h1>
    Something went wrong.
    </h1>
    <p>Seems like someone didn’t study hard enough in programming class! Please press the refresh button and everything should be fine again.</p>
    <button className='button refresh' onClick={() => navigate('/')}>
        REFRESH
        </button>
    </main>
    </div>
}

export default ErrorPage;