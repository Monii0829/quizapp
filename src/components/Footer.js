// src/components/Footer.js
import React from 'react';
import './Footer.css'; // If you want to style your footer separately.

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Monisha.S All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a> | 
          <a href="/privacy">Privacy Policy</a> | 
          <a href="/contact">Contact Us</a>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
