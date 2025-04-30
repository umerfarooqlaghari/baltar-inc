'use client';

import styles from './MajorHeadlineSection.module.css';
import Image from 'next/image';

export default function MajorHeadlineSection() {
  return (
    <section className={styles.headlineSection}>
      <div className={styles.imageWrapper}>
        <Image
          src="/Trump.jpg"
          alt="Top News"
          width={200}
          height={90}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        {/* 📰 Replace title and description dynamically via API later */}
        <h1 className={styles.title}>
          Trump Predicts China Would ‘Eat’ Tariffs, Lessening US Impact
        </h1>
        <p className={styles.subtitle}>
          Trump Bashes Powell, Touts Tariffs at Rally Marking 100 Days in Office
        </p>
      </div>
    </section>
  );
}
