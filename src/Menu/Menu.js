import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav >
        <ul>
            <li><Link to="/HomePage">Home</Link></li>
            <li><Link to="/AboutPage">About</Link></li>
            <li><Link to="/LoginPage">Login</Link></li>
            <li><Link to="/SignUpPage">Sign Up</Link></li>
        </ul>
    </nav>
  );
}

export default Menu;
