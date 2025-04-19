'use client'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>Email: contact@baltariinc.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Address: Karachi, Pakistan</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Services</p>
          <p>Portfolio</p>
          <p>Contact</p>
        </div>
        <div className="footer-col">
          <h4>Stay in Touch</h4>
          <p>Subscribe to our newsletter</p>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  )
}
