import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import './index.css';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './Menu/Menu'
import Hero from './Hero/Hero'
import HomePage from './HomePage/HomePage'
import Footer from './Footer/Footer'
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import SignUpPage from './SignUpPage/SignUpPage';
import Component from './Component/Chart';

function App(props) {


  
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Switch>
          <Route path="/AboutPage">
            <AboutPage/>
          </Route>
          <Route path="/HomePage">
            <HomePage/>
          </Route>
          <Route path="/LoginPage">
            <LoginPage/>
          </Route>
          <Route path="/SignUpPage">
            <SignUpPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div> 
      <Component/>
      <Footer/>
    </Router>
  );
}






export default App;
