'use client';

import { usePathname } from 'next/navigation';
import Navbar from './NavBarComponent/Navbar';
import Footer from './FooterComponent/Footer';
import TransacHeader from './Transac/HeaderComponent/TransacHeader';
import FrontendHeader from './FrontendWebDesign/HeaderComponent/HeaderComponent';
import PageLoader from './SavourAndSip/PageAnimationComponent/PageAnimation'; // ✅ Import loader

export default function LayoutClient({ children }) {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isTransac = pathname === '/transac';
  const isFrontendDesign = pathname === '/frontend-web-design';
  const isComingSoonPage = pathname === '/coming-soon';
  const isAuthPage = pathname === '/signup' || pathname === '/login';
  const isTransacComingSoonPage = pathname === '/transac-coming-soon';
  const isFrontendComingSoonPage = pathname === '/frontend-web-design-comingsoon';
  const isFrontendContactUsPage = pathname === '/frontend-web-design-contact-us';
  const isLeModeCoPage = pathname === '/le-mode-co';
  const isLeModeCoComingSoonPage = pathname === '/le-mode-co-comingsoon';
  const isLeModeCoContactUsPage = pathname === '/le-mode-co-contact-us';
  const isSavourAndSip = pathname === '/sip-and-savour'; 
  const isSavourAndSipComingSoonPage = pathname === '/savour-and-sip-coming-soon';

  return (
    <div className="w-full overflow-x-hidden bg-black text-white font-sans min-h-screen">
      {/* ✅ Special handling for Savour & Sip page */}
      {isSavourAndSip ? (
        <>
          <PageLoader />
          <main className="flex-1 w-full">{children}</main>
        </>
      ) : (
        <>
          <div className="flex w-full min-h-screen">
            <div className="flex flex-col flex-1 w-full">

              {/* ✅ Header */}
              {!isSavourAndSipComingSoonPage&&!isAuthPage && 
                !isFrontendContactUsPage &&
                !isTransacComingSoonPage &&
                !isFrontendComingSoonPage &&
                !isLeModeCoPage && !isLeModeCoComingSoonPage && !isLeModeCoContactUsPage && (
                  isTransac 
                    ? <TransacHeader />
                    : isFrontendDesign 
                      ? <FrontendHeader />
                      : <Navbar />
              )}

              {/* ✅ Main Content */}
              <main className="flex-1 w-full">{children}</main>

              {/* ✅ Footer */}
              {!isSavourAndSipComingSoonPage&&!isTransac &&
                !isFrontendContactUsPage &&
                !isTransacComingSoonPage &&
                !isComingSoonPage &&
                !isAuthPage &&
                !isFrontendDesign &&
                !isFrontendComingSoonPage &&
                !isLeModeCoPage &&&& !isLeModeCoComingSoonPage && !isLeModeCoContactUsPage && (
                  <Footer />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
