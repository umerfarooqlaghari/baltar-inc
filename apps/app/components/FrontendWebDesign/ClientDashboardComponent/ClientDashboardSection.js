  'use client';
  import Link from 'next/link';

  import { useEffect, useRef, useState } from 'react';
  import styles from './ClientDashboardSection.module.css';

  export default function ClientDashboardSection() {
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold: 0.5 }
      );

      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }, []);

    return (
      <section id="dashboard"
        className={`${styles.dashboardSection} ${isInView ? styles.active : ''}`}
        ref={sectionRef}
      >
        <video
          ref={videoRef}
          className={`${styles.backgroundVideo} ${isInView ? styles.zoomIn : styles.zoomOut}`}
          src="/clientdashboard.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <Link href="/frontend-web-design-services" passHref legacyBehavior>
        <a className={styles.linkWrapper}>
        <div className={styles.textCard}>
          <h2>Services</h2>
          <p>
            Explore our complete range of web solutions — from custom design and hosting to e-commerce and ongoing support.
          </p>
        </div>
        </a>
        </Link>
      </section>
    );
  }
