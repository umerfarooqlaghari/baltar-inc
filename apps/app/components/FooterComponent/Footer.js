'use client'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Form */}
        <div className="footer-left">
          <h2 className="footer-heading">
            Fill the form <span className="highlight">to contact us.</span>
          </h2>
          <form className="contact-form">
            <div className="name-fields">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="E-mail" />
            <textarea placeholder="How can we help you? Describe your problem"></textarea>
            <button type="submit">Send message</button>
          </form>
        </div>

      </div>
    </footer>
  )
}
