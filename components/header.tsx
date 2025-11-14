'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [openMenu, setOpenMenu] = useState<'career' | 'plans' | null>(null)

  const handleMouseEnter = (menu: 'career' | 'plans') => setOpenMenu(menu)
  const handleMouseLeave = () => setOpenMenu(null)

  return (
    <header className="header-container">

      {/* Logo */}
      <div className="header-logo">
        <Image
          src="/cnv_logo_rback.png"
          alt="Logo do site"
          width={300}
          height={300}
          className="header-logo-img"
        />
      </div>

      {/* Navbar */}
      <nav className="header-nav">

        {/* ===== Career Submenu ===== */}
        <div
          className="submenu-wrapper"
          onMouseEnter={() => handleMouseEnter('career')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="submenu-button">Career</button>

          <div
            className={`submenu-panel ${openMenu === 'career' ? 'open' : ''}`}
          >
            <ul className="submenu-list">
              <li><Link href="/carreira/mentoria" className="submenu-item">Front-end Developer</Link></li>
              <li><Link href="/carreira/projetos" className="submenu-item">Back-end Developer</Link></li>
              <li><Link href="/carreira/fullstack" className="submenu-item">Fullstack Developer</Link></li>
              <li><Link href="/carreira/devops" className="submenu-item">DevOps</Link></li>
            </ul>
          </div>
        </div>

        {/* Other links */}
        <Link href="/" className="nav-link">Community</Link>

        {/* ===== Plans Submenu ===== */}
        <div
          className="submenu-wrapper"
          onMouseEnter={() => handleMouseEnter('plans')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="submenu-button">Plans</button>

          <div
            className={`submenu-panel ${openMenu === 'plans' ? 'open' : ''}`}
          >
            <ul className="submenu-list">
              <li><Link href="/planos/basic" className="submenu-item">Basic</Link></li>
              <li><Link href="/planos/plus" className="submenu-item">Plus</Link></li>
            </ul>
          </div>
        </div>

        <Link href="/" className="nav-link">Contact</Link>
        <Link href="/" className="nav-link">Login</Link>
      </nav>
    </header>
  )
}
