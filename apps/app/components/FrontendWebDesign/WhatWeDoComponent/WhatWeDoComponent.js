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
          We focus on intuitive, beautiful, and performance-driven frontend interfaces.
        </h2>
        <button className={styles.ctaButton}>What we do</button>
      </div>
    </section>
  );
}
