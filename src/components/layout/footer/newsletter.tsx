'use client'

import { Accordion } from '@/components/common'
import { AirplaneIcon } from '@/components/icons'

export default function NewsLetterSignUp({
  isDesktop,
}: {
  isDesktop: boolean
}) {
  return (
    <menu className="flex-grow-0 flex-shrink basis-[300px] mb-6 md:mb-0">
      <Accordion disabled={isDesktop} header={<h4>Newsletter</h4>}>
        <p className="font-light mt-5 text-tertiary">
          Sign up for exclusive offers, original stories, events and more.
        </p>
        <form
          className="relative mt-5 z-0"
          onSubmit={(event) => {
            event.preventDefault()
            console.log('Submitting email')
          }}
        >
          <input
            id="newsletter"
            name="newsletter"
            autoComplete="off"
            type="email"
            className="block w-full h-[43px] rounded-md border border-[#D0CFD4] p-6 pr-16 transition-colors duration-300 text-sm text-tertiary placeholder:text-sm focus:border-tertiary focus:ring-0 leading-6"
            placeholder="Your email"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center px-6"
            aria-label="Submit email"
          >
            <AirplaneIcon className="h-5 w-5 rotate-45 hover:scale-125 transition-300" />
          </button>
        </form>
      </Accordion>
    </menu>
  )
}
