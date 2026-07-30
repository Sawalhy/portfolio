import { useEffect, useRef } from 'react'

/**
 * Publishes the pointer's position as `--px` / `--py` (-1 … 1) on the returned
 * element, which the backdrop blobs, hero frame and contact orb read to drift.
 * Pointer-only: touch devices and reduced-motion users get the static layout.
 */
export function usePointerParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      root.style.setProperty('--px', x.toFixed(3))
      root.style.setProperty('--py', y.toFixed(3))
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return ref
}
