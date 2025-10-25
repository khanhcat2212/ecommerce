export interface Product {
  id: string
  slug: string
  name: {
    en: string
    vi: string
  }
  description: {
    en: string
    vi: string
  }
  category: {
    id: string
    name: {
      en: string
      vi: string
    }
    slug: string
  }
  media: {
    images: string[]
    thumbnail: string
  }
  pricing: {
    currency: string
    original: number
    sale: number
    discountPercent: number
  }
  rating: {
    average: number
    reviewsCount: number
  }
  seo: {
    metaTitle: {
      en: string
      vi: string
    }
    metaDescription: {
      en: string
      vi: string
    }
  }
  createdAt: string
  updatedAt: string
}
