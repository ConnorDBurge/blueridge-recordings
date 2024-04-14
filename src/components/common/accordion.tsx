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
    setAccordionOpen(disabled ? true : false)
  }, [disabled])

  return (
    <div className={className}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex w-full justify-between transition-300 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        disabled={disabled}
      >
        <div className="mr-1 transition-300">{header}</div>
        {!disabled && (
          <ChevronDownIcon
            className={`fill-current text-primary transition-300 ${accordionOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>
      <div
        className={`transition-300 overflow-hidden ${accordionOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {children}
      </div>
    </div>
  )
}
