"use client";
import styles from './ContactUs.module.css';

export default function ContactUsComponent() {
  return (
    <section className={styles.contactSection}>
      <h1 className={styles.contactTitle}>Contact</h1>

      <div className={styles.formContainer}>
        <form className={styles.contactForm}>
          <div className={styles.row}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Company" />
          </div>
          <div className={styles.row}>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
          </div>
          <textarea className={styles.textarea} placeholder="Want to know more? Drop us a line!" />

          <div className={styles.submitRow}>

            <button type="submit" className={styles.sendButton}>
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
