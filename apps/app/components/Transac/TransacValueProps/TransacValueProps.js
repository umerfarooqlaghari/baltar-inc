import styles from './TransacValueProps.module.css';

const cards = [
  {
    title: '1-Click Compliance',
    icon: '🏛️',
    desc: 'Automated GST/HST tracking and audit-ready exports for every transaction.',
  },
  {
    title: 'Loyalty Without Limits',
    icon: '♻️',
    desc: 'Merge third-party rewards programs (Air Miles, Scene+) into your brand’s ecosystem.',
  },
  {
    title: 'Future-Proof Hardware',
    icon: '⚡',
    desc: 'Our adapter works with 20-year-old Epson printers—no POS upgrades needed.',
  },
];

export default function TransacValueProps() {
  return (
    <section className={styles.section} id="why">
      <h2 className={styles.heading}>
        Why 3,000+ Canadian Businesses Choose Transac
      </h2>
      <div className={styles.cards}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.icon}>{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
