'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './FeatureSection.module.css';

const features = [
  {
    title: "Who We Serve",
    description: [
    '1) Private Clients – Backyard parties, weddings, home dinners, birthdays ',
    '2) Corporate Clients – Office events, brand launches, fundraisers, galas ',
    '3) Restaurants & Hospitality – Short-term or ongoing kitchen/front-of-house staffing ',
    '4) Event Planners & Venues – Reliable partners for multiple events, weekly or on-call',
  ],
    
  },
  {
    title: "Client Reviews",
    description: [
    '1) The team from Savour & Sip were the best bartenders I’ve ever hired. On time, dressed impeccably, and our guests loved them!” — Private Wedding, Mississauga ',
    '2) I was blown away by their attention to detail and how effortlessly they staffed our restaurant grand opening.” — Restaurant Manager, Toronto ',
    ],
  },
  {
    title: "Events We Serve",
    description: "Private Events, Weddings, Corporate Events, Venue Partnerships, Pop-Ups & Brand Launches.",
  },
  {
    title: "Pricing & Packages",
    description: "Get a Custom Quote",
    isQuoteCard: true,
  },

  {
    title: "Services",
    description: "Bartending, Catering, Kitchen & Restaurant Staffing, Event Staffing",
    isServiceCard: true,
  },
  {
    title: "About us",
    description: "about us",
    isAboutCard: true,
  }
];

export default function FeatureSection() {
  const router = useRouter();

  const handleFeatureClick = (feature) => {
    if (feature.isQuoteCard) {
      router.push('/quote-section');
    } else if (feature.isServiceCard) {
      router.push('/service-section');
    } else if (feature.isAboutCard) {
      router.push('/about-section');
    } else {
      router.push('/savour-and-sip-coming-soon');
    }
  };



  return (
    <>
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
              onClick={() => handleFeatureClick(feature)}
            >
              <p className={styles.smallTitle}>{feature.title}</p>
              <p className={styles.description}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
