import React from 'react';

import './nav.css';

function Nav(props) {
  return(
    <div className="nav_wrapper">Total items in cart is {props.itemCount}</div>
  ) 
}

export default Nav;