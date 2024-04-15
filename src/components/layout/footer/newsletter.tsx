import { Accordion, NewsletterSignUp } from '@/components/common'

export default async function NewsLetterSignUp() {
  return (
    <Accordion
      disabledOnDesktop
      className="flex-grow-0 flex-shrink basis-[300px] mb-6 md:mb-0"
      header={<h4>Newsletter</h4>}
    >
      <p className="mt-5 text-tertiary">
        Sign up for exclusive offers, original stories, events and more.
      </p>
      <NewsletterSignUp />
    </Accordion>
  )
}
