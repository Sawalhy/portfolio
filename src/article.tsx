import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ArticlePage from '@/components/ArticlePage'
import { getArticle } from '@/data/writing'
import './styles/base.css'
import './styles/article.css'

/** Shared entry for every writing page: each writing/<slug>/index.html carries
    its own `data-slug`, so adding a piece needs no new bundle. */
const mount = document.getElementById('root')!
const article = getArticle(mount.dataset.slug ?? '')

if (!article) {
  throw new Error(`Unknown article slug: ${mount.dataset.slug}`)
}

createRoot(mount).render(
  <StrictMode>
    <ArticlePage article={article} />
  </StrictMode>
)
