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
    </Router>
  )
}

export default App;
