'use client';
import styles from './ComingSoonPage.module.css';

export default function ComingSoonPage() {
  return (
    <div className={styles.wrapper}>
      

      <div className={styles.overlay}>
        <h1 className={styles.title}>Coming Soon</h1>
        <p className={styles.description}>We're building something epic. Stay tuned.</p>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
}
