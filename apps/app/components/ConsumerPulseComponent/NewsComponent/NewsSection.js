'use client';
import styles from './NewsSection.module.css';

export default function NewsSection() {
  // Later: Replace below with fetched API data
  const newsData = [
    {
      id: 1,
      title: "Mark Mobius Says His Funds Hold 95% in Cash on Trade War Risks",
      description:
        "Veteran investor Mark Mobius warns of market volatility as geopolitical tensions rise.",
      image: "/TradeWar.jpg", // Replace with actual image paths
    },
    {
      id: 2,
      title: "China Manufacturing Slumps on US Levies, Spurring Stimulus Calls",
      description:
        "China’s industrial output slowed sharply, prompting calls for central policy support.",
      image: "/USAChina.jpg",
    },
    {
        id: 3,
        title: "Mark Mobius Says His Funds Hold 95% in Cash on Trade War Risks",
        description:
          "Veteran investor Mark Mobius warns of market volatility as geopolitical tensions rise.",
        image: "/TradeWar.jpg", // Replace with actual image paths
      },
      {
        id: 4,
        title: "China Manufacturing Slumps on US Levies, Spurring Stimulus Calls",
        description:
          "China’s industrial output slowed sharply, prompting calls for central policy support.",
        image: "/USAChina.jpg",
      },
  ];

  return (
    <section className={styles.newsSection}>
      <h2 className={styles.sectionTitle}>Top Stories</h2>

      <div className={styles.newsGrid}>
        {newsData.map((item) => (
          <div key={item.id} className={styles.newsCard}>
            {/* 🔁 Later: Map API data into these cards */}
            <img src={item.image} alt={item.title} className={styles.image} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
