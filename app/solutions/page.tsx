import { SectionShell } from '@/components/section-shell'
import { solutions } from '@/lib/site-data'

export const metadata = {
  title: 'Solutions | OEM/ODM Appliance Control Development',
  description: 'Application-focused electronic control development for kitchen appliances, cleaning appliances, disinfection cabinets, and OEM/ODM control projects.'
}

export default function SolutionsPage() {
  return (
    <SectionShell eyebrow="Solutions" title="Application-focused control development" text="XIAOFEIDIANQI supports appliance makers with control logic, hardware adaptation, software functions, and production coordination.">
      <div className="grid gap-6 md:grid-cols-2">
        {solutions.map((solution) => {
          const Icon = solution.icon
          return (
            <article key={solution.title} className="rounded-3xl border border-line bg-white p-7 shadow-sm">
              <Icon className="h-11 w-11 text-brand-blue" />
              <h2 className="mt-5 text-2xl font-bold text-ink">{solution.title}</h2>
              <p className="mt-3 leading-7 text-muted">{solution.text}</p>
            </article>
          )
        })}
      </div>
    </SectionShell>
  )
}
