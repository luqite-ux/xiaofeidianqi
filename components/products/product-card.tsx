import Link from 'next/link'
import { productPath } from '@/lib/routes'
import type { ProductCategory } from '@/lib/site-data'

export function ProductCard({ product }: { product: ProductCategory }) {
  const Icon = product.icon
  return (
    <article className="rounded-3xl border border-line bg-white p-6 shadow-sm">
      <Icon className="h-10 w-10 text-brand-blue" />
      <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-brand-red">{product.eyebrow}</p>
      <h2 className="mt-3 text-2xl font-bold text-ink">{product.title.en}</h2>
      <p className="mt-3 leading-7 text-muted">{product.summary.en}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {product.applications.slice(0, 3).map((item) => (
          <span key={item} className="rounded-full bg-brand-ice px-3 py-1 text-xs font-bold text-brand-blue">{item}</span>
        ))}
      </div>
      <Link href={productPath(product.slug)} className="mt-6 inline-flex rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white">
        View Details
      </Link>
    </article>
  )
}
