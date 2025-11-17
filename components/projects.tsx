'use client'

import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Traffic Data Scraper',
    description: 'Built a traffic surrogate data pipeline on different cloud providers to programmatically collect live travel-time estimates from public map services. Produced a historical dataset and a Tableau dashboard that provided coverage for non-instrumented corridors and informed traffic models and operational decisions.',
    tags: ['Python', 'Cloud', 'Data Pipeline', 'Tableau'],
    image: '/modern-collaborative-workspace-interface.jpg',
    link: '#'
  },
  {
    id: 2,
    title: 'Price-Intel E-commerce Scraper',
    description: 'Web interface to track prices across multiple products and multiple retailers with scheduled runs that flags price changes automatically.',
    tags: ['Web Scraping', 'Node.js', 'React', 'Database'],
    image: '/climbing-route-tracking-app-interface.jpg',
    link: '#'
  },
  {
    id: 3,
    title: 'TimeSync – Multi-Timezone Tracker',
    description: 'Full-stack React/TypeScript + Express app that lets remote teams track 400+ timezones with real-time clocks, solar day/night timelines, JWT-secured user dashboards, and Neon/PostgreSQL persistence for a responsive, mobile-friendly experience.',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Neon'],
    image: '/enterprise-analytics-dashboard.jpg',
    link: '#'
  },
]

export default function Projects() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Selected <span className="text-accent">Work</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Here are some projects I've built that showcase my approach to solving problems with code.
        </p>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-accent transition-colors duration-300">
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4 text-sm md:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
