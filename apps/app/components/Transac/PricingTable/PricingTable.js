// components/Transac/PricingTable/PricingTable.js
'use client';

import styles from './PricingTable.module.css';

const plans = [
  {
    name: 'Starter',
    price: '$49/month',
    features: ['500 receipts/mo', 'Square', 'Basic Loyalty Tools', 'Email Support'],
    bestFor: 'Cafés with 1 location',
  },
  {
    name: 'Growth',
    price: '$199/month',
    features: ['5,000 receipts/mo', 'Clover + Lightspeed', 'Advanced Rules', 'Priority Chat Support'],
    bestFor: 'Scaling Retail Brands',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited receipts', 'All + Legacy POS', 'API Access', 'Dedicated Manager'],
    bestFor: 'Franchise Chains & Corporates',
  },
];

export default function PricingTable() {
  return (
    <section className={styles.pricingSection}>
      <h2 className={styles.heading}>Pricing for Every Business Size</h2>
      <div className={styles.grid}>
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
          >
            {plan.popular && <div className={styles.badge}>Most Popular</div>}
            <h3 className={styles.title}>{plan.name}</h3>
            <p className={styles.price}>{plan.price}</p>
            <ul className={styles.features}>
              {plan.features.map((feat, i) => (
                <li key={i}>✔ {feat}</li>
              ))}
            </ul>
            <div className={styles.tooltip}>Best For: {plan.bestFor}</div>
            <button className={styles.cta}>Calculate Your Savings</button>
          </div>
        ))}
      </div>
    </section>
  );
}