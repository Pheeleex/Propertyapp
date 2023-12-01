import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../structure/navbar.css"

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(prev => !prev);
  };
const closeMenu = () => {
  setIsActive(false)
}

const handleNavClick = () => {
  closeMenu()
}

  return (
    <nav className="nav">
      <div className="logo">
        <i className="bi bi-house-fill"></i>
        <NavLink to="/">Oyster Properties</NavLink>
      </div>
      <div className="nav-links">
        <i id="menu-bar" className={`bi bi-list`} onClick={toggleMenu}></i>
        <div className={`navLinks ${isActive ? 'active' : ''}`}>
          <ul>
            <li><NavLink to="/" className='a' onClick={handleNavClick}>Home</NavLink></li>
            <li><NavLink to="about" className='a' onClick={handleNavClick}>About</NavLink></li>
            <li><NavLink to="Contact" className='a'  onClick={handleNavClick}>Contact</NavLink></li>
            <li><NavLink to="properties" className="a" onClick={handleNavClick}>Products</NavLink></li>
            <li><NavLink to="blog"className='a'  onClick={handleNavClick}>Blog</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

