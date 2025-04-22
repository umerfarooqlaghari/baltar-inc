'use client';

import { usePathname } from 'next/navigation';
import Navbar from './NavBarComponent/Navbar';
import Footer from './FooterComponent/Footer';
import TransacHeader from './Transac/HeaderComponent/TransacHeader';
import FrontendHeader from './FrontendWebDesign/HeaderComponent/HeaderComponent'; // ✅ Import Frontend Header


export default function LayoutClient({ children }) {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isTransac = pathname === '/transac';
  const isFrontendDesign = pathname === '/frontend-web-design';
  const isComingSoonPage = pathname === '/coming-soon';
  const isAuthPage = pathname === '/signup' || pathname === '/login';
  const isTransacComingSoonPage = pathname === '/transac-coming-soon';
  const isFrontendComingSoonPage = pathname === '/frontend-web-design-comingsoon';


  return (
    <div className="w-full overflow-x-hidden bg-black text-white font-sans min-h-screen">
      <div className="flex w-full min-h-screen">
        <div className="flex flex-col flex-1 w-full">

          {/* ✅ Header Logic */}
          {!isAuthPage && !isTransacComingSoonPage && !isFrontendComingSoonPage && (
            isTransac 
              ? <TransacHeader />
              : isFrontendDesign 
                ? <FrontendHeader /> 
                : <Navbar />
          )}

          <main className="flex-1 w-full">{children}</main>

          {/* ✅ Footer Logic */}
          {!isTransac && !isTransacComingSoonPage && !isComingSoonPage && !isAuthPage && !isFrontendDesign && !isFrontendComingSoonPage &&(
            <Footer />
          )}
        </div>
      </div>
    </div>
  );
}
