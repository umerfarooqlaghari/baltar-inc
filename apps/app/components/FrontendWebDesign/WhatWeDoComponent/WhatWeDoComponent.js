'use client';
import React from 'react';
import styles from './WhatWeDoComponent.module.css';

export default function WhatWeDoComponent() {
  return (
    <section className={styles.whatWeDoSection}>
      <div className={styles.left}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.showcaseVideo}
        >
          <source src="/whatwedo.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.right}>
        <h2 className={styles.heading}>
          At Baltar Technologies, we specialize in building sleek, fast, and affordable websites for professionals, businesses, and organizations who want more than just a template. We handle everything — design, hosting, support — so you can focus on your business while we bring your online presence to life.
        </h2>
        <button className={styles.ctaButton}>What we do</button>
      </div>
    </section>
  );
}
