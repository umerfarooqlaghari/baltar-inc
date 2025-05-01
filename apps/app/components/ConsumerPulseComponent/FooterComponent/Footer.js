'use client';
import styles from './Footer.module.css';

const footerData = [
  {
    heading: 'Home',
    links: ['BTV+', 'Market Data', 'Opinion', 'Audio', 'Originals', 'Magazine', 'Events'],
  },
  {
    heading: 'News',
    links: ['Markets', 'Economics', 'Technology', 'Politics', 'Green', 'Crypto', 'AI'],
  },
  {
    heading: 'Work & Life',
    links: ['Wealth', 'Pursuits', 'Businessweek', 'CityLab', 'Sports', 'Equality', 'Management & Work'],
  },
  {
    heading: 'Market Data',
    links: ['Stocks', 'Commodities', 'Rates & Bonds', 'Currencies', 'Futures', 'Sectors', 'Economic Calendar'],
  },
  {
    heading: 'Explore',
    links: ['Newsletters', 'Explainers', 'Pointed News Quiz', 'The Big Take', 'Graphics', 'Submit a Tip', 'About Us'],
  }
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {footerData.map((section, idx) => (
          <div key={idx} className={styles.column}>
            <h4>{section.heading}</h4>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}><a href="/consumer-pulse-comingsoon">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.links}>
          <a href="/consumer-pulse-comingsoon">Terms of Service</a>
          <a href="/consumer-pulse-comingsoon">Do Not Sell or Share My Personal Information</a>
          <a href="/consumer-pulse-comingsoon">Trademarks</a>
          <a href="/consumer-pulse-comingsoon">Privacy Policy</a>
        </div>
        <div className={styles.info}>
          <span>Careers</span>
          <span>Made in NYC</span>
          <span>Advertise</span>
          <span>Ad Choices</span>
          <span>Help</span>
        </div>
        <p>©2025 Consumer Pulse. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
