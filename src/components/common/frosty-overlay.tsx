export function FrostyOverlay({ className }: { className?: string }) {
  return (
    <div
      className={`inset-0 bg-primary/20 opacity-0 z-20 transition-500 ${className}`}
      aria-hidden="true"
    />
  )
}
