'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './ServiceSection.module.css';

const services = [
  {
    id: 'bartending',
    title: 'Bartending Services',
    subtitle: 'Professional Mixology Excellence',
    description: 'Elevate your events with our skilled bartenders who craft memorable experiences through exceptional service and signature cocktails.',
    events: ['Weddings', 'Corporate Events', 'Private Parties', 'Galas', 'Product Launches'],
    roles: ['Lead Bartender', 'Cocktail Specialist', 'Wine Sommelier', 'Bar Manager'],
    features: [
      'Custom cocktail menu creation',
      'Premium bar setup and equipment',
      'Professional flair bartending',
      'Wine and spirit expertise',
      'Full bar inventory management'
    ],
    signature: 'Signature Cocktail: "Savour Sunset" - Our award-winning blend of premium spirits with house-made syrups',
    icon: '🍸'
  },
  {
    id: 'catering',
    title: 'Catering Services',
    subtitle: 'Culinary Excellence Delivered',
    description: 'From intimate dinners to grand celebrations, our chef-driven catering services deliver exceptional cuisine tailored to your vision.',
    events: ['Weddings', 'Corporate Meetings', 'Social Events', 'Holiday Parties', 'Milestone Celebrations'],
    services: ['Full-service catering', 'Drop-off catering', 'Buffet service', 'Plated dinners', 'Cocktail receptions'],
    styles: ['Contemporary American', 'Mediterranean', 'Asian Fusion', 'Farm-to-Table', 'International Cuisine'],
    chefQuality: 'Our executive chefs bring Michelin-starred experience and culinary school expertise to every event',
    icon: '👨‍🍳'
  },
  {
    id: 'kitchen-staffing',
    title: 'Kitchen & Restaurant Staffing',
    subtitle: 'Seamless Culinary Team Integration',
    description: 'Professional kitchen staff who integrate seamlessly with your existing team to maintain quality and efficiency during peak periods.',
    roles: ['Executive Chef', 'Sous Chef', 'Line Cooks', 'Prep Cooks', 'Kitchen Manager', 'Dishwashers'],
    useCases: [
      'Temporary staffing during busy seasons',
      'Event-specific kitchen support',
      'Staff shortage coverage',
      'New restaurant opening support',
      'Special event kitchen expansion'
    ],
    integration: 'Our staff undergo rigorous training to adapt to your kitchen systems, recipes, and service standards within hours',
    icon: '🔪'
  },
  {
    id: 'event-staffing',
    title: 'Event Staffing',
    subtitle: 'Professional Service Excellence',
    description: 'Trained hospitality professionals who deliver impeccable service and create memorable experiences for your guests.',
    eventTypes: ['Weddings', 'Corporate Functions', 'Charity Galas', 'Award Ceremonies', 'Private Dinners'],
    roles: ['Event Servers', 'Captains', 'Hosts/Hostesses', 'Coat Check', 'Event Coordinators'],
    training: 'All staff complete our 40-hour hospitality training program covering service excellence, etiquette, and emergency protocols',
    professionalism: 'Uniformed, background-checked professionals with extensive hospitality experience',
    icon: '🎩'
  }
];

export default function ServiceSection() {
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
          <h1 className={styles.pageTitle}>Our Services</h1>
          <p className={styles.pageSubtitle}>
            Professional hospitality services tailored to elevate your events and operations
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
                <span className={styles.serviceIcon}>{service.icon}</span>
                <div>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                </div>
              </div>
              
              <p className={styles.serviceDescription}>{service.description}</p>

              <div className={styles.serviceDetails}>
                {/* Events/Event Types */}
                {(service.events || service.eventTypes) && (
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailTitle}>Events We Serve</h4>
                    <div className={styles.tagList}>
                      {(service.events || service.eventTypes).map((event, idx) => (
                        <span key={idx} className={styles.tag}>{event}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Roles */}
                {service.roles && (
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailTitle}>Available Roles</h4>
                    <div className={styles.tagList}>
                      {service.roles.map((role, idx) => (
                        <span key={idx} className={styles.tag}>{role}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {service.features && (
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailTitle}>Key Features</h4>
                    <ul className={styles.featureList}>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Services */}
                {service.services && (
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailTitle}>Service Options</h4>
                    <div className={styles.tagList}>
                      {service.services.map((svc, idx) => (
                        <span key={idx} className={styles.tag}>{svc}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Styles */}
                {service.styles && (
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailTitle}>Cuisine Styles</h4>
                    <div className={styles.tagList}>
                      {service.styles.map((style, idx) => (
                        <span key={idx} className={styles.tag}>{style}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Use Cases */}
                {service.useCases && (
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailTitle}>Ideal Use Cases</h4>
                    <ul className={styles.featureList}>
                      {service.useCases.map((useCase, idx) => (
                        <li key={idx}>{useCase}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Special Highlights */}
                {service.signature && (
                  <div className={styles.highlightSection}>
                    <p className={styles.highlight}>{service.signature}</p>
                  </div>
                )}

                {service.chefQuality && (
                  <div className={styles.highlightSection}>
                    <h4 className={styles.detailTitle}>Chef Excellence</h4>
                    <p className={styles.highlight}>{service.chefQuality}</p>
                  </div>
                )}

                {service.integration && (
                  <div className={styles.highlightSection}>
                    <h4 className={styles.detailTitle}>Seamless Integration</h4>
                    <p className={styles.highlight}>{service.integration}</p>
                  </div>
                )}

                {service.training && (
                  <div className={styles.highlightSection}>
                    <h4 className={styles.detailTitle}>Training & Excellence</h4>
                    <p className={styles.highlight}>{service.training}</p>
                  </div>
                )}

                {service.professionalism && (
                  <div className={styles.highlightSection}>
                    <h4 className={styles.detailTitle}>Professionalism</h4>
                    <p className={styles.highlight}>{service.professionalism}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Elevate Your Event?</h2>
          <p className={styles.ctaDescription}>
            Contact us today to discuss your hospitality needs and receive a custom quote
          </p>
          <button 
            className={styles.ctaButton}
            onClick={() => router.push('/quote-section')}
          >
            Get Custom Quote
          </button>
        </div>
      </section>
    </div>
  );
}
