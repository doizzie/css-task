import React from 'react';
import ReactDOM from 'react-dom';
import OvalBoxy from './OvalBoxy';

export default function Box() {
      return (
        <div className="element">
        <div className="mainBox">
          <div className="box"><img src=""/></div>
          <div><h1 className="title">Lorem ipsum dolor sit amet, consectetur</h1>
          <h2 className="smallerTitle">Lorem ipsum</h2>
          <h3 className="smallestTitle">Lorem ipsum dolor sit</h3></div>
          
        </div>
        <div className="smallerBox">
          <form>
            <input type="text" id="search" name="search" placeholder="Placeholder..."/>
            <button type="submit" id="submit">Submit</button>
          </form>
          <OvalBoxy/>
          <OvalBoxy/>
          <OvalBoxy/>
          <OvalBoxy/>
          <OvalBoxy/>
          <OvalBoxy/>
          <OvalBoxy/>
          <OvalBoxy/>
          <OvalBoxy/>
        </div>
      </div>
      );
  };
  