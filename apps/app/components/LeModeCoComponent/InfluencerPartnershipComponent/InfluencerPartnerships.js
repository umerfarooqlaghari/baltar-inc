'use client';

import { useEffect, useRef } from 'react';
import styles from './influencerPartnerships.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Real-time Engagement Tracking",
    description: "Instantly monitor likes, shares, and comments across influencer campaigns to optimize performance.",
    videoSrc: "/SocialMedia.mp4", // Replace with your video path
  },
  {
    title: "Smart Collaboration Matches",
    description: "AI suggests best-fit influencers based on your brand's style, audience, and campaign goals.",
    videoSrc: "/ModelCollab.mp4",
  },
  {
    title: "Performance Analytics & Insights",
    description: "Deep dive into metrics, campaign ROI, and actionable reports for future strategies.",
    videoSrc: "/trends.mp4",
  },
];

export default function InfluencerPartnerships() {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      cardsRef.current.forEach((card, idx) => {
        gsap.fromTo(
          card,
          {
            scaleX: 0.3,
            scaleY: 0.3,
            opacity: 0,
            y: 150,
            transformOrigin: "center center",
          },
          {
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 1.2,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section className={styles.influencerSection} id="influencer">
      <h2 className={styles.heading}>Empowering Influencer Partnerships with AI</h2>
      <p className={styles.subtext}>Track. Analyze. Collaborate. Grow.</p>

      <div className={styles.grid}>
        {features.map((feature, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className={styles.card}
          >
            {/* Video Background */}
            <video
              src={feature.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className={styles.bgVideo}
            />
            {/* Content overlay */}
            <div className={styles.contentOverlay}>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
