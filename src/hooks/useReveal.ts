import { useEffect } from 'react'

const HIDE_BELOW = 0.92 // only tag what starts below this fraction of the viewport

/**
 * Fades `[data-reveal]` elements in as they scroll into view.
 *
 * Elements render visible and are only hidden once this runs, so content never
 * depends on JavaScript to be readable: anything already on screen at mount is
 * left alone, and where IntersectionObserver or motion is unavailable nothing is
 * hidden in the first place.
 */
export function useReveal(root: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = root.current
    if (!el) return
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-reveal', 'in')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
    )

    for (const node of el.querySelectorAll<HTMLElement>('[data-reveal]')) {
      if (node.getBoundingClientRect().top < window.innerHeight * HIDE_BELOW) continue
      node.setAttribute('data-reveal', 'pending')
      observer.observe(node)
    }

    return () => observer.disconnect()
  }, [root])
}
