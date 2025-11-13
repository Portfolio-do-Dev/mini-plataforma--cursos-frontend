'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [openMenu, setOpenMenu] = useState<'career' | 'plans' | null>(null) // control witch submenu is open

  const handleMouseEnter = (menu: 'career' | 'plans') => setOpenMenu(menu)
  const handleMouseLeave = () => setOpenMenu(null)

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-gray-950 to-gray-900 shadow-lg relative">

      {/* Logo */}
      <div className="flex items-center gap-3 ml-24">
        <Image
          src="/cnv_logo_rback.png"
          alt="Logo do site"
          width={300}
          height={300}
          className="w-40 h-40 rounded-full object-cover scale-150"
        />
      </div>

      {/* Header Navbar */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-20 text-3xl text-orange-300 px-8 py-3 rounded-xl backdrop-blur-md shadow-md">

        {/* ===== Submenu 1 - Career ===== */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter('career')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:text-white transition-colors">
            Career
          </button>

          <div
            className={`absolute left-0 top-full mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg w-56 transition-all duration-200 ease-in-out ${
              openMenu === 'career' ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <ul className="py-2">
              <li>
                <Link href="/carreira/mentoria" className="block px-4 py-2 hover:bg-gray-800 hover:text-white transition-colors">
                  Front-end Developer
                </Link>
              </li>
              <li>
                <Link href="/carreira/projetos" className="block px-4 py-2 hover:bg-gray-800 hover:text-white transition-colors">
                  Back-end Developer
                </Link>
              </li>
              <li>
                <Link href="/carreira/fullstack" className="block px-4 py-2 hover:bg-gray-800 hover:text-white transition-colors">
                  Fullstack Developer
                </Link>
              </li>
              <li>
                <Link href="/carreira/devops" className="block px-4 py-2 hover:bg-gray-800 hover:text-white transition-colors">
                  DevOps
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== Other Links ===== */}
        <Link href="/" className="hover:text-white transition-colors">
          Community
        </Link>

        {/* ===== Submenu 2 - Plans ===== */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter('plans')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:text-white transition-colors">
            Plans
          </button>

          <div
            className={`absolute left-0 top-full mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg w-44 transition-all duration-200 ease-in-out ${
              openMenu === 'plans' ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <ul className="py-2">
              <li>
                <Link href="/planos/basic" className="block px-4 py-2 hover:bg-gray-800 hover:text-white transition-colors">
                  Basic
                </Link>
              </li>
              <li>
                <Link href="/planos/plus" className="block px-4 py-2 hover:bg-gray-800 hover:text-white transition-colors">
                  Plus
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link href="/" className="hover:text-white transition-colors">
          Contact
        </Link>
        <Link href="/" className="hover:text-white transition-colors">
          Login
        </Link>
      </nav>
    </header>
  )
}
