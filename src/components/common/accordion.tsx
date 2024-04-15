'use client'

import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@/components/icons'

export function Accordion({
  children,
  header,
  disabledOnDesktop = false,
  className,
}: {
  children: React.ReactNode
  header: React.ReactNode
  disabledOnDesktop?: boolean
  className?: string
}) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 768)

  useEffect(() => {
    const updateDesktopStatus = () => {
      const newIsDesktop = window.innerWidth > 768
      setIsDesktop(newIsDesktop)
      if (disabledOnDesktop && newIsDesktop) {
        setAccordionOpen(true)
      } else {
        setAccordionOpen(false)
      }
    }
    updateDesktopStatus()
    window.addEventListener('resize', updateDesktopStatus)
    return () => window.removeEventListener('resize', updateDesktopStatus)
  }, [])

  return (
    <div className={className}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex w-full justify-between items-center transition-300 ${disabledOnDesktop && isDesktop ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        disabled={disabledOnDesktop && isDesktop}
      >
        <div className="mr-1 transition-300">{header}</div>
        {!(disabledOnDesktop && isDesktop) && (
          <ChevronDownIcon
            className={`fill-current text-primary transition-300 transform ${accordionOpen && 'rotate-180'}`}
          />
        )}
      </button>
      <div
        className={`transition-300 overflow-hidden ${accordionOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        {children}
      </div>
    </div>
  )
}
