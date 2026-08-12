import { SectionShell } from '@/components/section-shell'
import { siteInfo } from '@/lib/site-data'

export default function AboutPage() {
  return (
    <SectionShell eyebrow="About Us" title="Focused on smart electronic control since 2002" text="Hangzhou Xiaofei Electrical Appliance Co., Ltd. is an innovative enterprise engaged in smart electronic product R&D, software development, production, and sales.">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-[2rem] border border-line bg-white p-8 leading-8 text-muted shadow-sm">
          <p>
            Since its establishment, XIAOFEIDIANQI has focused on electronic and intelligent control systems used across home appliance categories. Its control products are applied in steam ovens, ovens, combi cooking appliances, integrated stoves, disinfection cabinets, vacuum cleaners, range hoods, and related appliance platforms.
          </p>
          <p className="mt-5">
            The company combines hardware development, software functions, production capability, and practical project support for appliance manufacturers seeking stable control-system supply.
          </p>
        </div>
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-ice to-white p-8 shadow-glow">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">Company</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">{siteInfo.company}</h2>
          <p className="mt-5 leading-8 text-muted">{siteInfo.address}</p>
        </div>
      </div>
    </SectionShell>
  )
}
