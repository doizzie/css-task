// Task completed by Dominyka Lupeikytė. 2023. For Kicker Tech

import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box.js';
import NavBar from './NavBar.js';


function App() {
  return (
    <div className="App" id="app">
      <NavBar/>
      <Box/>
      <Box/>
      <Box/>
    </div>
  );
}

export default App;
