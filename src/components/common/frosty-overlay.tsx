export function FrostyOverlay() {
  return (
    <div
      className="inset-0 bg-primary/20 opacity-0 z-20 peer-has-[li[role='menu-dropdown']:hover]:fixed peer-has-[li[role='menu-dropdown']:hover]:opacity-100 peer-has-[li[role='menu-dropdown']:hover]:backdrop-blur-[1.5px] transition-300"
      aria-hidden="true"
    />
  )
}
