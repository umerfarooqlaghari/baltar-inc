'use client'
import { useState } from 'react'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  const menuItems = [
    { label: 'Baltar Consulting' },
    { label: 'Baltar Health Management' },
    { label: 'Baltar Finance' },
    {
      label: 'Baltar Technologies',
      subMenu: ['Front-End Web design', 'Transac'],
    },
  ]

  const handleItemClick = (item) => {
    if (item.subMenu) {
      setOpenSubMenu((prev) => !prev)
    }
  }

  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : styles.sidebarCollapsed}`}
    >
      {/* Toggle Button */}
      <button onClick={toggleSidebar} className={styles.toggleBtn}>
        {isOpen ? '<' : '>'}
      </button>

      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className={styles.logoContainer}>
          <span className="text-xl font-bold">{isOpen ? 'Baltar Inc' : ''}</span>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          {menuItems.map((item, idx) => (
            <div key={idx}>
              <div
                className={`${styles.navItem} ${item.subMenu ? 'cursor-pointer' : ''}`}
                title={!isOpen ? item.label : ''}
                onClick={() => handleItemClick(item)}
              >
                {/* No icon now */}
                {isOpen && (
                  <>
                    <span className="text-base font-medium">{item.label}</span>
                    {item.subMenu && (
                      <span className={`ml-auto transition-transform ${openSubMenu ? 'rotate-90' : ''}`}>▶</span>
                    )}
                  </>
                )}
              </div>

              {/* Submenu */}
              {isOpen && item.subMenu && openSubMenu && (
                <div className={styles.subMenu}>
                  {item.subMenu.map((sub, subIdx) => (
                    <div key={subIdx} className={styles.subMenuItem}>
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}
