import Link from 'next/link'
import { notFound } from 'next/navigation'
import sanitizeHtml from 'sanitize-html'
import { getArticleBySlug } from '@/lib/articles-db'
import { siteInfo } from '@/lib/site-data'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
const base = 'https://xiaofeielectronics.com'
type Props = { params: Promise<{ slug: string }> }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const a = await getArticleBySlug(slug)
  if (!a) return {}
  const image = a.image || `${base}/images/logo.png`
  return { title: a.title, description: a.excerpt, alternates: { canonical: `${base}/news/${a.slug}` },
    openGraph: { type: 'article' as const, title: a.title, description: a.excerpt, url: `${base}/news/${a.slug}`, images: [image], publishedTime: a.date, modifiedTime: a.modified },
    twitter: { card: 'summary_large_image' as const, title: a.title, description: a.excerpt, images: [image] } }
}
export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const a = await getArticleBySlug(slug)
  if (!a) notFound()
  const html = sanitizeHtml(a.content, { transformTags: { h1: 'h2' }, allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img'], allowedAttributes: { ...sanitizeHtml.defaults.allowedAttributes, img: ['src','alt','width','height'], td:['colspan','rowspan'], th:['colspan','rowspan'] } })
  const schema = { '@context':'https://schema.org','@type':'Article','@id':`${base}/news/${slug}#article`,headline:a.title,description:a.excerpt,datePublished:a.date,dateModified:a.modified,mainEntityOfPage:`${base}/news/${slug}`,publisher:{'@type':'Organization',name:siteInfo.company,url:base},...(a.image ? {image:a.image}:{}) }
  return <article className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}} />
    <Link href="/news" className="font-semibold text-brand-blue">← News</Link>
    <h1 className="mt-6 break-words text-3xl font-semibold leading-tight text-ink sm:text-5xl">{a.title}</h1>
    <time className="mt-5 block text-sm text-muted" dateTime={a.date}>{a.date.slice(0,10)}</time>
    {a.image && <img src={a.image} alt={a.title} className="mt-8 max-h-[520px] w-full object-contain" />}
    <div className="article-prose mt-10" dangerouslySetInnerHTML={{__html:html}} />
  </article>
}
