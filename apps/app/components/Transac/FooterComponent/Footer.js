// File: /app/components/Transac/FooterComponent/Footer.js

import styles from './Footer.module.css';
import Image from 'next/image';
import logo from '@/public/logo.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columnsWrapper}>
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
      </div>


      <div className={styles.newsletter}>
        <h4>Get Fintech Insights</h4>
        <form className={styles.form}>
          <input type="email" placeholder="Your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}