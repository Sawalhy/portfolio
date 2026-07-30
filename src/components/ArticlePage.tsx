import Icon from './Icon'
import { articleHref, articles, type Article } from '@/data/writing'

/** Reader layout for one writing piece. Siblings are derived from the list order. */
export default function ArticlePage({ article }: { article: Article }) {
  const index = articles.findIndex((a) => a.slug === article.slug)
  const next = articles[index + 1]
  const previous = articles[index - 1]

  return (
    <div className="page">
      <div className="article__backdrop-blob article__backdrop-blob--one" aria-hidden="true" />
      <div className="article__backdrop-blob article__backdrop-blob--two" aria-hidden="true" />

      <article className="article">
        <a className="article__back" href={import.meta.env.BASE_URL}>
          <Icon name="arrow-left" />
          <span>Sawalhy.</span>
        </a>

        <div className="article__eyebrow">
          <span>Writing</span>
          <span className="article__eyebrow-rule" />
          <span>{article.category}</span>
        </div>

        <h1 className="article__title">{article.title}</h1>
        <p className="article__dek">{article.dek}</p>

        <div className="article__body">{article.body}</div>

        <div className="article__foot">
          {next ? (
            <a className="article__sibling" href={articleHref(next.slug)}>
              <span>Next piece</span>
              <Icon name="arrow-right" />
            </a>
          ) : previous ? (
            <a className="article__sibling" href={articleHref(previous.slug)}>
              <Icon name="arrow-left" />
              <span>Previous piece</span>
            </a>
          ) : (
            <span />
          )}
          <a className="btn btn-secondary" href={article.linkedin} target="_blank" rel="noopener">
            Originally on LinkedIn
          </a>
        </div>
      </article>
    </div>
  )
}
