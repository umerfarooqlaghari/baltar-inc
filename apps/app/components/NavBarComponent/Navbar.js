'use client'
import Link from 'next/link'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">Baltar Inc</div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/">Services</Link>
          <Link href="/">Portfolio</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
