'use client';

import styles from './Footer.module.css';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.column}>
          <div className={styles.logo}>
            <Image src={logo} alt="Transac Logo"/>
            <span>Transac</span>
          </div>
        </div>

        <div className={styles.column}>
          <h4>Product</h4>
          <ul>
            <li>Features</li>
            <li>Security</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Industries</h4>
          <ul>
            <li>Restaurants</li>
            <li>Retail</li>
            <li>Cannabis</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Resources</h4>
          <ul>
            <li>API Docs</li>
            <li>Compliance Hub</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Language</h4>
          <ul><li>EN</li><li>FR</li></ul>

          <h4 style={{ marginTop: '1rem' }}>Follow</h4>
          <div className={styles.social}>
            <FaFacebookF />
            <FaYoutube />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>

      <div className={styles.trustAndNewsletter}>

        <div className={styles.newsletter}>
          <h4>Get Fintech Insights</h4>
          <form className={styles.form}>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
