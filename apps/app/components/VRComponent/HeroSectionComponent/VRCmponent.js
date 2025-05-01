'use client';
import { useRef } from 'react';
import styles from './VRComponent.module.css';
import Link from 'next/link';

export default function VRPage() {
  const videoLeftRef = useRef(null);
  const videoRightRef = useRef(null);

  const handlePlay = (ref) => {
    if (ref.current) {
      ref.current.play();
    }
  };

  const handlePause = (ref) => {
    if (ref.current) {
      ref.current.pause();
    }
  };

  return (
    <div className={styles.vrContainer}>
      <div className={styles.centerHeading}>
        <Link href="/vr" className={styles.cleanLink}>VR</Link>
      </div>

      <div className={styles.videosWrapper}>
        <div
          className={styles.half}
          onMouseEnter={() => handlePlay(videoLeftRef)}
          onMouseLeave={() => handlePause(videoLeftRef)}
        >
          <video
            ref={videoLeftRef}
            muted
            loop
            playsInline
            className={`${styles.bgVideo} ${styles.dimmedVideo}`}
          >
            <source src="/videos/left.mp4" type="video/mp4" />
          </video>
          <div className={styles.textOverlay}>
            <h2>Fashion & Accessories</h2>
            <Link href="/consumer-pulse-comingsoon" className={styles.cleanButton}>Shop now</Link>
          </div>
        </div>

        <div
          className={styles.half}
          onMouseEnter={() => handlePlay(videoRightRef)}
          onMouseLeave={() => handlePause(videoRightRef)}
        >
          <video
            ref={videoRightRef}
            muted
            loop
            playsInline
            className={`${styles.bgVideo} ${styles.dimmedVideo}`}
          >
            <source src="/videos/right.mp4" type="video/mp4" />
          </video>
          <div className={styles.textOverlay}>
            <h2>Fragrance & Beauty</h2>
            <Link href="/consumer-pulse-comingsoon" className={styles.cleanButton}>Shop now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
