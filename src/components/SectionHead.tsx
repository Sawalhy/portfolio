import type { ReactNode } from 'react'

/** Section title with the rule that runs out to the right edge. */
export default function SectionHead({ title, lede }: { title: string; lede?: ReactNode }) {
  return (
    <>
      <div className="section__head">
        <h2 className="section__title">{title}</h2>
        <span className="section__rule" />
      </div>
      {lede && <p className="section__lede">{lede}</p>}
    </>
  )
}

/** The smaller in-section heading ("Selected projects", "Also built"). */
export function SubHead({ title }: { title: string }) {
  return (
    <div className="subhead">
      <h3>{title}</h3>
      <span className="section__rule" />
    </div>
  )
}

/** Tag row shared by project cards, the feature panel and timeline entries. */
export function Tags({
  items,
  variant = 'accent',
  tight = false,
}: {
  items: readonly string[]
  variant?: 'accent' | 'accent-2' | 'neutral' | 'on-tint'
  tight?: boolean
}) {
  if (!items.length) return null
  return (
    <div className={tight ? 'tags tags--tight' : 'tags'}>
      {items.map((item) => (
        <span key={item} className={`tag tag-${variant}`}>
          {item}
        </span>
      ))}
    </div>
  )
}
