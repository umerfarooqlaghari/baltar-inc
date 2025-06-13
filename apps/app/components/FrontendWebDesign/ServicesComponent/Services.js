'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    id: 'web-design',
    icon: '🎨',
    title: 'Custom Web Design',
    subtitle: 'Beautiful, Fast & Conversion-Optimized',
    description: 'Mobile-first, fast, branded, and conversion-optimized designs.',
    features: [
      'Mobile-first responsive design',
      'Fast loading speeds (under 3 seconds)',
      'Brand-aligned visual identity',
      'Conversion-optimized layouts',
      'User experience (UX) focused',
      'Blog integration (optional)',
      'Custom graphics and imagery',
      'Modern design trends'
    ]
  },
  {
    id: 'domain',
    icon: '🌐',
    title: 'Domain Name Registration',
    subtitle: 'Your Perfect Web Address',
    description: 'Domain search, registration, DNS setup, privacy, and transfers.',
    features: [
      'Domain availability search',
      'Registration and renewal',
      'DNS configuration and setup',
      'Domain privacy protection',
      'Domain transfers and management',
      'Multiple TLD options (.com, .org, .net)',
      'Email forwarding setup',
      'Subdomain configuration'
    ]
  },
  {
    id: 'hosting',
    icon: '🖥️',
    title: 'Web Hosting',
    subtitle: 'Reliable, Secure & Fast',
    description: 'Shared/dedicated, free SSL, CDN, CPanel, daily backups.',
    features: [
      'Shared and dedicated hosting options',
      'Free SSL certificates included',
      'Content Delivery Network (CDN)',
      'CPanel control panel access',
      'Daily automated backups',
      '99.9% uptime guarantee',
      'SSD storage for faster performance',
      '24/7 server monitoring'
    ]
  },
  {
    id: 'email',
    icon: '📧',
    title: 'Professional Email',
    subtitle: 'Business-Grade Email Solutions',
    description: 'Setup with Gmail, Microsoft, or Zoho. Includes MX record config and sync.',
    features: [
      'Gmail Workspace integration',
      'Microsoft 365 setup',
      'Zoho Mail configuration',
      'MX record configuration',
      'Email sync across devices',
      'Custom email addresses (@yourdomain.com)',
      'Spam filtering and security',
      'Email forwarding and aliases'
    ]
  },
  {
    id: 'ecommerce',
    icon: '🛒',
    title: 'E-Commerce Solutions',
    subtitle: 'Sell Online with Confidence',
    description: 'Shopify, WooCommerce, Stripe/PayPal, inventory, carts, and promo tools.',
    features: [
      'Shopify store setup and customization',
      'WooCommerce integration',
      'Stripe and PayPal payment processing',
      'Inventory management systems',
      'Shopping cart optimization',
      'Promotional tools and discounts',
      'Product catalog management',
      'Order tracking and fulfillment'
    ]
  },
  {
    id: 'support',
    icon: '🔧',
    title: 'Ongoing Support',
    subtitle: 'We\'ve Got Your Back',
    description: 'Monthly updates, SEO, security, bug fixes, content changes.',
    features: [
      'Monthly website updates',
      'SEO optimization and monitoring',
      'Security patches and updates',
      'Bug fixes and troubleshooting',
      'Content updates and changes',
      'Performance optimization',
      'Backup management',
      'Technical support and consultation'
    ]
  },
  {
    id: 'advanced',
    icon: '⚡',
    title: 'Advanced Services',
    subtitle: 'Next-Level Digital Solutions',
    description: 'Google Ads, animations, booking systems, APIs, ADA compliance, analytics.',
    features: [
      'Google Ads campaign management',
      'Custom animations and interactions',
      'Online booking and scheduling systems',
      'API integrations and development',
      'ADA compliance and accessibility',
      'Google Analytics setup and reporting',
      'Custom functionality development',
      'Third-party service integrations'
    ]
  }
];

export default function Services() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleGetQuote = () => {
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
            Complete Web Solutions for Your Business
          </motion.h1>
          <p className={styles.subheadline}>
            From design to deployment and beyond — we handle every aspect of your digital presence
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <div className={styles.serviceTitleGroup}>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                </div>
              </div>
              
              <p className={styles.serviceDescription}>{service.description}</p>

              <div className={styles.featuresSection}>
                <h4 className={styles.featuresTitle}>What's Included:</h4>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.checkIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaDescription}>
            Let's discuss your project and create a custom solution that fits your needs and budget.
          </p>
          <button 
            className={styles.ctaButton}
            onClick={handleGetQuote}
          >
            Get Your Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}
