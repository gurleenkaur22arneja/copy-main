// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className='bg-slate-200'>
//       <div className='container mx-auto p-4'>
//        <p className='text-center font-bold' title="Youtube Channel">Thanks for visiting </p>
//       </div>
//     </footer>
//   )
// }

// export default 


import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Visit on regular basis to get trending clothing items at very reasonable prices.</p>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/help">Help & FAQs</a></li>
            <li><a href="/shipping">Shipping & Returns</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-media" style={{gap:"5px"}}>
            <li><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/@arneja_gurleen" target="_blank"></a>
            <i className="fab fa-twitter"></i></li>
            <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/gurleen-arneja-769232200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UChc2QjJMMIFPy02200JCqtg"><i className="fa fa-youtube-play"></i></a></li>
            
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Main Bazar, jagraon[ludhiana], Punjab,India</p>
          <p>Email: support@classichouse.com</p>
          <p>Phone: +91 8508007500</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Classic House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
