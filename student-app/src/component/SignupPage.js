import React from 'react';
import './SignupPage.css';
import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div className='container'>
        <h1>Sign Up</h1>
        <form>
          <div class="row">
            <div class="col">
              <label >First Name</label>
              <input type="text" class="form-control" placeholder="First name"/>
            </div>
            <div class="col">
              <label >Last Name</label>
             <input type="text" class="form-control" placeholder="Last name"/>
            </div>
          </div>
          <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className='row rowbtn'>
                <Link to='/welcome'>
                    <button type="submit" className='btn btn-secondary '>Sign Up</button>
                </Link>
            </div>
        </form>
    </div>
    
  )
}

export default SignupPage;
