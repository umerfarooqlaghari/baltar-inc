"use client";
import styles from "./SidebarComponent.module.css";
import { useState } from "react";

export default function SidebarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  // Fake static news — to be replaced with API later
  const latestNews = [
    { time: "16 min", title: "Russia Steps Up Attacks on Ukraine" },
    { time: "21 min", title: "Estonia May Send Troops to Ukraine" },
    { time: "35 min", title: "Marvel's Thunderbolts Movie Is Good" },
    { time: "35 min", title: "UK Stats Office Gender Survey Change" },
    { time: "50 min", title: "Treasuries Steady Ahead of Plan" },
    { time: "50 min", title: "Startup Plane Maker Relocates" },
  ];

  return (
    <div className={`${styles.sidebarContainer} ${isOpen ? styles.open : ""}`}>
      <button
    className={`${styles.toggleButton} ${isOpen ? styles.closeButton : ""}`}
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? "×" : "Latest"}
  </button>

      {isOpen && (
        <aside className={styles.sidebar}>
          <div className={styles.header}>
            <h3>Latest</h3>
            <select className={styles.category}>
              <option>All categories</option>
            </select>
          </div>
          <ul className={styles.newsList}>
            {latestNews.map((item, index) => (
              <li key={index}>
                <span className={styles.time}>{item.time}</span>
                <span className={styles.title}>{item.title}</span>
              </li>
            ))}
          </ul>
          <a className={styles.viewAll} href="#">See all latest ›</a>
        </aside>
      )}
    </div>
  );
}
