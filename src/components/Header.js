import React, { useState } from 'react';
import Logo from '../assets/hero-logo.png';
import { ReactComponent as BurgerIcon } from '../assets/burger-icon.svg';
import MobileLogo from '../assets/mobile-logo.png';
import { ReactComponent as BurgerBtnClose } from '../assets/burger-btn-close.svg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenuOnLinkClick = () => {
      setIsMenuOpen(false);
    };
  
    return (
      <header className="header">
        <div className="container">
          <div className="header__nav">
            <a className="header__logo" href="#">
              <img src={Logo} alt="logo" />
            </a>
            <a className="header__mobile-logo" href="#">
              <img src={MobileLogo} alt="mobile-logo" />
            </a>
            <ul className="header__menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about-section">About</a>
              </li>
              <li>
                <a href="#contact-section">Contacts</a>
              </li>
            </ul>
            <a className="header__button" href="#contact-form">
              Join Us
            </a>
            <button
              className="header__burger-btn"
              type="button"
              onClick={toggleMenu}
            >
              <BurgerIcon />
            </button>
          </div>
        </div>
        <div
          className={`burger-menu ${isMenuOpen ? 'burger-menu--open' : ''}`}
          style={{ backgroundColor: 'var(--primary-color)' }}
        >
          <div className="burger-menu__header">
            <img src={MobileLogo} alt="logo" className="burger-menu__logo" />
            <button
              className="burger-menu__close-btn"
              type="button"
              onClick={toggleMenu}
            >
              <BurgerBtnClose />
            </button>
          </div>
          <ul className="burger-nav">
            <li>
              <a className="hero-link" href="#" onClick={closeMenuOnLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#about-section" onClick={closeMenuOnLinkClick}>
                About Us
              </a>
            </li>
            <li>
              <a href="#contact-form" onClick={closeMenuOnLinkClick}>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
  

export default Header;
