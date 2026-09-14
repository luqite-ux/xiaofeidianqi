import { cache } from 'react'
import { getSupabaseClient } from './supabase'

function localized(value: unknown, locale: string, fallback: string, legacy: unknown): string {
  const fields = value && typeof value === 'object' ? value as Record<string, unknown> : {}
  return [fields[locale], fields[fallback], ...Object.values(fields), legacy].find((v): v is string => typeof v === 'string' && Boolean(v.trim())) || ''
}
export const getPublishedArticles = cache(async (locale = 'en') => {
  const client = getSupabaseClient()
  const tenantId = process.env.NEXT_PUBLIC_TENANT_ID
  if (!client || !tenantId) throw new Error('News database configuration is missing')
  const { data: tenant, error: tenantError } = await client.from('tenants').select('default_language').eq('id', tenantId).single()
  if (tenantError) throw new Error('Unable to read news language configuration')
  const rows: Record<string, unknown>[] = []
  for (let offset = 0; ; offset += 500) {
    const { data, error } = await client.from('articles').select('*').eq('tenant_id', tenantId).eq('is_published', true)
      .order('published_at', { ascending: false, nullsFirst: false }).order('id').range(offset, offset + 499)
    if (error) throw new Error('Unable to load published news')
    rows.push(...(data || []))
    if (!data || data.length < 500) break
  }
  return rows.map(row => ({
    slug: String(row.slug), title: localized(row.title_i18n, locale, tenant.default_language, row.title),
    excerpt: localized(row.excerpt_i18n, locale, tenant.default_language, row.excerpt),
    content: localized(row.content_i18n, locale, tenant.default_language, row.content),
    image: typeof row.featured_image === 'string' ? row.featured_image : '',
    date: String(row.published_at || row.created_at), modified: String(row.updated_at || row.published_at || row.created_at)
  }))
})
export async function getArticleBySlug(slug: string, locale = 'en') {
  return (await getPublishedArticles(locale)).find(article => article.slug === slug)
}
