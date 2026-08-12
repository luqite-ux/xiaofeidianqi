import { notFound } from 'next/navigation'
import { ProductDetail } from '@/components/products/product-detail'
import { productCategories } from '@/lib/site-data'

export function generateStaticParams() {
  return productCategories.map((product) => ({ slug: product.slug }))
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = productCategories.find((item) => item.slug === slug)
  if (!product) notFound()
  return <ProductDetail product={product} />
}
