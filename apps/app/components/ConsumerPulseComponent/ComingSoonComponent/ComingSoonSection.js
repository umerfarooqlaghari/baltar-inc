'use client';

import { motion } from 'framer-motion';
import styles from './ComingSoonSection.module.css';

export default function ComingSoonSection() {
  return (
    <div className={styles.comingSoonContainer}>
      <div className={styles.topBar}>
        <div className={styles.brand}>Consumer Pulse</div>
        <div className={styles.tagline}>Bringing you news from all around the globe</div>
      </div>

      <motion.h1
        className={styles.title}
        animate={{
          x: [0, 20, -20, 20, 0],
          y: [0, -10, 10, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        Coming Soon!
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        animate={{
          x: [-10, 10, -10],
          y: [5, -5, 5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        Real-time Consumer Insights, Delivered Effortlessly.
      </motion.p>
    </div>
  );
}
