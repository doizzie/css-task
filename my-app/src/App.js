import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box.js';


function App() {
  return (
    <div className="App" id="app">
      <nav>
        <a>Lorem ipsum</a>
        <a>Lorem ipsum</a>
        <a>Lorem ipsum</a>
      </nav>
      <Box/>
      <Box/>
      <Box/>
    </div>
  );
}

export default App;
