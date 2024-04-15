'use client'

import { useRef, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { newsletterSignUp } from '@/lib/shopify'
import { AirplaneIcon } from '@/components/icons'

export function NewsletterSignUp() {
  const { pending } = useFormStatus()
  const newsletterRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)

  console.log(pending)

  return (
    <form
      ref={newsletterRef}
      action={async (formData) => {
        await newsletterSignUp(formData)
        newsletterRef.current?.reset()
        setSubmitted(true)
      }}
      className="relative mt-5 z-0"
    >
      <input
        required
        name="email"
        type="email"
        autoComplete="off"
        className="block w-full h-[43px] rounded-md border border-divider p-6 pr-16 transition-colors duration-300 text-sm text-tertiary placeholder:text-sm focus:border-tertiary focus:ring-0 leading-6"
        placeholder="Your email"
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center px-6 hover:scale-125 transition-300 cursor-pointer"
        aria-label="Submit email"
      >
        <AirplaneIcon className="h-5 w-5 rotate-45" />
      </button>
    </form>
  )
}
