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
        <Link href="/frontend-web-design-comingsoon" passHref legacyBehavior>
        <a className={styles.linkWrapper}>
        <div className={styles.textCard}>
          <h2>Client Dashboard</h2>
          <p>
            Stay in control with real-time visibility into project status, file management, team
            communication, and invoices – all in one intuitive dashboard.
          </p>
        </div>
        </a>
        </Link>
      </section>
    );
  }
