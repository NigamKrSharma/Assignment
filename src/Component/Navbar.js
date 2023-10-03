import React from 'react';
import logo from '../Assets/logo.png';

const Navbar = () => {
  return (
    <header className='header'>
      <nav className="navbar">
          <img
          className='logo'
            src={logo}
            alt="logo"
          />
    
          <ul className="nav-link">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>

            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        <button className="sign-up-btn">sing up</button>
      </nav>
    </header>
  );
}

export default Navbar;
