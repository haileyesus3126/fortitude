import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-links'>
          <a href='/about'>About Us</a>
          <a href='/contact'>Contact</a>
          <a href='/privacy'>Privacy Policy</a>
          <a href='/terms'>Terms of Service</a>
        </div>
        <p className='footer-copyright'>
          &copy; {new Date().getFullYear()} Haileeyesus. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
