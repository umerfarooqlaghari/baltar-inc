'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './StickyFooter.module.css';

export default function StickyFooter() {
  const router = useRouter();

  const handleQuoteClick = () => {
    router.push('/quote-section');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:(XXX) XXX-XXXX';
  };

  return (
    <motion.div 
      className={styles.stickyFooter}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className={styles.footerContent}>
        <div className={styles.messageSection}>
          <p className={styles.footerMessage}>
            Need last-minute staffing or help planning your event?
          </p>
        </div>
        
        <div className={styles.actionSection}>
          <div className={styles.phoneSection}>
            <span className={styles.phoneLabel}>Call us today:</span>
            <button 
              className={styles.phoneNumber}
              onClick={handlePhoneClick}
              aria-label="Call Savour & Sip"
            >
              📞 (647) 555-0123
            </button>
          </div>
          
          <button 
            className={styles.ctaButton}
            onClick={handleQuoteClick}
          >
            Get an Instant Quote →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
