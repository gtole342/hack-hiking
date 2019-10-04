<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'mapbox-gl/dist/mapbox-gl.css';
import Content from "./Content";

const App = () => {
  return (
    <Router>
      <Content />
=======
import React, { useState } from 'react'
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

// Custom Components
import Nav from './components/Nav'
import Routes from "./components/Routes"
import Footer from './components/Footer'

const App = () => {

  return (
    <Router>
      <div>
        <Nav />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
>>>>>>> c2e70b1940eeef0441295930e5bd869adfeacae8
    </Router>
  )
}

export default App;
