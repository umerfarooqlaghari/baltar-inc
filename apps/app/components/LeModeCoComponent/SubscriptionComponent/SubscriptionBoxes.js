'use client';

import styles from './subscriptionBoxes.module.css';

const plans = [
  {
    name: 'Essentials Box',
    price: '$79/month',
    features: ['3 curated outfits', 'Exclusive accessories', 'Free returns & exchanges', 'Personal stylist access'],
    bestFor: 'Minimalist wardrobe lovers',
  },
  {
    name: 'Luxury Box',
    price: '$149/month',
    features: ['6 premium outfits', 'Designer brands', 'Priority shipping', 'VIP styling support'],
    bestFor: 'Luxury lifestyle enthusiasts',
    popular: true,
  },
  {
    name: 'Bespoke Box',
    price: 'Custom Pricing',
    features: ['Fully tailored wardrobe', 'Exclusive collaborations', 'Personal fashion consultant', 'Priority events access'],
    bestFor: 'Fashion-forward elites',
  },
];

export default function SubscriptionBoxes() {
  return (
    <section className={styles.subscriptionSection} id="subscription">
      <h2 className={styles.heading}>Monthly Curated Fashion Boxes</h2>
      <div className={styles.grid}>
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
          >
            {plan.popular && <div className={styles.badge}>Most Loved</div>}
            <h3 className={styles.title}>{plan.name}</h3>
            <p className={styles.price}>{plan.price}</p>
            <ul className={styles.features}>
              {plan.features.map((feat, i) => (
                <li key={i}>✔ {feat}</li>
              ))}
            </ul>
            <div className={styles.tooltip}>Ideal For: {plan.bestFor}</div>
            <a href="/le-mode-co-comingsoon" className={styles.cta}>Subscribe Now</a>
          </div>
        ))}
      </div>
    </section>
  );
}
