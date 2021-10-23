import React from 'react';
import Nav from './component/Nav';
import LoginPage from './component/LoginPage';
import SignupPage from './component/SignupPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './component/LandingPage';
import HomePage from './component/HomePage';
import FinanceTracker from './component/FinanceTracker';
import TaskTracker from './component/TaskTracker';
import Calendar from './component/Calendar';
import Welcome from './component/Welcome';


function App() {
  return (
    <Router>
      <div className='container'>
        <Nav />
        <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/signup" component={SignupPage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/FinanceTracker" component={FinanceTracker}/>
          <Route path="/TaskTracker" component={TaskTracker}/>
          <Route path="/Schedule" component={Calendar}/>
          <Route path="/welcome" component={Welcome}/>
        </Switch>
                 
      </div>
    </Router>
    
  )
}

export default App;
