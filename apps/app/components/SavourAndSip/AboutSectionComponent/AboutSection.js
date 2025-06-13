'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './AboutSection.module.css';

const whatSetsUsApart = [
  {
    icon: '🏆',
    title: 'Smart Serve Certified',
    description: 'All our bartenders and servers are Smart Serve certified, ensuring responsible alcohol service at every event.'
  },
  {
    icon: '🛡️',
    title: 'Fully Insured',
    description: 'Comprehensive liability insurance coverage gives you peace of mind for every event we staff.'
  },
  {
    icon: '⚡',
    title: 'Flexible Scheduling',
    description: 'From last-minute requests to long-term partnerships, we adapt to your scheduling needs.'
  },
  {
    icon: '🏠',
    title: 'Locally Owned',
    description: 'Proudly Ontario-based, we understand the local market and build lasting community relationships.'
  },
  {
    icon: '🤝',
    title: 'Relationship-Focused',
    description: 'We prioritize long-term partnerships over one-time transactions, growing with your business.'
  }
];

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    photo: '/team-placeholder-1.jpg',
    description: 'Former restaurant manager with 15+ years in hospitality'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Operations',
    photo: '/team-placeholder-2.jpg',
    description: 'Culinary school graduate and event coordination specialist'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Client Relations Manager',
    photo: '/team-placeholder-3.jpg',
    description: 'Expert in customer service and hospitality excellence'
  },
  {
    name: 'David Thompson',
    role: 'Lead Bartender',
    photo: '/team-placeholder-4.jpg',
    description: 'Certified sommelier and mixology expert'
  }
];

export default function AboutSection() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <header className={styles.header}>
        <button className={styles.backButton} onClick={handleBackClick}>
          ← Back to Savour & Sip
        </button>
        <div className={styles.headerContent}>
          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Crafted in Hospitality. Rooted in Passion.
          </motion.h1>
        </div>
      </header>

      {/* Company Story */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <motion.div
            className={styles.storyContent}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <div className={styles.storyText}>
              <p>
                Founded in the heart of Ontario, Savour & Sip was born from a simple belief: every event deserves exceptional hospitality.
                What started as a small team of passionate hospitality professionals has grown into Ontario's premier staffing and catering company.
              </p>
              <p>
                Our journey began when our founder, Sarah Johnson, noticed a gap in the market for reliable, professional hospitality staffing.
                After years of managing high-end restaurants and witnessing countless events fall short of their potential due to inadequate service,
                she decided to create a solution.
              </p>
              <p>
                Today, we're proud to serve hundreds of clients across Ontario, from intimate private dinners to grand corporate galas.
                Our team has grown, but our commitment remains the same: delivering impeccable service that transforms good events into unforgettable experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.missionContent}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.missionTitle}>Our Mission</h2>
            <p className={styles.missionStatement}>
              "To elevate the standard of hospitality staffing and catering across Ontario — one perfect event at a time."
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className={styles.differentiatorSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Sets Us Apart</h2>
          <div className={styles.differentiatorGrid}>
            {whatSetsUsApart.map((item, index) => (
              <motion.div
                key={index}
                className={styles.differentiatorCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.differentiatorIcon}>{item.icon}</div>
                <h3 className={styles.differentiatorTitle}>{item.title}</h3>
                <p className={styles.differentiatorDescription}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Meet the Team</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.teamPhoto}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0NCQTEzNSIvPgo8cGF0aCBkPSJNNTAgMTYwQzUwIDEzNS4xNDcgNzAuMTQ3IDExNSA5NSAxMTVIMTA1QzEyOS44NTMgMTE1IDE1MCAxMzUuMTQ3IDE1MCAxNjBWMjAwSDUwVjE2MFoiIGZpbGw9IiNDQkExMzUiLz4KPC9zdmc+';
                    }}
                  />
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamDescription}>{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Work Together?</h2>
          <p className={styles.ctaDescription}>
            Let's discuss how we can make your next event extraordinary
          </p>
          <div className={styles.ctaButtons}>
            <button
              className={styles.ctaButton}
              onClick={() => router.push('/quote-section')}
            >
              Get Custom Quote
            </button>
            <button
              className={styles.ctaButtonSecondary}
              onClick={() => router.push('/service-section')}
            >
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
