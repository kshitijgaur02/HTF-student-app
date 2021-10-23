import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './HomePage.css';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className='container'>
      <div className='row'>
        <Link to='/FinanceTracker'>
            <button className='btn btn-info btntext'>Finance Tracker</button>
        </Link>
      </div>  
        
      <div className='row'>
        <Link to='/TaskTracker'>
            <button className='btn btn-info btntext'>Task Tracker</button>
        </Link>
      </div>

      <div className='row'>
        <Link to='/Schedule'>
            <button className='btn btn-info btntext'>Schedule</button>
        </Link>
      </div>  

      <div className='row logoutrow'>
        <Link to='/'>
            <button className='btn btn-dark'>Log Out</button>
        </Link>
      </div> 
        
    </div>    
        
    
  )
}

export default HomePage;