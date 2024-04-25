'use client'

export function Button({
  onClick,
  children,
  className,
}: {
  href?: string
  onClick?: () => void
  children?: React.ReactNode
  className?: string
}) {
  return (
    <button onClick={onClick} className={`${className}`}>
      {children}
    </button>
  )
}
