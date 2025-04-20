'use client';

import { usePathname } from 'next/navigation';
import Navbar from './NavBarComponent/Navbar';
import Footer from './FooterComponent/Footer';
// import Sidebar from './SideBarComponent/Sidebar';
import ComingSoonPage from '../coming-soon/page';

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isTransac = pathname === '/transac';
  const isFrontendDesign = pathname=== '/frontend-web-design';
  const isComingSoonPage = pathname === '/coming-soon';

  return (
    <div className="w-full overflow-x-hidden bg-black text-white font-sans min-h-screen">
      <div className="flex w-full min-h-screen">
        {/* ✅ Show Sidebar only if NOT Home or Transac or FrontendWeb design */}
        {/* {!isHome && !isTransac  && !isFrontendDesign && <Sidebar />} */}

        <div className="flex flex-col flex-1 w-full">
          <Navbar />
          <main className="flex-1 w-full">{children}</main>

          {/* ✅ Show Footer on all pages EXCEPT Transac */}
          {!isTransac && !isComingSoonPage &&  <Footer />}
        </div>
      </div>
    </div>
  );
}
