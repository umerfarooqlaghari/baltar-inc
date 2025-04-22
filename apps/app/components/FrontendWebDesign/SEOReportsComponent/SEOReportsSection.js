'use client';
import Link from 'next/link';

import { useEffect, useRef, useState } from 'react';
import styles from './SEOReportsSection.module.css';

export default function SEOReportsSection() {
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
    <section id="seo"
      ref={sectionRef}
      className={`${styles.seoSection} ${inView ? styles.active : ''}`}
    >
      <video
        className={`${styles.backgroundVideo} ${inView ? styles.zoomIn : styles.zoomOut}`}
        src="/SEO.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
            <Link href="/frontend-web-design-comingsoon" passHref legacyBehavior>
            <a className={styles.linkWrapper}>

      <div className={styles.textCard}>
        <h2>Automated SEO Reports</h2>
        <p>
          Receive detailed SEO insights straight to your inbox. From performance metrics to
          optimization tips, our system keeps your site ready to rank.
        </p>
      </div>
      </a>
      </Link>
    </section>
  );
}
