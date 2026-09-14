import Link from 'next/link'
import { getPublishedArticles } from '@/lib/articles-db'
export const dynamic = 'force-dynamic'
export const metadata = { title: 'News | XIAOFEIDIANQI Updates', description: 'Company updates and technical notes on appliance electronic control systems.', alternates: { canonical: 'https://xiaofeielectronics.com/news' } }
export default async function NewsPage() {
  const articles = await getPublishedArticles('en')
  return <section className="px-5 py-20 sm:px-8"><div className="mx-auto max-w-7xl">
    <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">News</p>
    <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Company updates and technical notes</h1>
    {articles.length ? <div className="mt-10 grid gap-6 md:grid-cols-3">{articles.map(article =>
      <Link href={`/news/${article.slug}`} key={article.slug} className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-sm">
        {article.image && <img src={article.image} alt={article.title} className="mb-5 aspect-[16/10] w-full object-cover" loading="lazy" />}
        <time dateTime={article.date} className="text-sm text-muted">{article.date.slice(0,10)}</time>
        <h2 className="mt-3 line-clamp-3 text-2xl font-semibold text-ink">{article.title}</h2>
        <p className="mt-4 line-clamp-4 leading-7 text-muted">{article.excerpt}</p>
        <span className="mt-auto pt-6 font-semibold text-brand-blue">Read article →</span>
      </Link>)}</div> : <p className="mt-10 text-muted">No published articles yet.</p>}
  </div></section>
}
