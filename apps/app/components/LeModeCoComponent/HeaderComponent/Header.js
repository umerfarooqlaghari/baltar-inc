"use client";
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Header.module.css";

const HeaderComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [vibrateKey, setVibrateKey] = useState(0);

  const menuToggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (window.scrollY === 0) {
        setVibrateKey((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuToggleRef.current &&
        !menuToggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuItems = [
    "Mother's Day Gifts", "New In", "Handbags", "Women", "Men",
    "Children", "Travel", "Jewelry & Watches", "Décor & Lifestyle", "Fragrances & Make-Up"
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.navBar}>
        {/* Left Section */}
        <div className={styles.navLeft}>
          {/* On mobile Contact Us hide kar diya */}
          <a href="/contact" className={styles.contactLink}>+ Contact Us</a>
        </div>

        {/* Center Logo with Vibrate */}
        <div className={styles.logo}>
          <motion.a
            href="/"
            key={vibrateKey}
            initial={{ rotate: 0 }}
            animate={{
              rotate: [0, 2, -2, 2, -2, 0],
              x: [0, -3, 3, -3, 3, 0],
              y: [0, 2, -2, 2, -2, 0],
            }}
            transition={{ duration: 10, ease: "easeInOut" }}
          >
            <h1>Le Mode Co</h1>
          </motion.a>
        </div>

        {/* Right Section */}
        <div className={styles.navRight}>
          <div className={styles.navIcons}>
            <img src="/bag-heart.svg" alt="Bag" className={styles.icon} />
            <img src="/person-lines-fill.svg" alt="Profile" className={styles.icon} />
            <img src="/search-heart.svg" alt="Search" className={styles.icon} />
            <span
              ref={menuToggleRef}
              onClick={toggleMenu}
              className={styles.menuToggle}
            >
              MENU <span className={styles.hamburgerSymbol}>☰</span>
            </span>
          </div>
        </div>

        {/* Animated Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={styles.menuWrapper}
              initial={{ x: "100%" }}
              animate={{ x: "40%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <ul className={styles.menuDropdown}>
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default HeaderComponent;
