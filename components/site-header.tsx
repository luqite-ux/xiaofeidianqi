import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { inquiryPath } from '@/lib/routes'
import { navItems, siteInfo } from '@/lib/site-data'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="XIAOFEIDIANQI Home">
          <Image src={siteInfo.logo} alt="XIAOFEIDIANQI logo" width={184} height={58} className="h-12 w-auto object-contain" priority />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={inquiryPath}
            className="hidden min-h-11 items-center rounded-full bg-brand-red px-5 text-sm font-bold text-white transition hover:bg-[#c90010] sm:inline-flex"
          >
            Request a Control Solution
          </Link>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink lg:hidden" aria-label="Open navigation">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
