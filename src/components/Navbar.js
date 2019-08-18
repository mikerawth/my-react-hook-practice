import React from 'react';
import { NavLink } from 'react-router-dom'


function Navbar() {

  return (
    <div className="navbar">
      <ul>
        <li><NavLink to="/use-state-component">Use State Example</NavLink></li>
        <li><NavLink to="/use-effect-component">Use Effect Example</NavLink></li>
      </ul>


    </div>
  )
}

export default Navbar;