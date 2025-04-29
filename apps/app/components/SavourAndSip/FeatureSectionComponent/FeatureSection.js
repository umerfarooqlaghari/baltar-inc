'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './FeatureSection.module.css';

const features = [
  {
    title: "AI-Powered Menu Builder",
    description: "Let your cravings run wild — customize your catering menu to fit every dietary quirk, fancy, or obsession. Our AI ensures no guest feels left out.",
  },
  {
    title: "Client Booking System",
    description: "Book catering, bartending, or a private chef faster than you can say ‘Bon Appétit!’ — right from your device, anytime, anywhere.",
  },
  {
    title: "E-Commerce for Event Packages",
    description: "Planning a soirée? Grab curated event packages & party rentals at a tap — because unforgettable nights deserve effortless planning.",
  },
  {
    title: "Monthly Subscription Menus",
    description: "Say hello to culinary surprises! Subscribe and receive exclusive monthly menu drops crafted by top chefs, designed to excite your tastebuds.",
  },
  {
    title: "Live Chat & AI Support",
    description: "Got a question at 2am? Our AI concierge is ready to chat — answering all your dietary, pricing, and availability needs with zero sass (or maybe a little).",
  },
  {
    title: "Event Planning Assistance",
    description: "Not sure how much food or wine you need? Our AI event guru tailors your menu perfectly to your guest list, vibe, and (most importantly) your wallet.",
  }
];

export default function FeatureSection() {
  const router = useRouter();

  const handleFeatureClick = () => {
    router.push('/savour-and-sip-coming-soon');
  };

  return (
    <section className={styles.featureSection}>
      <div className={styles.container}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={styles.featureCard}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            onClick={handleFeatureClick} // ✅ Updated here
          >
            <p className={styles.smallTitle}>{feature.title}</p>
            <p className={styles.description}>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
