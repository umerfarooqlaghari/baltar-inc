'use client';

import { usePathname } from 'next/navigation';
import Navbar from './NavBarComponent/Navbar';
import Footer from './FooterComponent/Footer';
import TransacHeader from './Transac/HeaderComponent/TransacHeader'; // ✅ Import TransacHeader

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isTransac = pathname === '/transac';
  const isFrontendDesign = pathname === '/frontend-web-design';
  const isComingSoonPage = pathname === '/coming-soon';
  const isAuthPage = pathname === '/signup' || pathname === '/login';

  return (
    <div className="w-full overflow-x-hidden bg-black text-white font-sans min-h-screen">
      <div className="flex w-full min-h-screen">
        <div className="flex flex-col flex-1 w-full">

          {/* ✅ Show TransacHeader on /transac, Navbar on others except /signup & /signin */}
          {!isAuthPage && (
            isTransac ? <TransacHeader /> : <Navbar />
          )}

          <main className="flex-1 w-full">{children}</main>

          {/* ✅ Hide Footer on /transac, /coming-soon, /signup, /signin */}
          {!isTransac && !isComingSoonPage && !isAuthPage && <Footer />}
        </div>
      </div>
    </div>
  );
}
