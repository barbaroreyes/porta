import React from 'react';
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className="nav_container">
      <div></div>
      <div></div>
      <div></div>
      <nav className="regular_nav">
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        
      </nav>
    </div>
  );
}

export default Nav;
