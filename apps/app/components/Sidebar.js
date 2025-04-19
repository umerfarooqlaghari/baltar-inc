'use client'
import { useState } from 'react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`transition-all duration-300 h-full z-40 bg-white border-r
      ${isOpen ? 'w-1/6 min-w-[200px]' : 'w-[1cm]'} flex flex-col items-start p-2`}>
      
      {/* Hamburger */}
      <button onClick={() => setIsOpen(!isOpen)} className="mb-4">
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-gray-800"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </div>
      </button>

      {/* Links */}
      {isOpen && (
        <nav className="space-y-2 mt-4 w-full">
          <a href="#" className="block px-2 py-1 text-sm text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block px-2 py-1 text-sm text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="block px-2 py-1 text-sm text-gray-700 hover:text-blue-600">Services</a>
          <a href="#" className="block px-2 py-1 text-sm text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      )}
    </div>
  )
}
