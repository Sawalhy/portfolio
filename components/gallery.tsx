// Helper to get image path with base URL
const getImagePath = (path: string) => {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

const galleryImages = [
  { 
    id: 1, 
    title: 'Tannourine Approach', 
    category: 'Climbing', 
    image: '/TannourineApproachDay.jpg',
    description: 'Approaching the Gerges Massoud crag in Tannourine, Lebanon. The journey to the wall is (a scary) part of the adventure.',
    location: 'Tannourine, Lebanon'
  },
  { 
    id: 2, 
    title: 'Tannourine Steep Climb', 
    category: 'Climbing', 
    image: '/TannourineDay.jpg',
    description: 'Resting between attempts.',
    location: 'Tannourine, Lebanon'
  },
  { 
    id: 3, 
    title: 'Tannourine Night Session', 
    category: 'Climbing', 
    image: '/TannourineNight.jpg',
    description: 'Night climbing session in Tannourine.',
    location: 'Tannourine, Lebanon'
  },
  { 
    id: 4, 
    title: 'St. Catherine Bouldering', 
    category: 'Climbing', 
    image: '/StCathrineBoulder.jpg',
    description: 'Scary barren slab climb in St. Catherine, Egypt.',
    location: 'St. Catherine, Egypt'
  },
  { 
    id: 5, 
    title: 'Dahab', 
    category: 'Climbing', 
    image: '/DahabEgypt.jpg',
    description: 'My first 6C Lead Climb',
    location: 'Dahab, Egypt'
  },
  { 
    id: 6, 
    title: 'Wadi Degla', 
    category: 'Climbing', 
    image: '/WadiDegla.jpg',
    description: 'Explaining rockover to friends on their first time outdoors',
    location: 'Wadi Degla, Egypt'
  },
  { 
    id: 7, 
    title: 'Ascent Competition', 
    category: 'Climbing', 
    image: '/AscentComp.jpg',
    description: 'Competing at Ascent climbing gym in Cairo.',
    location: 'Ascent, Cairo, Egypt'
  },
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
                <img
                  src={getImagePath(img.image || "/placeholder.svg")}
                  alt={img.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-xs text-accent font-semibold uppercase tracking-wide mb-1">{img.category}</p>
                    <h3 className="text-lg font-bold text-foreground mb-2">{img.title}</h3>
                    {img.description && (
                      <p className="text-sm text-foreground/80 mb-2">{img.description}</p>
                    )}
                    {img.location && (
                      <div className="flex items-center gap-1.5 text-xs text-foreground/70">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{img.location}</span>
                      </div>
                    )}
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
