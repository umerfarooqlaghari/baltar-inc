import { Geist, Geist_Mono } from "next/font/google";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Baltar-Inc',
  description: 'Landing page for Baltar-Inc',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className="bg-gray-50 text-gray-900">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Section */}
          <div className="flex flex-col flex-1">
            <Navbar />
            <main className="flex-1 p-4">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
