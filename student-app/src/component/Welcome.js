import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


function Welcome() {
  return (
    <div>
      <h1>Welcome To Student App</h1>
      <p>Utilise the tools provided by the Student App to optimize your
        finances and time management.
      </p>
      <h3>
        The Finance Tracker
      </h3>
      <p>The Finance Traker tool will allow you to enter your budget/allowance and
        your expenses to keep a track of how much you spend and also your expense
        history.  
      </p> 
      <h3>
        The Task Tracker
      </h3>
      <p>The Task Tracker will allow you to add tasks that need to be done 
        and tick off the one's that have been completed
      </p>
      <h3>The Scheduler</h3>
      <p>The Scheduler allows you to upload your weekly schedule into the Calendar
        that's been provided.
      </p>
      <Link to='/home'>
            <button className='btn btn-primary btntext'>Explore</button>
      </Link>
    </div>
    
  )
}

export default Welcome;