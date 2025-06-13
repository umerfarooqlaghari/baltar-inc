'use client';
import Link from 'next/link';
import styles from './AIAuditSection.module.css';

export default function AIAuditSection() {
  return (
    <section id="audit" className={styles.auditSection}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.backgroundVideo}
      >
        <source src="/AIAudit.mp4" type="video/mp4" />
      </video>

      <Link href="/frontend-web-design-about" passHref legacyBehavior>
  <a className={styles.linkWrapper}>
    <div className={styles.overlayCard}>
      <h2 className={styles.heading}>About US</h2>
      <p className={styles.description}>
        Learn about our vision, mission, and the values that drive us to create exceptional digital experiences.
      </p>
    </div>
  </a>
</Link>

    </section>
  );
}
