'use client';
import styles from './HeroComponent.module.css';

export default function HeroComponent() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.heroText}>
          Crafting stunning interfaces <br />
          <span className={styles.textBefore}>that don’t just</span> <br />
          <span className={styles.highlightWrapper}>
            <span className={styles.videoOval}>
              <video
                src="/FrontendCircle.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={styles.heroVideo}
              />
            </span>
            <span className={styles.textAfter}>  look good — they perform.

            </span>
          </span>
          <br />
        </h1>
      </div>
    </section>
  );
}
