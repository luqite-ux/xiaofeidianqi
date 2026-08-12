import { NextResponse } from 'next/server'
import { getSupabaseClient } from '@/lib/supabase'

function text(value: FormDataEntryValue | null) {
  return String(value ?? '').trim()
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const tenantId = process.env.NEXT_PUBLIC_TENANT_ID
  const supabase = getSupabaseClient()
  if (!tenantId || !supabase) {
    return NextResponse.json({ error: 'Inquiry service is not configured.' }, { status: 500 })
  }

  const name = text(formData.get('name'))
  const email = text(formData.get('email'))
  const message = text(formData.get('message'))
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
  }

  const productInterest = text(formData.get('productInterest'))
  const applianceType = text(formData.get('applianceType'))
  const estimatedQuantity = text(formData.get('estimatedQuantity'))
  const requirements = text(formData.get('requirements'))
  const subject = productInterest || 'XIAOFEIDIANQI control system inquiry'
  const composedMessage = [
    message,
    requirements && `Custom Requirements: ${requirements}`,
    applianceType && `Appliance Type: ${applianceType}`,
    estimatedQuantity && `Estimated Quantity: ${estimatedQuantity}`,
    text(formData.get('country')) && `Country / Region: ${text(formData.get('country'))}`,
  ].filter(Boolean).join('\n\n')

  const { error } = await supabase.from('inquiries').insert({
    tenant_id: tenantId,
    name,
    email,
    phone: text(formData.get('phone')),
    company: text(formData.get('company')),
    subject,
    message: composedMessage,
    status: 'unread',
  })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
