'use client';
import styles from './SignupSection.module.css';

export default function SignupSection() {
  return (
    <div className={styles.authContainer}>
          <div className={styles.FormBox}>
          <div className={styles.CenterItems}>
      <h2>Sign Up</h2>
      </div>
      <div className={styles.row}>
        <input type="text" placeholder="First Name" className={styles.input} />
        <input type="text" placeholder="Last Name" className={styles.input} />
      </div>
      <input type="email" placeholder="Email" className={styles.input} />
      <input type="tel" placeholder="Phone Number" className={styles.input} />
      <input type="password" placeholder="Password" className={styles.input} />
      <div className={styles.agreement}>
        <input type="checkbox" /> I agree to terms & privacy
      </div>
      <button className={styles.primaryBtn}>Sign Up</button>
      
      <p className={styles.switchText}>Already have an account? <a href="#">Log In</a></p>
    </div>
    </div>
  );
}
