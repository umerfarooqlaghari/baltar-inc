'use client';
import Link from 'next/link';

import { useEffect, useRef, useState } from 'react';
import styles from './DesignConsultationSection.module.css';

export default function DesignConsultationSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section id="booking"
      ref={sectionRef}
      className={`${styles.consultationSection} ${inView ? styles.active : ''}`}
    >
      {!videoError ? (
        <video
          ref={videoRef}
          className={`${styles.backgroundVideo} ${inView ? styles.zoomIn : styles.zoomOut}`}
          autoPlay
          loop
          muted
          playsInline
          onError={handleVideoError}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
        >
          <source src="/booking.mp4" type="video/mp4" />
          <source src="/booking.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className={`${styles.backgroundVideo} ${styles.fallbackBackground}`}></div>
      )}

      <Link href="/frontend-web-design-contact" className={styles.linkWrapper}>
        <div className={styles.textCard}>
          <h2>Contact US</h2>
          <p>
            Get in touch to discuss your project. We're here to help bring your vision to life with professional web solutions.
          </p>
        </div>
      </Link>
    </section>
  );
}
