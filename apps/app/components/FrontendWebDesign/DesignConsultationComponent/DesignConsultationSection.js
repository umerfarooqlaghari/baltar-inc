'use client';
import Link from 'next/link';

import { useEffect, useRef, useState } from 'react';
import styles from './DesignConsultationSection.module.css';

export default function DesignConsultationSection() {
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
    <section id="booking"
      ref={sectionRef}
      className={`${styles.consultationSection} ${inView ? styles.active : ''}`}
    >
      <video
        className={`${styles.backgroundVideo} ${inView ? styles.zoomIn : styles.zoomOut}`}
        src="/booking.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
            <Link href="/frontend-web-design-comingsoon" passHref legacyBehavior>
            <a className={styles.linkWrapper}>

      <div className={styles.textCard}>
        <h2>Book a Design Consultation</h2>
        <p>
          Seamlessly schedule 1-on-1 sessions with our creative team. Whether it's a new project
          or an idea, let’s design your vision together.
        </p>
      </div>
      </a>
      </Link>
    </section>
  );
}
