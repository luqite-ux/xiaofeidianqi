import { SectionShell } from '@/components/section-shell'
import { qualitySteps } from '@/lib/site-data'

export const metadata = {
  title: 'Quality & Testing | Appliance Control System Inspection',
  description: 'See the inspection and testing process used for appliance control-system projects, including parameter review, function testing, and outgoing checks.'
}

export default function QualityPage() {
  return (
    <SectionShell eyebrow="Quality & Testing" title="Inspection and testing for stable control-system output" text="Testing is organized around process checks, operating conditions, and agreed technical requirements for each appliance project.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {qualitySteps.map((step, index) => (
          <article key={step} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-sm font-black text-white">{index + 1}</span>
            <h2 className="mt-5 text-lg font-bold text-ink">{step}</h2>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
