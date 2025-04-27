'use client';

import styles from './lookbookSection.module.css';
import { useState } from 'react';

const categories = ['Clothes', 'Shoes', 'Accessories', 'Bags', 'Watches'];

export default function LookbookSection() {
  const [activeCategory, setActiveCategory] = useState(null);

  const lookbookImages = {
    Clothes: ['/clothes1.jpg', '/clothes2.jpg', '/clothes3.jpg'],
    Shoes: ['/shoes1.jpg', '/shoes2.jpg', '/shoes3.jpg'],
    Accessories: ['/accessories1.jpg', '/accessories2.jpg', '/accessories3.jpg'],
    Bags: ['/bags1.jpg', '/bags2.jpg', '/bags3.jpg'],
    Watches: ['/watches1.jpg', '/watches2.jpg', '/watches3.jpg'],
  };

  return (
    <section className={styles.lookbookSection}>
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            ↗ {category}
          </button>
        ))}
      </div>

      {activeCategory && (
        <div className={styles.gallery}>
          {lookbookImages[activeCategory].map((imgSrc, idx) => (
            <img key={idx} src={imgSrc} alt={activeCategory} className={styles.galleryImage} />
          ))}
        </div>
      )}
    </section>
  );
}
