import styles from './FeatureBoxes.module.css';
import Image from 'next/image';

const data = [
  {
    title: 'Baltor Finance',
    desc: 'Delivering sleek digital tools for managing, growing, and visualizing wealth with clarity and confidence.',
    img: '/bank.svg', // put this image in public folder
    link: '/',
  },
  {
    title: 'Baltor Hospitality',
    desc: 'Crafting modern hospitality solutions that elevate dining experiences with style, service, and smart design.',
    img: '/person-arms-up.svg',
    link: '/',
  },
  {
    title: 'Baltor Technologies',
    desc: 'Powering brands with pixel-perfect interfaces and immersive digital experiences that captivate and convert.',
    img: '/gear.svg',
    link: '/',
  },
  {
    title: 'Baltar Retail',
    desc: 'Reinventing retail with smart commerce solutions that fuse design, tech, and customer-centric strategy.',
    img: '/shop.svg',
    link: '/',
  },
  {
    title: 'Baltar Fashion',
    desc: 'Merging luxury fashion with immersive tech, redefining style through innovation, elegance, and experience.',
    img: '/person-standing-dress.svg',
    link: '/',
  },
  {
    title: 'Baltar Media',
    desc: 'Shaping narratives and driving engagement through data-driven storytelling and cutting-edge digital content.',
    img: '/film.svg',
    link: '/',
  },
  {
    title: 'Baltar Consulting',
    desc: 'Empowering visionary firms with tailored digital infrastructure and precision-driven consulting solutions.',
    img: '/map.svg',
    link: '/',
  }
];

export default function FeatureBoxes() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Services Provided by Baltar INC.</h2>

      <div className={styles.grid}>
        {data.map((item, i) => (
          <div className={styles.card} key={i}>
            <Image src={item.img} alt={item.title} width={240} height={160} className={styles.image} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
            <a href={item.link} className={styles.link}>
              Learn more <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
