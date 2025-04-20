'use client';
import { useEffect, useState, useRef } from 'react';
import './FrontEndWeb.css';

export default function FrontEndWebDesign() {
  const auditRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (auditRef.current) observer.observe(auditRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="frontend-container">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>Frontend Web Design & Web Management</h1>
          <p>
            Empowering businesses with sleek, responsive websites and powerful
            management dashboards – crafted for speed, visibility, and results.
          </p>
        </div>
      </section>

      {/* 2. AI Website Audit Tool Section (Split Animation) */}
      <section className="feature-audit-section" ref={auditRef}>
        <div className="video-wrapper">
          <video autoPlay muted loop playsInline className={`audit-video ${inView ? 'joined' : ''}`}>
            <source src="/AIAudit.mp4" type="video/mp4" />
          </video>
          <div className={`video-slice left ${inView ? 'joined' : ''}`}></div>
          <div className={`video-slice right ${inView ? 'joined' : ''}`}></div>
        </div>

        <div className="audit-content">
          <div className="audit-card">
            <h2>AI Website Audit Tool</h2>
            <p>
              Run instant diagnostics on your site’s SEO, performance, and security. Our AI audit tool gives actionable insights tailored for growth.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="grid-section">
        <h2>Smart Web Services</h2>
        <div className="card-grid">
          {[ 
            {
              title: 'Client Dashboard',
              desc: 'Track project status, invoices, file uploads, and team communication – all from a secure dashboard.',
              video: '/graphs.mp4',
            },
            {
              title: 'Design Consultation Booking',
              desc: 'Schedule discovery calls or project meetings in seconds through an intuitive self-booking interface.',
              video: '/booking.mp4',
            },
            {
              title: 'SEO Reports',
              desc: 'Automated SEO reports emailed to your clients – powered by Node.js and Lighthouse CI.',
              video: '/SEO.mp4',
            },
            {
              title: 'Subscription Maintenance',
              desc: 'Offer your clients monthly maintenance with auto-renew billing and on-demand support for your futuristic applications.',
              video: '/subscribe.mp4',
            },
          ].map((item, idx) => (
            <div className="card-wrapper" key={idx}>
              <div className="service-card">
                <video autoPlay muted loop playsInline className="card-video">
                  <source src={item.video} type="video/mp4" />
                </video>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
