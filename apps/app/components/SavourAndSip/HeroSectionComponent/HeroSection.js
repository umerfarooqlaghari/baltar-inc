"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./HeroSection.module.css";

const slides = [
  {
    video: "/savourandsip.mp4",
    image: "/food1.jpg",
    title: "WELCOME TO SAVOUR & SIP",
    description: "Indulge in personalized culinary experiences with a professional personal chef. Specializing in farm-to-table ingredients, vegan, and gluten-free diets.",
    buttonText: "Explore more",
  },
  {
    video: "/giftcard.mp4",
    image: "/giftcard.jpg",
    title: "Get a giftcard from Savour & Sip",
    description: "",
    buttonText: "Redeem",
  },
  {
    video: "/food.mp4",
    image: "/food3.jpg",
    title: "Food with Savour & Sip",
    description: "",
    buttonText: "Dive in",
  },
];

const features = [
  "AI-Powered Menu Builder",
  "Client Booking System",
  "E-Commerce for Event Packages",
  "Monthly Subscription Menus",
  "Live Chat & AI Support",
  "Event Planning Assistance",
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // ⭐️ NEW
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) { // jab hero ke neeche jaaye
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    router.push("/savour-and-sip-coming-soon");
    setMenuOpen(false);
  };

  const handleButtonClick = () => {
    router.push("/savour-and-sip-coming-soon");
  };

  return (
    <div className={styles.heroContainer}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            {isMobile ? (
              <img src={slide.image} alt={slide.title} className={styles.bgVideo} />
            ) : (
              <video
                src={slide.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className={styles.bgVideo}
              />
            )}
            <div className={styles.overlay}></div>
            <div className={styles.heroContent}>
              <h1>{slide.title}</h1>
              {slide.description && <p>{slide.description}</p>}
              <button className={styles.heroButton} onClick={handleButtonClick}>
                {slide.buttonText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navbar */}
      <div
        className={styles.heroNavbar}
        style={{
          opacity: showNavbar ? 1 : 0,
          transition: "opacity 0.6s ease",
          pointerEvents: showNavbar ? "auto" : "none",
        }}
      >
        <button className={styles.menuButton} onClick={() => setMenuOpen(true)}>☰</button>
        <button className={styles.locationButton} onClick={handleButtonClick}>
          Locations
        </button>
      </div>

      {/* Sidebar */}
      {menuOpen && (
        <>
          <div className={styles.menuBackdrop} onClick={() => setMenuOpen(false)}></div>
          <div className={styles.sidebarMenu}>
            <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>×</button>
            <div className={styles.menuSections}>
              <div className={styles.leftMenu}>
                <h3>Our Features</h3>
                <ul>
                  {features.map((feature, index) => (
                    <li key={index} onClick={handleMenuClick}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
