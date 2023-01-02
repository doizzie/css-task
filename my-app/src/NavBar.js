// Task completed by Dominyka Lupeikytė. 2023. For Kicker Tech
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
      <nav id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          {navLinks}
        </ul>
    </nav>
    );
  }
