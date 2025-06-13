'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './AboutUs.module.css';

const values = [
  {
    icon: '✨',
    title: 'Simplicity in Design & Process',
    description: 'We believe great design should be intuitive and our process should be straightforward. No confusing jargon, no overwhelming choices — just clean, effective solutions that work.'
  },
  {
    icon: '🏠',
    title: 'Full Ownership',
    description: 'Your website is yours, completely. We provide full ownership of your domain, hosting, and all website assets. No vendor lock-in, no hidden dependencies.'
  },
  {
    icon: '💬',
    title: 'Clear Communication',
    description: 'We speak human, not tech. Every step of the process is explained clearly, and you always know what\'s happening with your project and when.'
  },
  {
    icon: '🤝',
    title: 'Inclusive & Client-First',
    description: 'We work with businesses of all sizes and backgrounds. Your success is our success, and we tailor our approach to fit your unique needs and budget.'
  },
  {
    icon: '🚀',
    title: 'Scalable Technology',
    description: 'We build websites that grow with your business. From simple landing pages to complex e-commerce platforms, our solutions scale as you do.'
  }
];

export default function AboutUs() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleGetStarted = () => {
    router.push('/frontend-web-design-quote');
  };

  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <header className={styles.header}>
        <button className={styles.backButton} onClick={handleBackClick}>
          ← Back
        </button>
        <div className={styles.headerContent}>
          <motion.h1 
            className={styles.headline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We Don't Just Build Websites — We Build Your Brand's Digital Home.
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
                Baltar Technologies was born from a simple frustration: why should great websites be complicated, expensive, or out of reach for most businesses? 
                Our founder, after years in the tech industry, witnessed countless small businesses and entrepreneurs struggle with overpriced, overcomplicated web solutions 
                that left them feeling overwhelmed and underserved.
              </p>
              <p>
                We believe every business deserves a digital presence that truly represents who they are and what they stand for. That's why we created Baltar Technologies — 
                to bridge the gap between high-end web development and accessibility. We're not just another web agency; we're your digital partners who understand that 
                behind every website is a real person with real dreams and real challenges.
              </p>
              <p>
                Our vision is simple: to democratize professional web development. Whether you're a healthcare professional starting your practice, 
                a creative launching your portfolio, or an established business looking to modernize, we bring the same level of care, expertise, 
                and attention to detail to every project. We believe in the human touch in an increasingly automated world.
              </p>
              <p>
                What sets us apart is our full-service nature. We don't just build your website and disappear. We handle everything — from domain registration 
                and hosting to ongoing maintenance and updates. Think of us as your in-house web team, without the overhead. We're here for the long haul, 
                growing with your business and adapting to your evolving needs.
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
              "To make high-end, fully managed websites accessible and affordable to everyone — from startups to established businesses."
            </p>
            <p className={styles.missionDescription}>
              We're committed to breaking down the barriers that have traditionally kept professional web development out of reach. 
              Every business, regardless of size or budget, deserves a website that works as hard as they do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.teamContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>The Human Touch</h2>
            <p className={styles.teamDescription}>
              Behind Baltar Technologies is a team of passionate developers, designers, and digital strategists who believe that technology should serve people, 
              not the other way around. We're not a faceless corporation — we're real people who care about your success and are always just a phone call or email away.
            </p>
            <p className={styles.teamDescription}>
              When you work with us, you're not just getting a website; you're gaining a partner who understands your industry, respects your vision, 
              and is committed to helping your business thrive in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Build Your Digital Home?</h2>
          <p className={styles.ctaDescription}>
            Let's create something amazing together. Your vision, our expertise, one incredible website.
          </p>
          <button 
            className={styles.ctaButton}
            onClick={handleGetStarted}
          >
            Start Your Project Today
          </button>
        </div>
      </section>
    </div>
  );
}
