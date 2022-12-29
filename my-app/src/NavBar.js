import React from 'react';

export default function NavBar() {
    const pages = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }