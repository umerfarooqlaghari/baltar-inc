'use client';

import styles from './Testimonials.module.css';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className={styles.testimonialSection} id="testimonials">
      <h2 className={styles.heading}>Powering the Future of Retail</h2>

      <div className={styles.logoRow}>
        <Image
          src="/logo.svg"
          alt="Baltar Inc"
          width={120}
          height={40}
          className={styles.logoImage}
        />
      </div>

      <div className={styles.testimonialBox}>
        <div className={styles.videoWrapper}>
          <video controls poster="/testimonial-thumb.jpg" className={styles.video}>
            <source src="/testimonial.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.quote}>
          <p>
            “Transac reduces our receipt management costs by 80% while increasing
            loyalty signups 3x.”
          </p>
          <span>— CFO, 15-location retail chain</span>
        </div>
      </div>
    </section>
  );
}
