import React from 'react';
import App from '../App';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
        <h1>Login</h1>
        <Link to='/home'>
            <button className='btn btn-primary'>Login</button>
        </Link>
    </div>
    
  )
}

export default LoginPage;
