export default function Hero({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  const handleScroll = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(244,114,182,0.18),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(210deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:140px_140px] opacity-40 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />

      {/* Orbital rings */}
      <div className="absolute w-[42rem] h-[42rem] rounded-full border border-white/5 animate-[spin_28s_linear_infinite] opacity-70" />
      <div className="absolute w-[30rem] h-[30rem] rounded-full border border-white/10 animate-[spin_18s_linear_reverse_infinite] blur-[1px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
            <span className="relative inline-block">
              <span className="relative z-2">
                <span className="text-accent">Pragmatic</span> Software Engineer
              </span>
              <div className="absolute bottom-1 left-0 right-0 h-1 bg-accent/40 blur-sm" />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-balance">
            Full Stack Software Engineer from Cairo, Egypt. Building scalable applications, solving complex problems, and pushing limits both in code and on the climbing wall.
          </p>

          <div className="flex items-center gap-6 justify-center pt-8">
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
    </section>
  )
}
