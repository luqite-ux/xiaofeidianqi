import Link from 'next/link'
import { SectionShell } from '@/components/section-shell'
import { inquiryPath } from '@/lib/routes'

export const metadata = {
  title: 'News | XIAOFEIDIANQI Updates',
  description: 'Read future XIAOFEIDIANQI company updates, technical notes, and appliance control-system news after articles are published.'
}

export default function NewsPage() {
  return (
    <SectionShell
      eyebrow="News"
      title="Company updates and technical notes"
      text="Published articles will appear here after they are reviewed and released through the customer admin system."
    >
      <div className="rounded-[2rem] border border-line bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-ink">No published articles yet</h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted">
          The news area is prepared for future company updates, technical notes, and project information. For current product or control-system requirements, please send an inquiry to the XIAOFEIDIANQI team.
        </p>
        <Link href={inquiryPath} className="mt-6 inline-flex rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white">
          Send Project Requirements
        </Link>
      </div>
    </SectionShell>
  )
}
