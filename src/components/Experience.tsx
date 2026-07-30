import SectionHead, { Tags } from './SectionHead'
import { timeline } from '@/data/experience'

const dotClass = (marker?: 'current' | 'sage') =>
  marker ? `timeline__dot timeline__dot--${marker}` : 'timeline__dot'

export default function Experience() {
  return (
    <section className="section" id="experience" data-reveal="">
      <SectionHead title="Experience" />

      <div className="timeline">
        {timeline.map((entry) => (
          <div className="timeline__item" key={`${entry.role}-${entry.period}`} data-reveal="">
            <span className={dotClass(entry.marker)} aria-hidden="true" />
            <div className="timeline__period">{entry.period}</div>
            <h3 className="timeline__role">
              {entry.role}
              {entry.org && <span className="timeline__org"> {entry.org}</span>}
            </h3>
            {entry.school && <div className="timeline__org--sage">{entry.school}</div>}
            {entry.points && (
              <ul className="timeline__points">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            {entry.tags && <Tags items={entry.tags} variant="neutral" tight />}
          </div>
        ))}
      </div>
    </section>
  )
}
