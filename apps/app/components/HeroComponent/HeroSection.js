'use client'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
        <h1>This is Baltar Inc</h1>
        <p>Elevating Brands Through Cutting-Edge Web Design</p>
        <div className="hero-buttons">
          <button>Explore Services</button>
          <button>Book a Consultation</button>
        </div>
      </div>
    </section>
  )
}
