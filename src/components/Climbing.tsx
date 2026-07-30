import SectionHead from './SectionHead'
import { photos } from '@/data/gallery'
import { asset } from '@/data/site'

export default function Climbing() {
  return (
    <section className="section" id="climbing" data-reveal="">
      <SectionHead
        title="Climbing & life"
        lede="When I'm not coding, you'll find me on the wall or exploring the outdoors."
      />

      <div className="gallery">
        {photos.map((photo) => (
          <figure key={photo.src} className={`gallery__figure gallery__figure--${photo.shape}`}>
            <img className="washed" src={asset(photo.src)} alt={photo.alt} loading="lazy" />
            <figcaption className="gallery__caption">
              <div className="gallery__title">{photo.title}</div>
              <div className="gallery__note">{photo.note}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
