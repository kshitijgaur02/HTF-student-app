import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className='container'>
        <h1>Login</h1>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className='row rowbtn'>
                <Link to='/home'>
                    <button type="submit" className='btn btn-secondary '>Login</button>
                </Link>
            </div>
            
        </form>
        
    </div>
    
  )
}

export default LoginPage;
