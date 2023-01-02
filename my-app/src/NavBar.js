import React from 'react';
import './Nav.css';

export default function NavBar() {
    const pages = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'];
    const navLinks = pages.map(page => {
      return (
        <li><a href={'/' + page}>
          {page}
        </a></li>
      )
    });

    return (
      <nav role="navigation" id="menuToggle">
        <input type="checkbox" onClick='fixOverflow()'/>

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          {navLinks}
        </ul>
    </nav>
    );
  }

  function fixOverflow(){
    var doc = document.getElementById("app");
    if(doc.classList.contains("overflowHiddenCompletely")){
      doc.classList.remove("overflowHiddenCompletely");
    } else {
      doc.classList.add("overflowHiddenCompletely");
    }
  }