'use client';
import { useState, useEffect } from 'react';
import './HeaderComponent.css';

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorStyle, setCursorStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!isMenuOpen) return;
    setCursorStyle({
      left: `${e.clientX - 25}px`,
      top: `${e.clientY - 25}px`,
    });
  };

  useEffect(() => {
    if (isMenuOpen) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="cuberto-header">
      <div className="header-title">Frontend Web Design</div>
      <button className="menu-button" onClick={() => setIsMenuOpen(true)}>
        menu <span className="hamburger">≡</span>
      </button>

      {isMenuOpen && (
        <>
          <div className="menu-overlay">
            <button className="close-button" onClick={() => setIsMenuOpen(false)}>×</button>
            <div className="menu-content">
              <div className="menu-left">
                <p className="menu-heading">Social media</p>
                <ul>
                  <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                  <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                  <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
                  <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
                </ul>
              </div>
              <div className="menu-right">
                <p className="menu-heading">Menu</p>
                <ul className="main-links">
                  <li><a href="#audit" onClick={handleMenuClick}>AI Website Audit Tool</a></li>
                  <li><a href="#dashboard" onClick={handleMenuClick}>Client Dashboard</a></li>
                  <li><a href="#booking" onClick={handleMenuClick}>Design Consultation Booking</a></li>
                  <li><a href="#seo" onClick={handleMenuClick}>SEO Reports</a></li>
                  <li><a href="#subscription" onClick={handleMenuClick}>Subscription Maintenance</a></li>
                </ul>
                <div className="contact-block">
                  <p>Get in touch</p>
                  <a href="mailto:getintouch@gmail.com">getintouch@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-circle" style={cursorStyle}></div>
        </>
      )}
    </header>
  );
}
