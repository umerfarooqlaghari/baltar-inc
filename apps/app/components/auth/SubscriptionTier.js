'use client';
import './SubscriptionTier.css';

const plans = [
  {
    name: 'Starter',
    price: '$49/month',
    features: ['Up to 3 pages', 'Basic SEO', '1 revision', 'Email Support'],
    bestFor: 'Startups & Individuals',
  },
  {
    name: 'Growth',
    price: '$199/month',
    features: ['Up to 10 pages', 'Advanced SEO', 'CMS Integration', 'Priority Support'],
    bestFor: 'Growing Businesses',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited pages', 'Custom CMS', 'Dedicated Manager', 'Full Maintenance'],
    bestFor: 'Agencies & Corporates',
  },
];

export default function SubscriptionTier({ selected, onSelect }) {
  return (
    <section className="subscription-section">
      <h2 className="subscription-heading">Choose Your Subscription</h2>
      <div className="subscription-grid">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`subscription-card ${plan.popular ? 'popular' : ''} ${selected === plan.name ? 'selected' : ''}`}
            onClick={() => onSelect(plan.name)}
          >
            {plan.popular && <div className="badge">Most Popular</div>}
            <h3 className="subscription-title">{plan.name}</h3>
            <p className="subscription-price">{plan.price}</p>
            <ul className="subscription-features">
              {plan.features.map((feat, i) => (
                <li key={i}>✔ {feat}</li>
              ))}
            </ul>
            <div className="subscription-tooltip">Best For: {plan.bestFor}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
