import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <Link to='/home' style={{ textDecoration: 'none' }}>
        <span class="navbar-brand mb-0 h1 NavText">Student App</span>
      </Link>
    </nav>
  )
}

export default Nav;
