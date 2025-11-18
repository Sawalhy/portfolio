import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Gallery from '@/components/Gallery'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import ProgressIndicator from '@/components/ProgressIndicator'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({
    home: 0,
    projects: 0,
    gallery: 0,
    experience: 0,
    contact: 0,
  })
  const [sectionPositions, setSectionPositions] = useState<Record<string, number>>({
    home: 0,
    projects: Infinity,  // Use Infinity so hasReached = false until positions calculated
    gallery: Infinity,
    experience: Infinity,
    contact: Infinity,
  })

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setScrollProgress(scrolled)

      // Calculate progress for each section
      const sections = ['home', 'projects', 'gallery', 'experience', 'contact']
      const viewportHeight = window.innerHeight
      const scrollY = window.scrollY

      const newSectionProgress: Record<string, number> = {}
      const newSectionPositions: Record<string, number> = {}

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const sectionTop = element.offsetTop
          const sectionHeight = element.offsetHeight
          
          // Calculate progress: (scrollY + viewportHeight - sectionTop) / (sectionHeight + viewportHeight)
          // This gives 0% when section hasn't been reached, 100% when fully scrolled past
          const scrollWithinSection = scrollY + viewportHeight - sectionTop
          const totalScrollable = sectionHeight + viewportHeight
          const progress = Math.min(100, Math.max(0, (scrollWithinSection / totalScrollable) * 100))

          newSectionProgress[sectionId] = progress
          
          // Calculate section position as percentage matching scrollProgress calculation
          const sectionPosition = windowHeight > 0 ? (sectionTop / windowHeight) * 100 : 0
          newSectionPositions[sectionId] = sectionPosition
        }
      })

      setSectionProgress(newSectionProgress)
      setSectionPositions(newSectionPositions)

      // Determine active section based on scroll position
      const viewportCenter = scrollY + viewportHeight / 2
      let newActiveSection = 'home'
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const sectionTop = element.offsetTop
          const sectionBottom = sectionTop + element.offsetHeight
          if (viewportCenter >= sectionTop && viewportCenter < sectionBottom) {
            newActiveSection = sectionId
            break
          }
        }
      }
      setActiveSection(newActiveSection)
    }

    window.addEventListener('scroll', handleScroll)
    
    // Call once on mount to set initial values
    handleScroll()
    
    // Enable transitions after initial render and scroll calculation
    // Double RAF ensures this happens after both layout and paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsInitialLoad(false)
      })
    })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <ProgressIndicator progress={scrollProgress} enableTransition={!isInitialLoad} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} scrollProgress={scrollProgress} sectionPositions={sectionPositions} enableTransition={!isInitialLoad} />
      <main className="ml-0 md:ml-72">
        <div id="home">
          <Hero setActiveSection={setActiveSection} />
        </div>
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

export default App
