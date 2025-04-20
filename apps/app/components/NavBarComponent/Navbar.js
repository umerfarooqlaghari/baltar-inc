'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import './Navbar.css';

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
          {/* Finance */}
          <div
            className="nav-item-wrapper"
            onMouseEnter={() => handleMouseEnter('Finance')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-item">Finance</span>
            {active === 'Finance' && (
              <div className="dropdown">
                <Link href="/wealth-management" className="dropdown-item">
                  Wealth Management
                </Link>
              </div>
            )}
          </div>

          {/* Technology */}
          <div
            className="nav-item-wrapper"
            onMouseEnter={() => handleMouseEnter('Technology')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-item">Technology</span>
            {active === 'Technology' && (
              <div className="dropdown">
                <Link href="/frontend-web-design" className="dropdown-item">
                  Frontend Web Design
                </Link>
                <Link href="/cre8ive-studio" className="dropdown-item">
                  Cre8ive Studio
                </Link>
              </div>
            )}
          </div>

          {/* Consulting */}
          <div
            className="nav-item-wrapper"
            onMouseEnter={() => handleMouseEnter('Consulting')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-item">Consulting</span>
            {active === 'Consulting' && (
              <div className="dropdown">
                <Link href="/archon-engineering" className="dropdown-item">
                  Archon Engineering
                </Link>
              </div>
            )}
          </div>

          {/* Hospitality */}
          <div
            className="nav-item-wrapper"
            onMouseEnter={() => handleMouseEnter('Hospitality')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-item">Hospitality</span>
            {active === 'Hospitality' && (
              <div className="dropdown">
                <Link href="/savour-and-sip" className="dropdown-item">
                  Savour & Sip
                </Link>
              </div>
            )}
          </div>

          {/* Fashion */}
          <div
            className="nav-item-wrapper"
            onMouseEnter={() => handleMouseEnter('Fashion')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-item">Fashion</span>
            {active === 'Fashion' && (
              <div className="dropdown">
                <Link href="/vr-luxury-eyewear-fashion-tech" className="dropdown-item">
                  VR (Luxury Eyewear & Fashion Tech)
                </Link>
                <Link href="/le-mode-co" className="dropdown-item">
                  Le Mode Co.
                </Link>
              </div>
            )}
          </div>

          {/* Media */}
          <div
            className="nav-item-wrapper"
            onMouseEnter={() => handleMouseEnter('Media')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-item">Media</span>
            {active === 'Media' && (
              <div className="dropdown">
                <Link href="/consumer-pulse" className="dropdown-item">
                  Consumer Pulse
                </Link>
                <Link href="/zeitgeist-media" className="dropdown-item">
                  Zeitgeist Media
                </Link>
              </div>
            )}
          </div>

          {/* Retail */}
          <div
            className="nav-item-wrapper"
            onMouseEnter={() => handleMouseEnter('Retail')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-item">Retail</span>
            {active === 'Retail' && (
              <div className="dropdown">
                <Link href="/baltar-prime" className="dropdown-item">
                  Baltar Prime
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
