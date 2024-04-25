import { Showcase } from '@/components/common'
import Link from 'next/link'

export default function RootPage() {
  return (
    <div>
      <div className="flex flex-col gap-8 py-8 from-lavender to-white bg-gradient-to-t">
        <div className="lg:container">
          <Showcase>
            <Showcase.Image
              src="/pages/landing/girl-streaming.webp"
              alt="girl-streaming"
            />
            <Showcase.Body>
              <Showcase.Title>
                Elevate Your Voice. <br />
                Amplify Your Vision.
              </Showcase.Title>
              <p>
                At BlueRidge Recordings, every sound tells a story. Nestled in
                the heart of audio innovation, we provide passionate creators
                with the tools to produce pristine podcasts, capture compelling
                recordings, and stream in high fidelity.
              </p>
              <p>
                Our curated collection of kits, interfaces, and acoustic
                solutions is designed to elevate your audio projects from the
                studio to the world. Join us in our quest to bring quality and
                clarity to every beat, word, and harmony.
              </p>
              <Link href="/pages/about-us" className="primary button mt-3">
                About Us
              </Link>
            </Showcase.Body>
          </Showcase>
        </div>
      </div>
    </div>
  )
}
