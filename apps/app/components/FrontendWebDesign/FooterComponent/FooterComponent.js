'use client';
import styles from './FooterComponent.module.css';

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
      {/* Layer 1: Follow Us Video Section */}
      <section className={styles.followUsSection}>
        <video src="/follow-us.mp4" autoPlay loop muted playsInline className={styles.bgVideo} />
        <div className={styles.followText}>
          <span className={styles.circle}>IDENTITY. PRODUCT. DESIGN.</span>
          <h2>Follow Us</h2>
          <span className={styles.circle}>IDENTITY. PRODUCT. DESIGN.</span>
        </div>
      </section>

      {/* Layer 2: Social Links */}
      <section className={styles.linksSection}>
        <h3>Social Media and Contacts</h3>
        <div className={styles.linksGrid}>
          {['Instagram', 'LinkedIn', 'Dribbble', 'GitHub'].map((link, idx) => (
            <a href="#" className={styles.linkItem} key={idx}>
              <span className={styles.arrow}>↗</span> {link}
            </a>
          ))}
        </div>
      </section>

      {/* Layer 3: Get In Touch */}
      <section className={styles.contactSection}>
        <video src="/footer-contact-bg.mp4" autoPlay loop muted playsInline className={styles.contactVideo} />
        <div className={styles.contactOverlay}>
          <h1>Have<br /><i>an idea?</i></h1>
          <button className={styles.tellUsBtn}>TELL US</button>
          <div className={styles.contactDetails}>
          </div>
        </div>
      </section>
    </footer>
  );
}
