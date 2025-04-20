'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import './Navbar.css';

const navItems = {
  Finance: ['Wealth Management'],
  Technology: ['Frontend Web Design', 'Cre8ive Studio'],
  Consulting: ['Archon Engineering'],
  Hospitality: ['Savour & Sip'],
  Fashion: ['VR (Luxury Eyewear & Fashion Tech)', 'Le Mode Co.'],
  Media: ['Consumer Pulse', 'Zeitgeist Media'],
  Retail: ['Baltar Prime'],
};

export default function Navbar() {
  const [active, setActive] = useState(null);
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

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo-with-icon">
          <Image src="/logo.svg" alt="Baltar Inc Logo" width={28} height={28} />
          <span className="logo-text">Baltar Inc</span>
        </div>

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
                  {subItems.map((item, i) => (
                    <Link href="/" key={i} className="dropdown-item">
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
