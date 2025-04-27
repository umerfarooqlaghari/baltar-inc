import Footer from '../components/LeModeCoComponent/FooterComponent/Footer';  
import Header from '../components/LeModeCoComponent/HeaderComponent/Header';  
import HeroSection from '../components/LeModeCoComponent/HeroSectionComponent/HeroSection';  
import InfluencerPartnerships from '../components/LeModeCoComponent/InfluencerPartnershipComponent/InfluencerPartnerships';
import LookbookSection from '../components/LeModeCoComponent/LookBookComponent/LookBookSection';
import SubsriptionSection from '../components/LeModeCoComponent/SubscriptionComponent/SubscriptionBoxes';



export default function HomePage() {  
  return (  
    <div>  
      <Header />  
      <HeroSection/>
      <LookbookSection/>
      <SubsriptionSection/>
      <InfluencerPartnerships/>
      <Footer/>
    </div>  
  );  
}  