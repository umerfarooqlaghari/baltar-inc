'use client';

import styles from './AboutSection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useRouter } from 'next/navigation'; // ✅ Import router
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function AboutUsSection() {
  const slides = [
    {
      title: 'Our Journey',
      text: `Founded by a team of hospitality enthusiasts, expert chefs, and creative bartenders, 
we set out to create experiences that connect people through food and drink, dedicated to making every event memorable. 
With years of expertise and an unwavering commitment to quality, our team brings a touch of artistry to every plate and every glass.`,
      image: '/journey.jpg',
    },
    {
      title: 'Our Philosophy',
      text: `We believe that food and drink are more than sustenance—they’re expressions of culture, creativity, and connection. 
Guided by this philosophy, we approach every dish and cocktail as an opportunity to create something special.`,
      image: '/philosophy.jpg',
    },
    {
      title: 'Our Services',
      text: `We offer a full range of culinary and beverage services, customized to fit the unique vision of each client. 
From private dinners and corporate events to large-scale celebrations, our team provides exceptional chef and bartender services tailored to your needs.`,
      image: '/service.jpg',
    },
  ];

  const router = useRouter(); // ✅ Initialize router

  const handleButtonClick = () => {
    router.push("/savour-and-sip-coming-soon");
  };

  return (
    <section className={styles.aboutUs}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        slidesPerView={1}
        spaceBetween={50}
        className={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideContent}>
              <div className={styles.imageWrapper}>
                <img src={slide.image} alt={slide.title} />
              </div>
              <div className={styles.textWrapper}>
                <p className={styles.subheading}>{slide.title.toUpperCase()}</p>
                <h2 className={styles.heading}>SAVOUR & SIP</h2>
                <p className={styles.description}>{slide.text}</p>
                <button className={styles.button} onClick={handleButtonClick}>
                  Explore More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
