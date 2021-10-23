import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div>
        <Link to='/login'>
            <button className='btn btn-primary'>Login</button>
        </Link>
        <Link to='/signup'>
            <button className='btn btn-primary'>Sign Up</button>
        </Link>
    </div>    
        
    
  )
}

export default LandingPage;
