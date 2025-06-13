import HeroSection from '../components/SavourAndSip/HeroSectionComponent/HeroSection';
import FoodComponent from '../components/SavourAndSip/FoodComponent/Food';
import FeatureSection from '../components/SavourAndSip/FeatureSectionComponent/FeatureSection.js';
import Footer from '../components/SavourAndSip/FooterComponent/Footer';
import StickyFooter from '../components/SavourAndSip/StickyFooterComponent/StickyFooter';

export default function SavourSipPage() {
  return<>
       <HeroSection />
       <FoodComponent/>
       <FeatureSection/>
       <Footer/>
       <StickyFooter/>
        </>
}
