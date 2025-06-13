'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './QuoteSection.module.css';

export default function QuoteSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    date: '',
    numberOfGuests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form submission logic here
    router.push('/savour-and-sip-coming-soon');
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.pageContainer}>
      {/* Header with back button */}
      <header className={styles.header}>
        <button className={styles.backButton} onClick={handleBackClick}>
          ← Back to Savour & Sip
        </button>
      </header>

      {/* Custom Quote Section */}
      <section className={styles.quoteSection}>
        <div className={styles.quoteContainer}>
          <motion.div
            className={styles.quoteCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className={styles.quoteTitle}>Get a Custom Quote</h1>
            <p className={styles.quoteMessage}>
              Let us know your vision, and we'll send you a tailored estimate within 24 hours.
            </p>
            
            <form className={styles.quoteForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="eventType" className={styles.formLabel}>Event Type *</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                    required
                  >
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="private-party">Private Party</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="date" className={styles.formLabel}>Event Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="numberOfGuests" className={styles.formLabel}>Number of Guests *</label>
                <input
                  type="number"
                  id="numberOfGuests"
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  min="1"
                  placeholder="e.g., 50"
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Get My Custom Quote
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
