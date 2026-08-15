import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { inquiryPath } from '@/lib/routes'
import { navItems, siteInfo } from '@/lib/site-data'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="XIAOFEIDIANQI Home">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-line sm:h-14 sm:w-14">
            <Image src={siteInfo.logoMark} alt="" width={56} height={56} className="h-11 w-11 object-contain sm:h-12 sm:w-12" priority />
          </span>
          <span className="whitespace-nowrap text-base font-black tracking-normal text-ink sm:text-lg xl:text-[1.05rem]">{siteInfo.brand}</span>
        </Link>
        <nav className="hidden items-center gap-4 text-[0.84rem] font-semibold text-ink lg:flex xl:gap-5 xl:text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={inquiryPath}
            className="hidden min-h-11 items-center whitespace-nowrap rounded-full bg-brand-red px-5 text-sm font-bold text-white transition hover:bg-[#c90010] xl:inline-flex"
          >
            Request a Control Solution
          </Link>
          <details className="group relative lg:hidden">
            <summary className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-line bg-white text-ink [&::-webkit-details-marker]:hidden" aria-label="Open navigation">
              <Menu className="h-5 w-5" />
            </summary>
            <nav className="absolute right-0 top-14 grid w-64 gap-1 rounded-3xl border border-line bg-white p-3 text-sm font-semibold text-ink shadow-glow">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 hover:bg-brand-ice hover:text-brand-blue">
                  {item.label}
                </Link>
              ))}
              <Link href={inquiryPath} className="mt-2 rounded-2xl bg-brand-red px-4 py-3 text-center font-bold text-white">
                Request a Control Solution
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
