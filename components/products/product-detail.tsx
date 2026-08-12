import { InquiryCta } from '@/components/inquiry-cta'
import type { ProductCategory } from '@/lib/site-data'

export function ProductDetail({ product }: { product: ProductCategory }) {
  const Icon = product.icon
  return (
    <div className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <aside className="glass rounded-[2rem] p-8">
            <Icon className="h-14 w-14 text-brand-blue" />
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-brand-red">{product.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">{product.title.en}</h1>
            <p className="mt-5 leading-8 text-muted">{product.summary.en}</p>
            <InquiryCta label="Send Requirements" className="mt-8" />
          </aside>
          <div className="space-y-6">
            {[
              ['Applications', product.applications],
              ['Core Control Functions', product.functions],
              ['Hardware & Software Capabilities', product.capabilities],
              ['Technical Parameters', product.parameters || ['Project-specific parameters can be reviewed according to appliance requirements.']]
            ].map(([title, items]) => (
              <section key={title as string} className="rounded-3xl border border-line bg-white p-7">
                <h2 className="text-2xl font-bold text-ink">{title as string}</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {(items as string[]).map((item) => (
                    <p key={item} className="rounded-2xl bg-brand-ice px-4 py-3 text-sm font-semibold text-ink">{item}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
