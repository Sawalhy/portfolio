'use client'

import { useState, useRef, useEffect } from 'react'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
  scrollProgress?: number
  sectionPositions?: Record<string, number>
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation({ activeSection, setActiveSection, scrollProgress = 0, sectionPositions = {} }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [trackStart, setTrackStart] = useState(0)
  const [trackHeight, setTrackHeight] = useState(0)

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  // Determine active section based on scroll position (not clicks)
  const currentSectionIndex = navItems.findLastIndex(item => scrollProgress >= (sectionPositions[item.id] || 0))
  const currentSection = currentSectionIndex >= 0 ? navItems[currentSectionIndex].id : navItems[0].id

  // Find highest reached section and calculate fill percentage
  const reachedIndex = navItems.findLastIndex(item => scrollProgress >= (sectionPositions[item.id] || 0))
  const fillPercent = scrollProgress >= 100 ? 100 : reachedIndex < 0 ? 0 : (() => {
    // Map each section to its position on the track (0% to 100%)
    const sectionPercent = (index: number) => (index / (navItems.length - 1)) * 100
    
    if (reachedIndex === navItems.length - 1) {
      // Last section reached, fill to 100%
      return 100
    }
    
    // Interpolate between current and next section
    const currentPos = sectionPositions[navItems[reachedIndex].id] || 0
    const nextPos = sectionPositions[navItems[reachedIndex + 1].id] || 100
    const range = nextPos - currentPos
    const progress = range > 0 ? Math.max(0, Math.min(1, (scrollProgress - currentPos) / range)) : 0
    
    const currentPercent = sectionPercent(reachedIndex)
    const nextPercent = sectionPercent(reachedIndex + 1)
    
    return currentPercent + (nextPercent - currentPercent) * progress
  })()

  const fillHeight = trackHeight > 0 ? (fillPercent / 100) * trackHeight : 0

  useEffect(() => {
    const measureTrack = () => {
      if (!containerRef.current || itemRefs.current.length === 0) return
      const first = itemRefs.current[0]
      const last = itemRefs.current[itemRefs.current.length - 1]
      if (!first || !last) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const firstRect = first.getBoundingClientRect()
      const lastRect = last.getBoundingClientRect()
      const circleRadius = firstRect.height / 2

      const start = firstRect.top - containerRect.top + circleRadius
      const end = lastRect.top - containerRect.top + circleRadius

      setTrackStart(start)
      setTrackHeight(Math.max(0, end - start))
    }

    measureTrack()
    window.addEventListener('resize', measureTrack)
    return () => window.removeEventListener('resize', measureTrack)
  }, [])

  return (
    <>
      <nav className="hidden md:fixed md:left-0 md:top-0 md:h-screen md:w-72 md:flex md:flex-col md:bg-card md:border-r md:border-border md:p-8 md:z-40 relative">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-foreground">Sawalhy<span className="text-accent">.</span></h1>
          <p className="text-sm text-muted-foreground mt-2">Full Stack Engineer</p>
        </div>

        <div className="flex-1 relative">
          <div ref={containerRef} className="space-y-6 relative">
            {trackHeight > 0 && (
              <div
                className="absolute left-0 w-1 bg-border/80 z-40"
                style={{ top: `${trackStart}px`, height: `${trackHeight}px` }}
              >
                <div
                  className="absolute left-0 top-0 w-full bg-accent transition-all duration-300 ease-out"
                  style={{ height: `${fillHeight}px` }}
                />
              </div>
            )}

            {navItems.map((item, index) => {
              const isActive = currentSection === item.id
              const hasReached = scrollProgress >= (sectionPositions[item.id] || 0)
              const circleStyle = isActive ? 'bg-accent border-accent' : hasReached ? 'bg-accent border-accent' : 'bg-background border-border'
              
              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  className="relative flex items-center"
                >
                  <div className="absolute left-0.5 -translate-x-1/2 z-50">
                    <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${circleStyle}`} />
                  </div>
                  <button onClick={() => handleNavClick(item.id)} className="block w-full text-left text-foreground hover:text-accent transition-colors duration-200 font-medium pl-5">
                    {item.label}
                  </button>
                </div>
              )
            })}
          </div>
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
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      <div className="md:hidden fixed top-0 left-0 right-0 bg-card border-b border-border p-4 z-50 flex justify-between items-center">
        <h1 className="text-xl font-bold text-foreground">Sawalhy<span className="text-accent">.</span></h1>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground hover:text-accent">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-card border-b border-border p-4 space-y-4 z-40">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNavClick(item.id)} className="block w-full text-left text-foreground hover:text-accent transition-colors py-2">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
