'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './TransacHeader.module.css';

const navItems = [
  { label: 'Why Transac', href: '#why' },
  { label: 'Demo', href: '#demo' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'App', href: '#app' },
];

export default function TransacHeader() {
  const [active, setActive] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (item) => {
    clearTimeout(timeoutRef.current);
    setActive(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 150);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* 🔥 Transac Logo with Flair */}
        <Link href="/transac" className={styles.logoWithIcon}>
          <Image src="/logo.svg" alt="Baltar Inc Logo" width={28} height={28} />
          <span className={styles.logoText}>Transac</span>
        </Link>

        {/* 🧭 Navigation Links */}
        <nav className={styles.navbar}>
          <div className={styles.navLinks}>
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className={styles.navItem}>
                {item.label}
              </a>
            ))}

            {/* 📚 Dropdown for Resources */}
            <div
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
              className={styles.navItemWrapper}
            >
              <span className={styles.navItem}>Resources</span>
              {active === 'resources' && (
                <div className={styles.dropdown}>
                  <Link href="/coming-soon" className={styles.dropdownItem}>Compliance</Link>
                  <Link href="/coming-soon" className={styles.dropdownItem}>Hardware</Link>
                  <Link href="/coming-soon" className={styles.dropdownItem}>Loyalty</Link>
                  <Link href="/coming-soon" className={styles.dropdownItem}>Integrations</Link>
                </div>
              )}
            </div>

            {/* 🚀 Join Transac CTA */}
            <Link href="/signup" className={`${styles.navItem} ${styles.ctaButton}`}>
              Join Transac
            </Link>

            {/* ✨ Already onboard? Sign In */}
            <span className={styles.signInPrompt}>
              Already onboard?&nbsp;
              <Link href="/login" className={styles.signInLink}>
                Sign in
              </Link>
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
