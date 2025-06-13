'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ContactUs.module.css';

const serviceOptions = [
  'Custom Web Design',
  'E-Commerce Development',
  'Website Redesign',
  'Domain & Hosting',
  'SEO Optimization',
  'Maintenance & Support',
  'Logo Design',
  'Content Writing',
  'Google Ads Management',
  'Booking System Integration'
];

const businessTypes = [
  'Healthcare/Medical',
  'Restaurant/Food Service',
  'E-Commerce/Retail',
  'Professional Services',
  'Non-Profit Organization',
  'Technology/SaaS',
  'Creative/Agency',
  'Real Estate',
  'Education',
  'Other'
];

export default function ContactUs() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    businessType: '',
    email: '',
    phone: '',
    services: [],
    message: ''
  });

  const handleBackClick = () => {
    router.back();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        businessType: '',
        email: '',
        phone: '',
        services: [],
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1-647-555-0123';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@baltartechnologies.com';
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={handleBackClick}>
          ← Back
        </button>
        <div className={styles.headerContent}>
          <h1 className={styles.headline}>
            Contact Us
          </h1>
          <p className={styles.subheadline}>
            Ready to start your project? Let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </header>

      <div className={styles.contentWrapper}>
        <section className={styles.formSection}>
          <div className={styles.container}>
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="businessType" className={styles.formLabel}>Business/Project Type *</label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className={styles.formSelect}
                      required
                    >
                      <option value="">Select Business Type</option>
                      {businessTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.formLabel}>Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="(647) 555-0123"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>What You Need (Select all that apply)</label>
                  <div className={styles.checkboxGrid}>
                    {serviceOptions.map((service, index) => (
                      <label key={index} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className={styles.checkbox}
                        />
                        <span className={styles.checkboxText}>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    rows="5"
                    placeholder="Tell us about your project, timeline, budget, or any specific requirements..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className={styles.contactInfo}>
          <div className={styles.container}>
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>Get in Touch</h2>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem} onClick={handlePhoneClick}>
                  <div className={styles.contactIcon}>📞</div>
                  <div className={styles.contactText}>
                    <h3>Phone</h3>
                    <p>(647) 555-0123</p>
                  </div>
                </div>

                <div className={styles.contactItem} onClick={handleEmailClick}>
                  <div className={styles.contactIcon}>📧</div>
                  <div className={styles.contactText}>
                    <h3>Email</h3>
                    <p>hello@baltartechnologies.com</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📍</div>
                  <div className={styles.contactText}>
                    <h3>Office Address</h3>
                    <p>123 Innovation Drive<br />Toronto, ON M5V 3A8<br />Canada</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>🕓</div>
                  <div className={styles.contactText}>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                       Saturday: 10:00 AM - 4:00 PM EST<br />
                       Sunday: Closed</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>🌎</div>
                  <div className={styles.contactText}>
                    <h3>Service Area</h3>
                    <p>Canada-wide<br />Remote services available</p>
                  </div>
                </div>
              </div>

              <div className={styles.responseTime}>
                <h3>⚡ Quick Response</h3>
                <p>We typically respond to all inquiries within 24 hours during business days.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
