export interface Size {
  size: string
  available: boolean
}

export interface Fixing {
  number: number
  available: boolean
}

export interface Item {
  name: string
  'fixed-name'?: string
  type: string
  images: string[]
  gender: 'unisex' | 'home' | 'dona'
  brand: string
  colors: string[] | null
  sizes: Size[] | null
  fixings: Fixing[] | null
  'original-price': string
  'actual-price': string | null
}
