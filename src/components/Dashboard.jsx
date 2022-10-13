import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {

return <div className='class container'>

    
<header>
<div className='logo'>Classy.io</div>
<div className='user-controls'>
<span className='user'>TW</span>
<span className='dashboard-desktop'>Tom Watts</span>
<span className='arrow user'></span>
</div>
</header>

<div className='dashboard-controls'>
    <div>
<span className='dashboard-mobile'>SHOW: </span><span><b>ALL CLASSES</b></span><span className='dashboard-desktop'>FUTURE CLASSES</span><span className='dashboard-desktop'>PAST CLASSES</span>
<span className='arrow classes'></span>
</div>
<div>
<span className='tabs'></span>
<span className='rows'></span>
</div>
</div>

<div className='class-list'>

<div className='class-box'>
    <div className='date'>Apr 4, 2017</div>
    <h2>Class Title</h2>
    <h3>Teacher Name</h3>
    <div className='description'>About Class...</div>

    <div className='class-controls'>
    <div>
    <img src='/img/person.png' alt="Person Icon" />
    <span>9 of 31</span>
    </div>
    <button className='button'>JOIN</button>
    </div>
</div>
</div>
<button className='plus'>+</button>
</div>
}

export default Dashboard;