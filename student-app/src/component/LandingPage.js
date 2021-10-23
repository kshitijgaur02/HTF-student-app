import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './LandingPage.css';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div className="container-fluid containerLanding">
      <div className='row rowbtn'>
        <Link to='/login'>
            <button className='btn btn-primary loginbtn'>Login</button>
        </Link>
      </div>  
      <div className='row rowbtn'>
        <Link to='/signup'>
            <button className='btn btn-primary signupbtn'>Sign Up</button>
        </Link>
      </div>
        
      
        
    </div>    
        
    
  )
}

export default LandingPage;
