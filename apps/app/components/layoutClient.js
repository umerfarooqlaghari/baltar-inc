'use client';

import { usePathname } from 'next/navigation';
import Navbar from './NavBarComponent/Navbar';
import Footer from './FooterComponent/Footer';
import Sidebar from './SideBarComponent/Sidebar';

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className="bg-black text-white font-sans min-h-screen flex">
      {!isHome && <Sidebar />}
      <div className="flex flex-col flex-1 w-full">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
