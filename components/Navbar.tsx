import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const mobNav = React.useRef(null);
  const navLinks = React.useRef(null);

  const openMenu = () => {
    mobNav.current.classList.add('active-menu');
    if (mobNav.current.clientHeight == '100vh') {
      navLinks.current.style.visibility == 'vissible';
    }
  };

  const closeMenu = () => {
    mobNav.current.classList.remove('active-menu');
  };

  return (
    <div className="container">
      <div className="nav-container">
        <Link to="/">
          <h2>Logo</h2>
        </Link>
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-link">
              <Link to="#">Services</Link>
            </li>
            <li className="nav-link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="open-menu" onClick={openMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-nav-container" ref={mobNav}>
        <Link to="">
          <h2>Logo</h2>
        </Link>
        <nav className="mobile-navbar">
          <ul className="nav-links" ref={navLinks}>
            <li className="nav-link">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-link">
              <Link to="#" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="close-menu" onClick={closeMenu}>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
