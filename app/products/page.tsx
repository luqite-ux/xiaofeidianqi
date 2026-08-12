import { ProductCard } from '@/components/products/product-card'
import { SectionShell } from '@/components/section-shell'
import { productCategories } from '@/lib/site-data'

export default function ProductsPage() {
  return (
    <SectionShell eyebrow="Products" title="Smart appliance control system categories" text="Explore control-system categories designed for OEM/ODM appliance projects and technical inquiry workflows.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {productCategories.map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </SectionShell>
  )
}
