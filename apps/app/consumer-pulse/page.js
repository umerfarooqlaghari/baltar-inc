import Footer from '../components/ConsumerPulseComponent/FooterComponent/Footer';
import HeaderComponent from '../components/ConsumerPulseComponent/HeaderComponent/HeaderComponent';
import MajorHeadlineSection from '../components/ConsumerPulseComponent/MajorHeadlinesComponent/MajorHeadlineSection';
import NewsSection from '../components/ConsumerPulseComponent/NewsComponent/NewsSection';
import SidebarComponent from '../components/ConsumerPulseComponent/SideBarComponent/SidebarComponent';

export default function TransacPage() {
  return (
    <>
      <HeaderComponent />
      <SidebarComponent />
      <MajorHeadlineSection/>
      <NewsSection/>
      <Footer/>
    </>
  );
}
