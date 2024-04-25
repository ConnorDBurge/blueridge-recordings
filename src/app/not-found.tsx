import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-[500px] max-h-screen flex flex-col justify-center items-center gap-4 from-lavender to-white bg-gradient-to-t">
      <p className="font-bold text-[90px] text-[#A19FA9] leading-3 mb-4">404</p>
      <h1 className="font-[600] text-[30px]">Page not found</h1>
      <p>Sorry, the page you requested does not exist.</p>
      <Link href="/" className="primary button mt-7">
        Back to Home
      </Link>
    </div>
  )
}
