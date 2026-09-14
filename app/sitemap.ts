import type { MetadataRoute } from 'next'
import { productCategories } from '@/lib/site-data'
import { productPath } from '@/lib/routes'
import { getPublishedArticles } from '@/lib/articles-db'
export const dynamic = 'force-dynamic'

const baseUrl = 'https://xiaofeielectronics.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getPublishedArticles('en')
  const staticRoutes = ['', '/about', '/products', '/solutions', '/manufacturing', '/quality', '/news', '/faq', '/contact']
  return [
    ...articles.map(article => ({ url: `${baseUrl}/news/${article.slug}`, lastModified: new Date(article.modified) })),
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...productCategories.map((product) => ({ url: `${baseUrl}${productPath(product.slug)}`, lastModified: new Date() }))
  ]
}
