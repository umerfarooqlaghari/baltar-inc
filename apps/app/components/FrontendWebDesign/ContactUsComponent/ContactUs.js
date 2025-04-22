'use client';

import styles from './ContactUs.module.css';
import { useState } from 'react';

export default function ContactUsComponent() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    // Here, you can connect to your API endpoint to send form data
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Let’s Work Together</h1>
        <p className={styles.subtitle}>
          Got an idea, project or partnership in mind? Reach out and let’s make it real.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className={styles.input}
              value={form.name}
              onChange={handleChange}
              required
            />
            <span className={styles.focusBorder}></span>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
              value={form.email}
              onChange={handleChange}
              required
            />
            <span className={styles.focusBorder}></span>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className={styles.input}
              value={form.subject}
              onChange={handleChange}
              required
            />
            <span className={styles.focusBorder}></span>
          </div>

          <div className={styles.inputGroup}>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className={`${styles.input} ${styles.textarea}`}
              value={form.message}
              onChange={handleChange}
              required
            />
            <span className={styles.focusBorder}></span>
          </div>

          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
