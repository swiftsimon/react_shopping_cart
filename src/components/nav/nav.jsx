import React from 'react';

import './nav.css';

const Nav = ({itemCount}) => {
  return(
    <nav className="nav_wrapper">
      <span>Total items in cart is {itemCount}</span>
    </nav>
  );
};

export default Nav;