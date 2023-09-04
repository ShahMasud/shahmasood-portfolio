import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Shah Masood. All rights reserved.
        </p>
        <p className="footer-text">Web Developer | React Enthusiast</p>
      </div>
    </footer>
  );
};

export default Footer;
