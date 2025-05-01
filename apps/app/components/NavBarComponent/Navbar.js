'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';

const navItems = {
  Finance: ['Wealth Management', 'Transac'],
  Technology: ['Frontend Web Design', 'Cre8ive Studio'],
  Consulting: ['Archon Engineering'],
  Hospitality: ['Savour & Sip'],
  Fashion: ['VR (Luxury Eyewear & Fashion Tech)', 'Le Mode Co.'],
  Media: ['Consumer Pulse', 'Zeitgeist Media'],
  Retail: ['Baltar Prime'],
};

const hrefMap = {
  'transac': '/transac',
  'frontend web design': '/frontend-web-design',
  'le mode co.': '/le-mode-co',
  'savour & sip': '/sip-and-savour',
  'consumer pulse': '/consumer-pulse',
  'vr (luxury eyewear & fashion tech)': '/vr',
};

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (key) => {
    clearTimeout(timeoutRef.current);
    setActive(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 150);
  };

  const toggleMobileDropdown = (key) => {
    if (mobileDropdownOpen === key) {
      setMobileDropdownOpen(null);
    } else {
      setMobileDropdownOpen(key);
    }
  };

  const renderLink = (item, i) => {
    const lowerItem = item.toLowerCase();
    const href = hrefMap[lowerItem] || '/coming-soon';

    const isExternal = lowerItem === 'transac' || lowerItem === 'frontend web design' || lowerItem === 'le mode co.' || lowerItem === 'savour & sip' || lowerItem === 'consumer pulse' || lowerItem === 'VR (Luxury Eyewear & Fashion Tech)';

    return isExternal ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={i}
        className="dropdown-item"
      >
        {item}
      </a>
    ) : (
      <Link href={href} key={i} className="dropdown-item">
        {item}
      </Link>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <Link href="/" className="logo-with-icon">
          <Image src="/logo.svg" alt="Baltar Inc Logo" width={28} height={28} />
          <span className="logo-text">Baltar Inc</span>
        </Link>

        <button className="hamburger" onClick={() => setMobileOpen(true)}>
          ☰
        </button>

        {/* Desktop Links */}
        <div className="nav-links">
          {Object.entries(navItems).map(([heading, subItems], idx) => (
            <div
              key={idx}
              className="nav-item-wrapper"
              onMouseEnter={() => handleMouseEnter(heading)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="nav-item">{heading}</span>

              {active === heading && (
                <div className="dropdown">
                  {subItems.map((item, i) => renderLink(item, i))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mobile-menu">
            <button
              className="close-btn"
              onClick={() => setMobileOpen(false)}
            >
              ×
            </button>

            {Object.entries(navItems).map(([heading, subItems], idx) => (
              <div key={idx} className="mobile-dropdown-wrapper">
                <button
                  className="mobile-dropdown-toggle"
                  onClick={() => toggleMobileDropdown(heading)}
                >
                  {heading}
                </button>

                {mobileDropdownOpen === heading && (
                  <div className="mobile-dropdown">
                    {subItems.map((item, i) => (
                      <div key={i} onClick={() => setMobileOpen(false)}>
                        {renderLink(item, i)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}