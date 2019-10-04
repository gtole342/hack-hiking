import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'mapbox-gl/dist/mapbox-gl.css';
import Content from "./Content";

const App = () => {
  return (
    <Router>
      <Content />
    </Router>
  )
}

export default App;
