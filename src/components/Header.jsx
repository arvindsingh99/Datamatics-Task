import React, { useState } from "react";
import logo from '../assets/logo.png';
import close from '../assets/close.png';
import menu from '../assets/menu.png';
import {Link} from 'react-router-dom';
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
         
            <img src={logo} alt="" className="logo" />
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
         
          <li className=" option mobile-option" onClick={closeMobileMenu}>
            <i className="btn">
              <Link to="/" className="link">
              Home
              </Link>
            </i>
          </li>
          <li className=" option mobile-option" onClick={closeMobileMenu}>
            <i className="btn">
              <Link to="/blog" className="link">
              Blog
              </Link>
            </i>
          </li>
          <li className=" option mobile-option" onClick={closeMobileMenu}>
            <i className="btn">
            <Link to="/article" className="link">
              Article
              </Link>
            </i>
          </li>
          <li className=" option mobile-option" onClick={closeMobileMenu}>
            <i className="btn">
            <Link to="/contact" className="link">
              Contact
              </Link>
            </i>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li onClick={closeMobileMenu}>
          <i  className="signup-btn">
          <Link to="/" className="link">
              Home
              </Link>
          </i>
        </li>
        <li onClick={closeMobileMenu}>
          <i  className="signup-btn">
          <Link to="/blog" className="link">
              Blog
              </Link>
          </i>
        </li>
        <li onClick={closeMobileMenu}>
          <i  className="signup-btn">
          <Link to="/article" className="link">
              Article
              </Link>
          </i>
        </li>
        <li onClick={closeMobileMenu}>
          <i  className="signup-btn">
          <Link to="/contact" className="link">
              Contact
              </Link>
          </i>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <img src={close} alt="" className="menu-icon" />
        ) : (
            <img src={menu} alt="" className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;