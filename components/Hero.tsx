export default function Hero({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  const handleScroll = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-100" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl gradient-float" />
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" style={{ animation: 'float-gradient 8s ease-in-out infinite reverse' }} />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none opacity-100" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
            Building<br />
            <span className="relative">
              <span className="relative z-2">Reliability Through Maintainability</span>
              <div className="absolute bottom-2 left-0 right-0 h-1 bg-accent/40 blur-sm" />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-balance">
            Full Stack Software Engineer from Cairo, Egypt. Building scalable applications, solving complex problems, and pushing limits both in code and on the climbing wall.
          </p>

          <div className="flex gap-4 justify-center pt-8">
            <button
              onClick={() => handleScroll('projects')}
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View My Work
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator arrow - positioned relative to section */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
