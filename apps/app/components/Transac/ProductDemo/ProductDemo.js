'use client';

import { useState } from 'react';
import styles from './ProductDemo.module.css';

export default function ProductDemo() {
  const [selected, setSelected] = useState('Clover');

  return (
    <section className={styles.demoSection} id="demo">
      <h2 className={styles.heading}>Watch Transac in Action</h2>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <label htmlFor="pos-select">Choose POS System</label>
          <select
            id="pos-select"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className={styles.dropdown}
          >
            <option>Clover</option>
            <option>Square</option>
            <option>Legacy (Adaptor)</option>
          </select>
          <ul className={styles.features}>
            <li>✔ Card tap auto-detection</li>
            <li>✔ Multi-merchant loyalty dashboard</li>
            <li>✔ Tax category tagging (GST/PST/HST)</li>
          </ul>
        </div>

        <div className={styles.right}>
          <video
            src="/transac-demo.mp4"
            controls
            className={styles.demoVideo}
            poster="/transac-demo.png"
          />
          <a href="/coming-soon" className={styles.demoButton}>Try Live Demo →</a>
        </div>
      </div>
    </section>
  );
}
