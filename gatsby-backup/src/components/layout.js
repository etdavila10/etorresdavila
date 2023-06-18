import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Navbar from './navBar';
import ContactSection from './contact';

import '../sass/index.scss';
// import profile_picture from '../images/square_profile_picture.jpg';
import { useState, useEffect } from 'react';

// The main layout of the website
const Layout = ({ children }) => {
  const [activeNav, setActiveNav] = useState("home");

  const handleScroll = () => {
    const projOffset = document.getElementById("projects").offsetTop;
    const pubOffset = document.getElementById("publications").offsetTop;
    const teachOffset = document.getElementById("teaching").offsetTop;
    const curOffset = window.pageYOffset;
    const adjustment = 500;
    if (curOffset > teachOffset - adjustment) {
      setActiveNav("teaching");
    } else if (curOffset > projOffset - adjustment) {
      setActiveNav("projects");
    } else if (curOffset > pubOffset - adjustment) {
      setActiveNav("publications");
    } else {
      setActiveNav("home");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  return (
    <div id="page">
      <header>
        <div id="header-name">
          Eduardo Torres Davila
        </div>
      </header>
      <Navbar activeNav={activeNav} />
      <main className="container">
        {children}
      </main>
      <footer>
        <div id="footer-content">
          <ContactSection />
          <ul>
            <li><a href="https://github.com/etdavila10" aria-label="github" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size='2x'/></a></li>
            <li><a href="https://www.facebook.com/eduardo.torresdavila.39/" aria-label="facebook" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size='2x'/></a></li>
            <li><a href="https://www.linkedin.com/in/etorres10/" aria-label="linkedin" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2x'/></a></li>
          </ul>
        </div>
        <p>powered by <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">gatsby</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;built by Eduardo</p>
      </footer>
    </div>
  )
};

export default Layout;