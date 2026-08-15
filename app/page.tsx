import { Hero } from '@/components/home/hero'
import { ManufacturingPreview } from '@/components/home/manufacturing-preview'
import { ProductMatrix } from '@/components/home/product-matrix'
import { QualityPreview } from '@/components/home/quality-preview'
import { Workflow } from '@/components/home/workflow'
import { InquiryCta } from '@/components/inquiry-cta'
import { SectionShell } from '@/components/section-shell'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionShell eyebrow="Product Systems" title="Electronic control solutions for intelligent appliances" text="Browse by appliance application and control-system function. Each category leads to project requirements and technical discussion.">
        <ProductMatrix />
      </SectionShell>
      <SectionShell eyebrow="OEM/ODM Workflow" title="From appliance requirements to production-ready control systems">
        <Workflow />
      </SectionShell>
      <SectionShell eyebrow="Manufacturing" title="Practical production capability behind each control board">
        <ManufacturingPreview />
      </SectionShell>
      <SectionShell eyebrow="Quality & Testing" title="Process-focused inspection for global B2B buyers">
        <QualityPreview />
      </SectionShell>
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-brand-blue via-[#1d83d4] to-brand-red p-10 text-white shadow-glow">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">Tell us your appliance type, expected functions, and production requirements.</h2>
          <p className="mt-4 max-w-2xl text-white/85">Our team can review the control logic, hardware requirements, and project scope for your next appliance platform.</p>
          <InquiryCta label="Start an Inquiry" variant="light" className="mt-8" />
        </div>
      </section>
    </>
  )
}
