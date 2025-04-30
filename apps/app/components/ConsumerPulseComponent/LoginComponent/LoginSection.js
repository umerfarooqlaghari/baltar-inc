'use client';
import styles from './LoginSection.module.css';
import Link from 'next/link';


export default function LoginSection() {
  return (
    <div className={styles.authContainer}>
            <div className={styles.formBox}>
            <div className={styles.CenterItems}>

      <h2>Log In</h2>
      </div>
      <input type="email" placeholder="Email" className={styles.input} />
      <input type="password" placeholder="Password" className={styles.input} />
      <div className={styles.options}>
        <label><input type="checkbox" /> Remember me</label>
        <a href="#">Forgot Password?</a>
      </div>
      <button className={styles.primaryBtn}>Log In</button>
      <p className={styles.switchText}>Don't have an account? <Link href="/consumer-pulse-signup">Sign Up</Link></p>
    </div>
    </div>
  );
}
