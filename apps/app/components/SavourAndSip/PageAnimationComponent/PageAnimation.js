"use client";

import { useEffect, useState } from "react";
import styles from "./PageAnimation.module.css";

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.loader}>
      <h1>SAVOUR & SIP</h1>
    </div>
  );
}
