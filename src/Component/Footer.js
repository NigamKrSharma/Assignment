import React from 'react';
import fb from '../Assets/facebook (1).png'
import insta from '../Assets/instagram (2).png'
import linkd from '../Assets/linkedin.png'
import spoty from '../Assets/Vector.png'
import twit from '../Assets/twitter.png'
import logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-center">
        <div className="footer-element">
          <img src={logo} alt="" />
          <div className="company">
            <h2>Company</h2>
            <div>
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <a href="#">Courses</a>
              <a href="#">Contact us</a>
            </div>
          </div>
          <div className="company">
            <h2>Services</h2>
            <div>
              <a href="#">Web Development</a>
              <a href="#">Performance Marketing</a>
              <a href="#">Social Media Marketing</a>
              <a href="#">App Development</a>
              <a href="#">Graphic Design</a>
              <a href="#">UI/UX Design</a>
            </div>
          </div>
          <div className="company">
            <h2>Company</h2>
            <div>
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <a href="#">Courses</a>
              <a href="#">Contact us</a>
            </div>
          </div>
          <div className="company">
            <div>
              <h2>Email Us</h2>
              <a href="#">Ricoz1234@gmail.com</a>
            </div>
            <div>
              <h2>Contact Us</h2>
              <a href="#">+91 9098885099</a>
            </div>
            <div className="social-icon">
              <img src={fb} alt="facebook" />
              <img src={twit} alt="twitter" />
              <img src={linkd} alt="linkedin" />
              <img src={insta} alt="instagram" />
              <img src={spoty} alt="spotyfi" />
            </div>
          </div>
          <div className="company">
            <h2>SUBSCRIBE TO NEWSLETTER</h2>
          </div>
        </div>
        <div className="under-line"></div>
        <div className="copywright">
          <p>&copy; 2023 Ricoz. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
