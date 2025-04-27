    'use client';

import styles from './FooterComponent.module.css';

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
      {/* Top Promo Line */}
      <div className={styles.promoSection}>
        <h2>Get exclusive updates on the collection's launch,<br />personalized communication and the House's latest news.</h2>
        <a href="#" className={styles.subscribeLink}>+ Subscribe</a>
      </div>

      {/* Links Section */}
      <div className={styles.linksGrid}>
        <div className={styles.column}>
          <h4>May We Help You?</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">My Order</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Email Unsubscribe</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>The Company</h4>
          <ul>
            <li><a href="#">About Le Mode Co</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Code of Ethics</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy & Cookie Policy</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Store Locator</h4>
          <input type="text" placeholder="Country/Region, City" className={styles.input} />
          <h4>Sign up for Le Mode Co Updates</h4>
          <p className={styles.policyText}>
            By entering your email address below, you consent to receiving our newsletter with access to our latest collections,
            events and initiatives. Details in our <a href="#">Privacy Policy</a>.
          </p>
          <input type="email" placeholder="Email" className={styles.input} />
        </div>
      </div>
    </footer>
  );
}
