import HeroComponent from '../components/FrontendWebDesign/HeroComponent/HeroComponent';
import AIAuditSection from '../components/FrontendWebDesign/AIAuditSection/AIAuditSection';
import WhatWeDoComponent from '../components/FrontendWebDesign/WhatWeDoComponent/WhatWeDoComponent';
import ClientDashboardSection from '../components/FrontendWebDesign/ClientDashboardComponent/ClientDashboardSection';
import DesignConsultationSection from '../components/FrontendWebDesign/DesignConsultationComponent/DesignConsultationSection';
import SEOReportsSection from '../components/FrontendWebDesign/SEOReportsComponent/SEOReportsSection';
import SubscriptionMaintenanceSection from '../components/FrontendWebDesign/SubscriptionMaintenanceComponent/SubscriptionMaintenanceSection';
import FooterSection from '../components/FrontendWebDesign/FooterComponent/FooterComponent';



export default function FrontendWebDesignPage() {
  return (
    <>
        <HeroComponent />
        <WhatWeDoComponent/>
        <AIAuditSection />
        <ClientDashboardSection />
        <DesignConsultationSection/>
        <SEOReportsSection/>
        <SubscriptionMaintenanceSection/>
        <FooterSection/>
    </>
  );
}
