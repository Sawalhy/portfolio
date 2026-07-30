/** The Climbing & life mosaic. `shape` drives the tile's span and crop:
    wide = 4 columns at 16:10 · tall = 2 columns at 3:4 · square = 2 columns at 1:1
    · round = 2 columns clipped to a circle. Order is layout, so reordering re-tiles. */

export type Shape = 'wide' | 'tall' | 'square' | 'round'

export type Photo = {
  src: string
  alt: string
  title: string
  note: string
  shape: Shape
}

export const photos: readonly Photo[] = [
  {
    src: '/TannourineApproachDay.jpg',
    alt: 'Tannourine Approach',
    title: 'Tannourine Approach',
    note: 'Approaching the Gerges Massoud crag. The journey to the wall is (a scary) part of the adventure. Tannourine, Lebanon',
    shape: 'wide',
  },
  {
    src: '/TannourineDay.jpg',
    alt: 'Tannourine Steep Climb',
    title: 'Steep Climb',
    note: 'Resting between attempts. Tannourine, Lebanon',
    shape: 'tall',
  },
  {
    src: '/TannourineNight.jpg',
    alt: 'Tannourine Night Session',
    title: 'Night Session',
    note: 'Tannourine, Lebanon',
    shape: 'square',
  },
  {
    src: '/StCathrineBoulder.jpg',
    alt: 'St. Catherine Bouldering',
    title: 'St. Catherine',
    note: 'Scary barren slab climb. Egypt',
    shape: 'square',
  },
  {
    src: '/DahabEgypt.jpg',
    alt: 'Dahab',
    title: 'Dahab',
    note: 'My first 6C lead climb',
    shape: 'round',
  },
  {
    src: '/WadiDegla.jpg',
    alt: 'Wadi Degla',
    title: 'Wadi Degla',
    note: 'Explaining rockover to friends on their first time outdoors',
    shape: 'square',
  },
  {
    src: '/AscentComp.jpg',
    alt: 'Ascent Competition',
    title: 'Ascent Competition',
    note: 'Competing at Ascent climbing gym, Cairo',
    shape: 'square',
  },
]
