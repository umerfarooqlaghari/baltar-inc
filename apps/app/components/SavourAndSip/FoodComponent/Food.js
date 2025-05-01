'use client';

import React from 'react';
import styles from './Food.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const images = [
  '/food1.jpg', '/food2.jpg', '/food3.jpg', '/food4.jpg',
  '/food5.jpg', '/food6.jpg', '/food7.jpg', '/food8.jpg',
  '/food9.jpg', '/food1.jpg', '/food11.jpg', '/food12.jpg'
];

export default function FoodComponent() {
  return (
    <section className={styles.foodSection}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        grabCursor={true}
        className={styles.swiper}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className={styles.foodCard}>
              <img src={img} alt={`Dish ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
