// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="address-container">
          <address>
            <p>Email</p>
            <a href="mailto:ywu115@bu.edu">ywu115@bu.edu</a>
          </address>
        </div>

        <div className="connect-container">
          <p>Connect Me</p>
          <a href="https://www.linkedin.com/in/yuhao-wu-b8a91231b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <img className='linkedin-icon' src='./images/linkedin.svg' alt='Linkedin icon'></img>
          </a>
        </div>

        <div className="copyright">
          <p>&copy; 2025 By Yuhao Wu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;