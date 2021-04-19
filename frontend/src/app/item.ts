interface Size {
  size: string
  available: boolean
}

interface Fixing {
  number: number
  available: boolean
}

export interface Item {
  name: string
  type: string
  images: string[]
  gender: string
  brand: string
  colors: string[] | null
  sizes: Size[] | null
  fixings: Fixing[] | null
  'original-price': string
  'actual-price': string | null
}
