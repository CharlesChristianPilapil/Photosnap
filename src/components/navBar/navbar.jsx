import React, { useState } from 'react';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className='navbar'>
      <div className={`mobile-nav ${isNavVisible ? 'nav-toggle' : ''}`}>
            <ul>
            <li onClick={toggleNav}>
                <NavLink to="/Stories"> Stories </NavLink>
            </li>
            <li onClick={toggleNav}>
                <NavLink to="/Features"> Features </NavLink>
            </li>
            <li onClick={toggleNav}>
                <NavLink to="/Pricing"> Pricing </NavLink>
            </li>
            </ul>
            <div className='button' onClick={toggleNav}>
                <h4> GET AN INVITE </h4>
            </div>
      </div>

      <nav>
        <div className="nav-wrapper container x-padding">
          <div className="logo">
            <Link to="/"> Photosnap </Link>
          </div>

          <div className="ul-wrapper">
            <ul>
              <li>
                <NavLink to="/Stories"> Stories </NavLink>
              </li>
              <li>
                <NavLink to="/Features"> Features </NavLink>
              </li>
              <li>
                <NavLink to="/Pricing"> Pricing </NavLink>
              </li>
            </ul>
          </div>

          <div className={`hamburger ${isNavVisible ? 'cross' : ''}`} onClick={toggleNav}>
            <span></span>
            <span></span>
          </div>

          <div className='button'>
            <h4> GET AN INVITE </h4>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
