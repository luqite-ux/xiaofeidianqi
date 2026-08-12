import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { siteInfo } from '@/lib/site-data'
import './globals.css'

export const metadata: Metadata = {
  title: 'XIAOFEIDIANQI | Smart Appliance Control System Manufacturer',
  description: 'Hangzhou Xiaofei Electrical Appliance Co., Ltd. develops and manufactures smart electronic control systems for steam ovens, ovens, vacuum cleaners, disinfection cabinets, range hoods, and OEM/ODM appliance projects.',
  icons: {
    icon: '/icon.png'
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
