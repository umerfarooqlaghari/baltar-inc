'use client';
import styles from './AIAuditSection.module.css';

export default function AIAuditSection() {
  return (
    <section className={styles.auditSection}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.backgroundVideo}
      >
        <source src="/AIAudit.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlayCard}>
        <h2 className={styles.heading}>AI-Powered Website Audit</h2>
        <p className={styles.description}>
          Run deep diagnostics for SEO, accessibility, performance, and security
          — all powered by automation and AI intelligence.
        </p>
      </div>
    </section>
  );
}
