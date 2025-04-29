'use client';
import React from 'react';
import styles from './ComingSoon.module.css';
import { motion } from 'framer-motion';

export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.logo}
      >
      </motion.div>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
                <h1>Coming Soon!</h1>
        <p>We are crafting something amazing for you. Stay tuned!</p>

      </motion.div>

      {/* Footer Text */}
      <motion.div
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p>© {new Date().getFullYear()} Le Mode Co. All rights reserved.</p>
      </motion.div>
    </div>
  );
}
