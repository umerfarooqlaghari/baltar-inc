'use client';

import styles from './AppDownload.module.css';
import Image from 'next/image';

export default function AppDownload() {
  return (
    <section className={styles.downloadSection} id="app">
      <div className={styles.container}>
        <div className={styles.mockup}>
          <Image
            src="/app-mockup.png"
            alt="App Mockup"
            width={300}
            height={600}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.content}>
          <h2>Your Wallet, Upgraded</h2>
          <ul>
            <li>✔ Instant digital receipts</li>
            <li>✔ Unified loyalty cashout</li>
            <li>✔ Tax-time exports (CRA-ready)</li>
          </ul>

          <div className={styles.badges}>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <Image src="/app-store-badge.svg" alt="App Store" width={140} height={40} />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <Image src="/play-store-badge.svg" alt="Google Play" width={140} height={40} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
