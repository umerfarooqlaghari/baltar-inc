// components/Transac/AppDownload/AppDownload.js
'use client';

import styles from './AppDownload.module.css';
import Image from 'next/image';

export default function AppDownload() {
  return (
    <section className={styles.downloadSection} id="app-download">
      <div className={styles.container}>
        <div className={styles.mockup}>
          <Image
            src="/app-mockup.png"
            alt="App Mockup"
            width={300}
            height={600}
            className={styles.image}
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
            <Image src="/app-store-badge.svg" alt="App Store" width={140} height={40} />
            <Image src="/play-store-badge.svg" alt="Google Play" width={140} height={40} />
          </div>
        </div>
      </div>
    </section>
  );
}
