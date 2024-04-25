import Image from 'next/image'

export const Showcase = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div
    className={`flex flex-col lg:flex-row items-center lg:gap-16 gap-8 ${className}`}
  >
    {children}
  </div>
)

Showcase.Image = ({
  src,
  alt,
  width = 2000,
  height = 2000,
  className,
}: {
  src: string
  alt: string
  width?: number | `${number}`
  height?: number | `${number}`
  className?: string
}) => (
  <div className={`w-full lg:max-w-[50%] md:max-w-[70%] ${className}`}>
    <Image
      priority
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="md:rounded-md object-contain"
    />
  </div>
)

Showcase.Title = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => <h1 className={`sm:text-[35px] ${className}`}>{children}</h1>

Showcase.Body = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div
    className={`container md:px-0 lg:max-w-[50%] md:max-w-[70%] text-left flex flex-col gap-4 ${className}`}
  >
    {children}
  </div>
)
