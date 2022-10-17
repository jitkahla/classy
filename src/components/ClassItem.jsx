import React, { useState } from "react";

const ClassItem = ({title, description, date, places, creator, tabs}) => {


    const shortDescription = description.substring(0,30) + '...';


    return <div className={(window.innerWidth > 999 && !tabs) ? 'row class-box': 'class-box'}>
    {tabs && <div className='date'>{date}</div>}
    <h2>{title}</h2>
    {tabs && <h3>{creator}</h3>}
    <div className='description'>{tabs ? description : shortDescription}</div>

    <div className='class-controls'>
    <div className={(window.innerWidth > 999 && !tabs) ? 'row class-numbers': 'class-numbers'}>
    {tabs? <img src='/img/person.png' alt="Person Icon" /> : <div className='date'>{date}</div>}
    <span>{places} of 31</span>
    </div>
    <button className='button'>JOIN</button>
    </div>
</div>
}

export default ClassItem;