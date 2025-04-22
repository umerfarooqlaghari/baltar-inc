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

      <Link href="/frontend-web-design-comingsoon" passHref legacyBehavior>
  <a className={styles.linkWrapper}>
    <div className={styles.overlayCard}>
      <h2 className={styles.heading}>AI-Powered Website Audit</h2>
      <p className={styles.description}>
        Run deep diagnostics for SEO, accessibility, performance, and
        security — all powered by automation and AI intelligence.
      </p>
    </div>
  </a>
</Link>

    </section>
  );
}
