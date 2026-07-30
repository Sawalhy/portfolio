import Backdrop from '@/components/Backdrop'
import Climbing from '@/components/Climbing'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Rail from '@/components/Rail'
import Work from '@/components/Work'
import Writing from '@/components/Writing'
import { navItems } from '@/data/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { usePointerParallax } from '@/hooks/usePointerParallax'
import { useReveal } from '@/hooks/useReveal'

const sectionIds = navItems.map((item) => item.id)

export default function App() {
  const rootRef = usePointerParallax<HTMLDivElement>()
  useReveal(rootRef)
  const active = useActiveSection(sectionIds)

  return (
    <div className="page shell" ref={rootRef}>
      <Backdrop />
      <Rail active={active} />

      <main className="main">
        <Hero />
        <Work />
        <Writing />
        <Experience />
        <Climbing />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
