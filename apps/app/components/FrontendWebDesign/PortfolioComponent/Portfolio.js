'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';

const portfolioProjects = [
  {
    id: 1,
    screenshot: '/portfolio-healthcare.jpg',
    clientName: 'Dr. Sarah Medical Clinic',
    industry: 'Healthcare',
    keyFeatures: ['Online Appointments', 'Patient Portal', 'Insurance Integration', 'Mobile Responsive'],
    liveLink: 'https://drsarahclinic.com',
    isPublic: true
  },
  {
    id: 2,
    screenshot: '/portfolio-restaurant.jpg',
    clientName: 'Bella Vista Restaurant',
    industry: 'Food & Dining',
    keyFeatures: ['Online Ordering', 'Menu Management', 'Reservation System', 'Social Media Integration'],
    liveLink: 'https://bellavistarestaurant.com',
    isPublic: true
  },
  {
    id: 3,
    screenshot: '/portfolio-ecommerce.jpg',
    clientName: 'Confidential Client',
    industry: 'E-Commerce',
    keyFeatures: ['Product Catalog', 'Payment Processing', 'Inventory Management', 'Customer Reviews'],
    liveLink: '#',
    isPublic: false
  },
  {
    id: 4,
    screenshot: '/portfolio-creative.jpg',
    clientName: 'Creative Studio Pro',
    industry: 'Creative Services',
    keyFeatures: ['Portfolio Gallery', 'Client Testimonials', 'Contact Forms', 'Blog Integration'],
    liveLink: 'https://creativestudiopro.com',
    isPublic: true
  },
  {
    id: 5,
    screenshot: '/portfolio-nonprofit.jpg',
    clientName: 'Hope Foundation',
    industry: 'Non-Profit',
    keyFeatures: ['Donation System', 'Event Calendar', 'Volunteer Portal', 'Newsletter Signup'],
    liveLink: 'https://hopefoundation.org',
    isPublic: true
  },
  {
    id: 6,
    screenshot: '/portfolio-tech.jpg',
    clientName: 'TechStart Solutions',
    industry: 'Technology',
    keyFeatures: ['SaaS Platform', 'User Dashboard', 'API Integration', 'Analytics'],
    liveLink: 'https://techstartsolutions.com',
    isPublic: true
  }
];

const addOnServices = [
  {
    name: 'Logo Design',
    price: '$120',
    description: 'Professional logo design with 3 concepts and unlimited revisions',
    icon: '🎨'
  },
  {
    name: 'Maintenance',
    price: '$49/month',
    description: 'Monthly updates, security patches, backups, and technical support',
    icon: '🔧'
  },
  {
    name: 'Content Writing',
    price: '$75/page',
    description: 'Professional copywriting optimized for SEO and conversions',
    icon: '✍️'
  },
  {
    name: 'Booking System',
    price: '$150',
    description: 'Online appointment scheduling with calendar integration',
    icon: '📅'
  },
  {
    name: 'Google Business Setup',
    price: '$100',
    description: 'Complete Google My Business profile setup and optimization',
    icon: '🏢'
  }
];

export default function Portfolio() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleGetQuote = () => {
    router.push('/frontend-web-design-quote');
  };

  const handleBuildPackage = () => {
    router.push('/frontend-web-design-quote');
  };

  const handleProjectClick = (project) => {
    if (project.liveLink && project.liveLink !== '#') {
      window.open(project.liveLink, '_blank');
    }
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
            Our Portfolio
          </motion.h1>
          <p className={styles.subheadline}>
            Discover the websites we've crafted for businesses across various industries
          </p>
        </div>
      </header>

      {/* Portfolio Grid */}
      <section className={styles.portfolioSection}>
        <div className={styles.container}>
          <div className={styles.portfolioGrid}>
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleProjectClick(project)}
              >
                <div className={styles.projectImage}>
                  <img 
                    src={project.screenshot} 
                    alt={`${project.clientName} website`}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyNjAiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0U1RTdFQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzY2N0VFQSIvPgo8cmVjdCB4PSI0MCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjRTVFN0VCIi8+CjxyZWN0IHg9IjQwIiB5PSIxNDAiIHdpZHRoPSIxNjAiIGhlaWdodD0iMjAiIGZpbGw9IiNFNUU3RUIiLz4KPC9zdmc+';
                    }}
                  />
                  {project.liveLink && project.liveLink !== '#' && (
                    <div className={styles.liveLink}>
                      <span>🔗 View Live</span>
                    </div>
                  )}
                </div>
                
                <div className={styles.projectInfo}>
                  <div className={styles.projectHeader}>
                    <h3 className={styles.clientName}>{project.clientName}</h3>
                    <span className={styles.industry}>{project.industry}</span>
                  </div>
                  
                  <div className={styles.keyFeatures}>
                    <h4>Key Features:</h4>
                    <ul>
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <motion.div
            className={styles.portfolioCta}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Want a website like this?</h2>
            <button className={styles.ctaButton} onClick={handleGetQuote}>
              Get a free quote →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className={styles.addOnSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Optional Add-Ons</h2>
          <p className={styles.sectionSubtitle}>
            Enhance your website with these professional services
          </p>
          
          <div className={styles.addOnGrid}>
            {addOnServices.map((service, index) => (
              <motion.div
                key={index}
                className={styles.addOnCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.addOnIcon}>{service.icon}</div>
                <h3 className={styles.addOnName}>{service.name}</h3>
                <div className={styles.addOnPrice}>{service.price}</div>
                <p className={styles.addOnDescription}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Package CTA */}
      <section className={styles.packageCta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Build Your Custom Package?</h2>
          <p className={styles.ctaDescription}>
            Let's create a tailored solution that includes exactly what your business needs
          </p>
          <button 
            className={styles.packageButton}
            onClick={handleBuildPackage}
          >
            Build Your Own Package →
          </button>
        </div>
      </section>
    </div>
  );
}
