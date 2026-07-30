import { useEffect, useState } from 'react'

/**
 * Tracks which section owns the middle band of the viewport, so the rail can grow
 * that item's dash. Returns the id of the topmost visible section.
 */
export function useActiveSection(ids: readonly string[], initial = ids[0]) {
  const [active, setActive] = useState(initial)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length) {
          setActive(visible[0].target.id)
          return
        }
        // Nothing in the band — above the first section (i.e. in the hero), so fall
        // back to the first item rather than leaving the last one lit.
        const first = document.getElementById(ids[0])
        if (first && window.scrollY < first.offsetTop) setActive(ids[0])
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [ids])

  return active
}
