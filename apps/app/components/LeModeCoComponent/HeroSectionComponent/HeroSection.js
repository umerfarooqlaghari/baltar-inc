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
      <video
        src="/LeModeCo.mp4" 
        autoPlay
        muted
        loop
        playsInline
        className={styles.bgVideo}
      />

      <div className={styles.heroContent} ref={contentRef}>
        <h1>Le Mode Co</h1>
        <p>Explore the latest fashion collections of the season</p>
        <a href="/le-mode-co-comingsoon"><button>Shop Now</button></a>
      </div>
    </section>
  );
}
