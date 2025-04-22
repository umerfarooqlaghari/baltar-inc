'use client';
import { useEffect } from 'react';
import HeroComponent from '../components/FrontendWebDesign/HeroComponent/HeroComponent';
import WhatWeDoComponent from '../components/FrontendWebDesign/WhatWeDoComponent/WhatWeDoComponent';
import AIAuditSection from '../components/FrontendWebDesign/AIAuditSection/AIAuditSection';
import ClientDashboardSection from '../components/FrontendWebDesign/ClientDashboardComponent/ClientDashboardSection';
import DesignConsultationSection from '../components/FrontendWebDesign/DesignConsultationComponent/DesignConsultationSection';
import SEOReportsSection from '../components/FrontendWebDesign/SEOReportsComponent/SEOReportsSection';
import SubscriptionMaintenanceSection from '../components/FrontendWebDesign/SubscriptionMaintenanceComponent/SubscriptionMaintenanceSection';
import FooterSection from '../components/FrontendWebDesign/FooterComponent/FooterComponent';
import BubbleHeadComponent from '../components/FrontendWebDesign/BubbleHeadComponent/BubbleHeadComponent';
import '../components/FrontendWebDesign/CursorComponent/Cursor.css'; // 🔥 Import cursor CSS

export default function FrontendWebDesignPage() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'frontend-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <>
      <HeroComponent />
      <WhatWeDoComponent />
      <AIAuditSection />
      <ClientDashboardSection />
      <DesignConsultationSection />
      <SEOReportsSection />
      <SubscriptionMaintenanceSection />
      <FooterSection />
      <BubbleHeadComponent />
    </>
  );
}
