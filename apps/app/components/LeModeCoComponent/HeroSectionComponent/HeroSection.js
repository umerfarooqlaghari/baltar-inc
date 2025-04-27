'use client';

import { useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top center',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Video */}
      <video
        src="/LeModeCo.mp4" // Replace this path to your actual video
        autoPlay
        muted
        loop
        playsInline
        className={styles.bgVideo}
      />

      {/* Content */}
      <div className={styles.heroContent} ref={contentRef}>
        <h1>Welcome to Le Mode Co</h1>
        <p>Explore the latest fashion collections of the season</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
}
