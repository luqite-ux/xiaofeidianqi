import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { inquiryPath } from '@/lib/routes'

export function InquiryCta({ label = 'Request a Control Solution', className = '' }: { label?: string; className?: string }) {
  return (
    <Link
      href={inquiryPath}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-blue px-6 text-sm font-bold text-white shadow-glow transition hover:bg-[#004987] focus:outline-none focus:ring-4 focus:ring-brand-blue/20 ${className}`}
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}
