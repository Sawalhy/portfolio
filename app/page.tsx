'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Gallery from '@/components/gallery'
import Experience from '@/components/experience'
import Contact from '@/components/contact'
import ProgressIndicator from '@/components/progress-indicator'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY
      const scrollPercent = scrolled / docHeight
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <ProgressIndicator scrollProgress={scrollProgress} />
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="ml-0 md:ml-64">
        <Hero setActiveSection={setActiveSection} />
        <div id="projects">
          <Projects />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  )
}
