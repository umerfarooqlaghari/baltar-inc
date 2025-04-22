'use client';
import { useEffect, useRef } from 'react';
import styles from './BubbleHeadComponent.module.css';
import { useRouter } from 'next/navigation';

export default function BubbleHeadComponent() {
  const router = useRouter();
  const eyeRef = useRef(null);

  useEffect(() => {
    const moveEye = (e) => {
      const eye = eyeRef.current;
      if (!eye) return;

      const rect = eye.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;
      const dx = e.clientX - eyeX;
      const dy = e.clientY - eyeY;

      const angle = Math.atan2(dy, dx);
      const radius = 5;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      eye.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', moveEye);
    return () => window.removeEventListener('mousemove', moveEye);
  }, []);

  const handleClick = () => {
    router.push('/contact-us');
  };

  return (
    <div className={styles.bubbleWrapper} onClick={handleClick}>
      <div className={styles.rotatingRing}>
        B A L T A R &nbsp; • &nbsp; c o n t a c t &nbsp; • &nbsp; B A L T A R &nbsp; •
      </div>
      <div className={styles.faceWrapper}>
        <img
          src="/bitmoji.png"
          alt="Bubble Head"
          className={styles.faceImage}
        />
        <div className={styles.eye} ref={eyeRef}></div>
      </div>
    </div>
  );
}
