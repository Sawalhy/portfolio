import Icon from './Icon'
import { asset, site } from '@/data/site'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div>
        <div className="badge">
          <span className="badge__dot" />
          <span>{site.availability}</span>
        </div>

        <h1 className="hero__title">
          {site.headline.map((line, i) => (
            <span key={line}>
              {line}
              {i < site.headline.length - 1 && <br />}
            </span>
          ))}
        </h1>

        <p className="hero__lede">{site.intro}</p>

        <div className="hero__actions">
          <a className="btn btn-primary hero__cta" href="#work">
            View my work
          </a>
          <a className="btn btn-secondary hero__cta" href="#contact">
            Get in touch
          </a>
        </div>

        <a className="hero__aside" href="#writing">
          <span>I also write about things that interest me</span>
          <Icon name="arrow-down" />
        </a>
      </div>

      <div className="hero__media">
        <div className="hero__frame">
          <img className="washed" src={asset(site.heroImage.src)} alt={site.heroImage.alt} />
        </div>
        <div className="hero__orb" aria-hidden="true" />
      </div>
    </section>
  )
}
