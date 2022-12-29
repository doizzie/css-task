import React from 'react';
import ReactDOM from 'react-dom';

export default function Box() {
    // render() {
      return (
        <div className="element">
        <div className="mainBox">
          <div className="box"><img src=""/></div>
          <h1 className="title">Lorem ipsum dolor sit amet, consectetur</h1>
          <h2 className="smallerTitle">Lorem ipsum</h2>
          <h3 className="smallest title">Lorem ipsum dolor sit</h3>
        </div>
        <div className="smallerBox">
          <form>
            <input type="text" id="search" name="search" placeholder="Placeholder..."/>
            <input type="submit" id="submit"/>
          </form>
          <div className="boxy">
            <div className="oval"><img src=""/></div>
            <div className="righter">
              <h4>Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac facilisis tellus. Suspendisse vitae lobortis augue. Sed in ante nec metus elementum rhoncus.</p>
            </div>
          </div>
          <div className="boxy">
            <div className="oval"><img src=""/></div>
            <div className="righter">
              <h4>Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac facilisis tellus. Suspendisse vitae lobortis augue. Sed in ante nec metus elementum rhoncus.</p>
            </div>
          </div>
        </div>
      </div>
      );
    // }
  };
  
//   ReactDOM.render(<Box/>, document.getElementById('app'));