'use client';
import styles from './FooterComponent.module.css';

export default function VRFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <p className={styles.inspireText}>Stay Inspired with all the Latest from VR</p>
        <div className={styles.subscription}>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
        <div className={styles.accessibility}>
          <span>Accessibility: Improve Contrast</span>
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>

      <div className={styles.linkSection}>
        <div>
          <h4>VR Collections</h4>
          <p>Eyewear</p>
          <p>Fragrance</p>
        </div>
        <div>
          <h4>Customer Service</h4>
          <p>Help Center</p>
          <p>Returns</p>
        </div>
        <div>
          <h4>About VR</h4>
          <p>Sustainability</p>
          <p>Careers</p>
        </div>
        <div>
          <h4>Legal Info</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.socials}>
          <span>Follow us</span>
          <a>Instagram</a>
          <a>Facebook</a>
          <a>LinkedIn</a>
          <a>Twitter</a>
        </div>
        <div className={styles.brand}>© 2025 VR. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
