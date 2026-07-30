import Icon from './Icon'
import { asset, navItems, site } from '@/data/site'

/** The fixed left rail: identity, section nav, socials and the CV link.
    Below 1100px it reflows into a horizontal header (see app.css). */
export default function Rail({ active }: { active: string }) {
  return (
    <aside className="rail">
      <div>
        <a className="rail__brand" href="#top">
          {site.brand}
        </a>
        <div className="rail__role">{site.role}</div>
        <div className="rail__meta">{site.blurb}</div>
      </div>

      <nav className="rail__nav" aria-label="Sections">
        {navItems.map((item) => (
          <a key={item.id} className="rail__link" href={`#${item.id}`} aria-current={active === item.id}>
            <span className="rail__dash" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="rail__socials">
        <a
          className="btn btn-secondary btn-icon rail__social"
          href={site.github}
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        >
          <Icon name="github" size={17} />
        </a>
        <a
          className="btn btn-secondary btn-icon rail__social"
          href={site.linkedin}
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <Icon name="linkedin" size={17} />
        </a>
        <a className="btn btn-secondary btn-icon rail__social" href={`mailto:${site.email}`} aria-label="Email">
          <Icon name="mail" size={17} />
        </a>
      </div>

      <a className="btn btn-primary rail__cv" href={asset(site.cv)} target="_blank" rel="noopener">
        <Icon name="download" />
        <span>Download CV</span>
      </a>
    </aside>
  )
}
