import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClient from "./components/layoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Baltar Inc",
  description: "Immersive modern homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
       <head>
        {/* ✅ Ensures mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div style={{ overflowX: 'hidden', width: '100%' }}>
          <LayoutClient>{children}</LayoutClient>
        </div>
      </body>
    </html>
  );
}
