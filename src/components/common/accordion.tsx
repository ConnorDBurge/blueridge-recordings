'use client'

import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@/components/icons'

export function Accordion({
  children,
  header,
  disabled = false,
  className,
}: {
  children: React.ReactNode
  header: React.ReactNode
  disabled?: boolean
  className?: string
}) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)

  useEffect(() => {
    // When disabled changes, set the accordion to open if disabled, else reset to default closed state
    setAccordionOpen(disabled ? true : false)
  }, [disabled])

  return (
    <div className={className}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="group/acc flex w-full justify-between"
        disabled={disabled}
      >
        <div className={`transition-300 mr-1`}>{header}</div>
        {!disabled && (
          <ChevronDownIcon
            className={`transition-300 fill-primary ${accordionOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>
      <div
        className={`transition-500 overflow-hidden ${accordionOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        {children}
      </div>
    </div>
  )
}
