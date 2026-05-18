import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMobileOpen(false)
  }

  return (
    <nav className="black-navbar">
      <div className="container nav-menu-container">
        {/* Navigation Links */}
        <ul className={`nav-menu-list ${isMobileOpen ? 'mobile-active' : ''}`}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => `menu-button ${isActive ? 'active-menu-item' : ''}`}
              onClick={handleMenuClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `menu-button ${isActive ? 'active-menu-item' : ''}`}
              onClick={handleMenuClick}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `menu-button ${isActive ? 'active-menu-item' : ''}`}
              onClick={handleMenuClick}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/resources" 
              className={({ isActive }) => `menu-button ${isActive ? 'active-menu-item' : ''}`}
              onClick={handleMenuClick}
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `menu-button ${isActive ? 'active-menu-item' : ''}`}
              onClick={handleMenuClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger toggle */}
        <div className="nav-hamburger" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          <span className={isMobileOpen ? 'bar bar-1' : 'bar'}></span>
          <span className={isMobileOpen ? 'bar bar-2' : 'bar'}></span>
          <span className={isMobileOpen ? 'bar bar-3' : 'bar'}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
