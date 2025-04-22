'use client';
import Link from 'next/link';

import { useEffect, useRef, useState } from 'react';
import styles from './SubscriptionMaintenanceSection.module.css';

export default function SubscriptionMaintenanceSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="subscription"
      ref={sectionRef}
      className={`${styles.maintenanceSection} ${inView ? styles.active : ''}`}
    >
      <video
        className={`${styles.backgroundVideo} ${inView ? styles.zoomIn : styles.zoomOut}`}
        src="/subscribe.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
            <Link href="/frontend-web-design-comingsoon" passHref legacyBehavior>
            <a className={styles.linkWrapper}>

      <div className={styles.textCard}>
        <h2>Subscription-Based Website Maintenance</h2>
        <p>
          Keep your digital presence thriving with our monthly maintenance plans.
          From security patches to design tweaks — we ensure your site is always updated and performing.
        </p>
      </div>
      </a>
      </Link>
    </section>
  );
}
