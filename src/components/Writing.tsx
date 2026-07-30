import Icon from './Icon'
import SectionHead from './SectionHead'
import { articleHref, articles } from '@/data/writing'

export default function Writing() {
  return (
    <section className="section" id="writing" data-reveal="">
      <SectionHead
        title="Writing"
        lede="Short pieces on whatever I happen to be curious about. First published on LinkedIn, kept here in full."
      />

      <div className="writing-grid">
        {articles.map((article) => (
          <a
            key={article.slug}
            className={`writing-card${article.tone === 'accent-2' ? ' writing-card--sage' : ''}`}
            href={articleHref(article.slug)}
          >
            <span className="writing-card__kicker">{article.category}</span>
            <h3>{article.cardTitle}</h3>
            <p className="writing-card__body">{article.cardSummary}</p>
            <span className="writing-card__read">
              Read
              <Icon name="arrow-right" size={15} />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
