import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div>
        <h1>Home</h1>
        <Link to='/FinanceTracker'>
            <button className='btn btn-primary'>Finance Tracker</button>
        </Link>
        <Link to='/TaskTracker'>
            <button className='btn btn-primary'>Task Tracker</button>
        </Link>
        <Link to='/Schedule'>
            <button className='btn btn-primary'>Schedule</button>
        </Link>
    </div>    
        
    
  )
}

export default HomePage;