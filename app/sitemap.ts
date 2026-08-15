import type { MetadataRoute } from 'next'
import { productCategories } from '@/lib/site-data'
import { productPath } from '@/lib/routes'

const baseUrl = 'https://xiaofeielectronics.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/products', '/solutions', '/manufacturing', '/quality', '/news', '/faq', '/contact']
  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...productCategories.map((product) => ({ url: `${baseUrl}${productPath(product.slug)}`, lastModified: new Date() }))
  ]
}
