'use client'

import { useState } from 'react'

const fields = ['Name', 'Company', 'Email', 'Phone / WhatsApp', 'Country / Region', 'Product Interest', 'Appliance Type', 'Estimated Quantity']

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      id="inquiry"
      className="rounded-[2rem] border border-line bg-white p-6 shadow-glow"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field} className="text-sm font-bold text-ink">
            {field}
            <input className="mt-2 min-h-12 w-full rounded-2xl border border-line bg-brand-ice px-4 text-ink outline-none focus:border-brand-blue" required={field === 'Name' || field === 'Email'} />
          </label>
        ))}
      </div>
      <label className="mt-4 block text-sm font-bold text-ink">
        Custom Requirements
        <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-line bg-brand-ice p-4 text-ink outline-none focus:border-brand-blue" />
      </label>
      <label className="mt-4 block rounded-2xl border border-dashed border-brand-blue/35 bg-brand-ice p-5 text-sm font-semibold text-muted">
        File upload placeholder for drawings, function lists, or appliance specifications
      </label>
      <button className="mt-6 min-h-12 rounded-full bg-brand-blue px-6 text-sm font-bold text-white" type="submit">
        Submit Inquiry
      </button>
      {submitted ? <p className="mt-4 rounded-2xl bg-[#e9f8ef] px-4 py-3 text-sm font-semibold text-[#176b3a]">Inquiry received in preview. Final delivery will connect this form to the real inquiry database.</p> : null}
    </form>
  )
}
