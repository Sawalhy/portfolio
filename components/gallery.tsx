'use client'

import Image from 'next/image'

// Use basePath from Next.js config - in static export, this should be '/portfolio'
const basePath = '/portfolio'

const galleryImages = [
  { id: 1, title: 'Mountain Wall', category: 'Climbing', image: '/climber-on-mountain-face.jpg' },
  { id: 2, title: 'Sinai Summit', category: 'Adventure', image: '/sunset-mountain-landscape.jpg' },
  { id: 3, title: 'Development Setup', category: 'Life', image: '/developer-workspace-desk.jpg' },
  { id: 4, title: 'Boulder Challenge', category: 'Climbing', image: '/climber-on-boulder.jpg' },
  { id: 5, title: 'Desert Trails', category: 'Adventure', image: '/coastal-hiking-trail.jpg' },
  { id: 6, title: 'Code & Coffee', category: 'Life', image: '/coffee-laptop.png' },
]

export default function Gallery() {
  return (
    <section className="py-4 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Climbing & <span className="text-accent">Life</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          When I'm not coding, you'll find me on the wall or exploring the outdoors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {galleryImages.map((img, idx) => (
            <div
              key={img.id}
              className={`group overflow-hidden rounded-lg border border-border hover:border-accent transition-colors duration-300 cursor-pointer ${
                idx === 1 || idx === 3 || idx === 5 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden bg-muted h-80 md:h-96">
                <Image
                  src={`${basePath}${img.image || "/placeholder.svg"}`}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-xs text-accent font-semibold uppercase tracking-wide">{img.category}</p>
                    <h3 className="text-lg font-bold text-foreground">{img.title}</h3>
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
