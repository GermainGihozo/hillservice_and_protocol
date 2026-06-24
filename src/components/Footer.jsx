import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Hills Services & Protocol</h3>
            <p>
              Professional food & beverage services, event management and planning, live music entertainment, and ceremony coordination services since 2014.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#services">Food & Beverage service</a></li>
              <li><a href="#services">Event Management & Planning</a></li>
              <li><a href="#services">Live Music Band</a></li>
              <li><a href="#services">Ceremony Management</a></li>
              <li><a href="#services">Full Event Packages</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="footer-links">
              <li>📞 +250 788 512 125</li>
              <li>📧 info@hillsservices.com</li>
              <li>📍 Byumba City</li>
              <li>⏰ Mon-Sat: 8AM - 6PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Hills Services & Protocol. All rights reserved.
          </p>
          <p className="footer-tagline">
            Making every event magical ✨
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
