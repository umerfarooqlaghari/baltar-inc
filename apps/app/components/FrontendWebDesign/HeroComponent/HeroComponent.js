'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './HeroComponent.module.css';

const quickSnapshots = [
  { icon: '🌐', label: 'Domain & Hosting' },
  { icon: '🎨', label: 'Custom Design' },
  { icon: '⚙️', label: 'Site Management' },
  { icon: '📱', label: 'Mobile & SEO' },
  { icon: '🛒', label: 'E-Commerce' },
  { icon: '🔒', label: 'SSL & Analytics' }
];

const trustedByClients = [
  'Doctors', 'Startups', 'Creatives', 'LGBT-owned businesses',
  'Restaurants', 'Consultants', 'Non-profits', 'Retailers'
];

const whyChooseUs = [
  'Complete website management - no technical headaches for you',
  'Lightning-fast loading speeds and mobile optimization',
  'SEO-optimized from day one to help you get found online',
  'Secure hosting with SSL certificates and daily backups',
  'Ongoing support and updates included in every package',
  'Custom designs that reflect your brand and convert visitors'
];

export default function HeroComponent() {
  const router = useRouter();

  const handleStartWebsite = () => {
    router.push('/frontend-web-design-quote');
  };

  const handleViewPortfolio = () => {
    router.push('/frontend-web-design-portfolio');
  };

  const handleGetQuote = () => {
    router.push('/frontend-web-design-quote');
  };

  const handleGetStarted = () => {
    router.push('/frontend-web-design-quote');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1-647-555-0123';
  };

  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.backgroundAnimation}>
          <div className={styles.animatedElements}>
            <div className={styles.codeBlock}>{'<div className="website">'}</div>
            <div className={styles.wireframe}></div>
            <div className={styles.designElement}></div>
          </div>
        </div>

        <div className={styles.heroContent}>
          <motion.div
            className={styles.contentWrapper}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.headline}>
              Beautiful, Fast & Fully Managed Websites — No Headaches, Just Results.
            </h1>

            <p className={styles.subheadline}>
              From domain to design and everything in between — we're your all-in-one solution for powerful websites that convert, impress, and grow with your business.
            </p>

            <div className={styles.ctaButtons}>
              <button className={styles.primaryCta} onClick={handleStartWebsite}>
                Start Your Website Now
              </button>
              <button className={styles.secondaryCta} onClick={handleViewPortfolio}>
                View Portfolio
              </button>
              <button className={styles.tertiaryCta} onClick={handleGetQuote}>
                Get a Free Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Snapshot Section */}
      <section className={styles.quickSnapshot}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Quick Snapshot</h2>
          <div className={styles.snapshotGrid}>
            {quickSnapshots.map((item, index) => (
              <motion.div
                key={index}
                className={styles.snapshotTile}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.snapshotIcon}>{item.icon}</div>
                <span className={styles.snapshotLabel}>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className={styles.trustedBy}>
        <div className={styles.container}>
          <h3 className={styles.trustedTitle}>Trusted By</h3>
          <div className={styles.clientTypes}>
            {trustedByClients.map((client, index) => (
              <span key={index} className={styles.clientType}>
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.introContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.introTitle}>Full-Service Web Solutions by Baltar Technologies</h2>
            <p className={styles.introText}>
              At Baltar Technologies, we believe your website should be your most powerful business tool, not your biggest headache.
              That's why we offer complete, fully-managed web solutions that handle everything from initial design and development
              to ongoing maintenance, security, and optimization. Whether you're a healthcare professional, creative entrepreneur,
              or growing startup, we create custom websites that not only look stunning but drive real business results.
              With our all-inclusive approach, you can focus on what you do best while we ensure your online presence works 24/7 to grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseUs}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Us</h2>
          <div className={styles.benefitsList}>
            {whyChooseUs.map((benefit, index) => (
              <motion.div
                key={index}
                className={styles.benefitItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className={styles.checkIcon}>✓</span>
                <span className={styles.benefitText}>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Bar */}
      <div className={styles.ctaFooterBar}>
        <div className={styles.footerContent}>
          <div className={styles.footerMessage}>
            <span>Ready to launch your dream website?</span>
            <button className={styles.phoneButton} onClick={handlePhoneClick}>
              📞 (647) 555-0123
            </button>
          </div>
          <button className={styles.footerCta} onClick={handleGetStarted}>
            Get Started →
          </button>
        </div>
      </div>
    </>
  );
}
