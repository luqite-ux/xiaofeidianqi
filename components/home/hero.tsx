import Link from 'next/link'
import { Cpu, Sparkles, Zap } from 'lucide-react'
import { InquiryCta } from '@/components/inquiry-cta'
import { stats } from '@/lib/site-data'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <div className="absolute inset-0 circuit-bg opacity-70" />
      <div className="absolute -right-28 top-10 h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />
      <div className="absolute left-1/4 top-28 h-56 w-56 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-brand-blue/20 bg-white/80 px-4 py-2 text-sm font-bold text-brand-blue shadow-sm">
            OEM/ODM Electronic Control Solutions
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Smart Control Systems for Next-Generation Home Appliances
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            XIAOFEIDIANQI develops and manufactures electronic control systems for steam ovens, electric ovens, vacuum cleaners, disinfection cabinets, range hoods, and integrated appliance projects.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <InquiryCta />
            <Link href="/products" className="inline-flex min-h-12 items-center rounded-full border border-line bg-white px-6 text-sm font-bold text-ink transition hover:border-brand-blue hover:text-brand-blue">
              Explore Products
            </Link>
          </div>
        </div>
        <div className="relative min-h-[520px]">
          <div className="glass animate-flow absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white via-brand-ice to-white p-6">
            <div className="grid h-full grid-rows-[1fr_auto] gap-6">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-gradient-to-br from-[#f8fcff] via-[#eaf6ff] to-white">
                <div className="absolute inset-8 rounded-[2rem] border border-brand-blue/20" />
                <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-blue/30 bg-white shadow-glow">
                  <Cpu className="mx-auto mt-12 h-20 w-20 text-brand-blue" />
                </div>
                {[12, 28, 44, 60, 76].map((top, index) => (
                  <span key={top} className="absolute left-10 h-px w-[78%] bg-gradient-to-r from-transparent via-brand-blue/25 to-transparent" style={{ top: `${top}%` }} />
                ))}
                {[16, 36, 56, 76].map((left) => (
                  <span key={left} className="absolute top-10 h-[78%] w-px bg-gradient-to-b from-transparent via-brand-blue/20 to-transparent" style={{ left: `${left}%` }} />
                ))}
                <div className="float-slow absolute right-8 top-8 rounded-2xl bg-white p-4 shadow-glow">
                  <Zap className="h-6 w-6 text-brand-red" />
                  <p className="mt-2 text-sm font-bold">85-264V AC</p>
                </div>
                <div className="float-slow absolute bottom-8 left-8 rounded-2xl bg-white p-4 shadow-glow" style={{ animationDelay: '1.3s' }}>
                  <Sparkles className="h-6 w-6 text-brand-blue" />
                  <p className="mt-2 text-sm font-bold">Function Logic</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {stats.slice(0, 6).map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-line bg-white/90 p-4">
                    <p className="text-xl font-black text-ink">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
