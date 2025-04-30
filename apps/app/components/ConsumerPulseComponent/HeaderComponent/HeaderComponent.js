'use client';
import styles from './HeaderComponent.module.css';
import Image from 'next/image';
import Link from 'next/link';


export default function ConsumerPulseHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.logo}>Consumer Pulse</div>
        <div className={styles.actions}>
          <Link href="/consumer-pulse-signin" className={styles.actionLink}>Sign In</Link>
          <a href="/consumer-pulse-comingsoon" className={styles.subscribeBtn}>Subscribe</a>
        </div>
      </div>
      <div className={styles.navbar}>
        <ul className={styles.navItems}>
          <li><a href="/consumer-pulse-comingsoon">Live TV</a></li>
          <li><a href="/consumer-pulse-comingsoon">Markets</a></li>
          <li><a href="/consumer-pulse-comingsoon">Economics</a></li>
          <li><a href="/consumer-pulse-comingsoon">Industries</a></li>
          <li><a href="/consumer-pulse-comingsoon">Tech</a></li>
          <li><a href="/consumer-pulse-comingsoon">Politics</a></li>
          <li><a href="/consumer-pulse-comingsoon">Businessweek</a></li>
          <li><a href="/consumer-pulse-comingsoon">Opinion</a></li>
          <li><a href="/consumer-pulse-comingsoon">More ▼</a></li>
        </ul>
        <input
          type="text"
          placeholder="Keywords to find news"
          className={styles.searchInput}
        />
      </div>
    </header>
  );
}
