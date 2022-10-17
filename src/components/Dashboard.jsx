import React, { useEffect, useState } from 'react';
import ClassItem from './ClassItem';
import './Dashboard.css';

const Dashboard = () => {
    const [classes, setClasses] = useState([]);
    const [tabs, setTabs] = useState(true);
    const [classesList, setClassesList] = useState("all");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://testproject.optimistinc.com/api/classes', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'optimist_api_key': '7prQ7FbeO9bvbdPjMCl6',
                }
          })
          const data = await response.json();
          setClasses(data);
          
        }

       fetchData()
       .catch(console.error);
        }, [])

let currentDate = new Date().toJSON().slice(0, 10);
const pastClasses = classes.filter((item) => item.date < currentDate);
const futureClasses = classes.filter((item) => item.date >= currentDate);

const renderMap = () => {

if (classesList === "all") return classes.map(({ _id, classname, description, date, no_of_places, created_by}) => <ClassItem key={_id} title={classname} description={description} date={date} places={no_of_places} creator={created_by} tabs={tabs}
/>)
else if (classesList === "past") return pastClasses.map(({ _id, classname, description, date, no_of_places, created_by}) => <ClassItem key={_id} title={classname} description={description} date={date} places={no_of_places} creator={created_by} tabs={tabs}
/>)
else if (classesList === "future") return futureClasses.map(({ _id, classname, description, date, no_of_places, created_by}) => <ClassItem key={_id} title={classname} description={description} date={date} places={no_of_places} creator={created_by} tabs={tabs}
/>)
          }

const handleSelect = (e) => {
setClassesList(e.target.value);
}         

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
    <div className='dashboard-show'>
{(window.innerWidth < 600) ? 
<>
<span>SHOW: </span>
<select onChange={handleSelect}>
    <option value="all">ALL CLASSES</option>
    <option value="future">FUTURE CLASSES</option>
    <option value="past">PAST CLASSES</option>
</select>
</>
:
<><span className={classesList === "all" ? 'active' : null } onClick={() => setClassesList("all")}>ALL CLASSES</span>
<span className={classesList === "future" ? 'active' : null }onClick={() => setClassesList("future")}>FUTURE CLASSES</span>
<span className={classesList === "past" ? 'active' : null }onClick={() => setClassesList("past")}>PAST CLASSES</span>
</>}

</div>
<div>
<span className={tabs ? 'tabs active' : 'tabs'} onClick={() => setTabs(true)}></span>
<span className={tabs ? 'rows' : 'rows active'} onClick={() => setTabs(false)}></span>
</div>
</div>

<div className={(window.innerWidth > 999 && !tabs) ? 'row class-list':'class-list'}>

{renderMap()}

</div>
<button className='plus'>+</button>
</div>
}

export default Dashboard;