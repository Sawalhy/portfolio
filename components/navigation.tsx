'use client'

import { useState } from 'react'
import Link from 'next/link'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ setActiveSection }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useState(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      <nav className="hidden md:fixed md:left-0 md:top-0 md:h-screen md:w-64 md:flex md:flex-col md:bg-card md:border-r md:border-border md:p-8 md:z-40">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-foreground">
            Sawalhy<span className="text-accent">.</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-2">Full Stack Developer</p>
        </div>

        <div className="space-y-6 flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left text-foreground hover:text-accent transition-colors duration-200 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="pt-8 border-t border-border space-y-4">
          <div className="text-xs text-muted-foreground space-y-2">
            <a href="https://github.com/Sawalhy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/sawalhyahmed" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.047-8.733 0-9.646h3.554v1.364c.427-.659 1.189-1.599 2.894-1.599 2.114 0 3.696 1.382 3.696 4.354v5.527zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.954.77-1.71 1.958-1.71 1.187 0 1.915.756 1.94 1.71 0 .951-.753 1.71-1.983 1.71zm1.581 11.019H3.757V9.806h3.161v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-card border-b border-border p-4 z-50 flex justify-between items-center">
        <h1 className="text-xl font-bold text-foreground">
          Sawalhy<span className="text-accent">.</span>
        </h1>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground hover:text-accent"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-card border-b border-border p-4 space-y-4 z-40">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
