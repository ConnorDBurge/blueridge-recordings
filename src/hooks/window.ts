import { useState, useEffect } from 'react'

// Define a type for the window size state
interface WindowSize {
  width: number | undefined
  height: number | undefined
}

// Hook that provides the current window size
export function useWindow(): WindowSize {
  // Initialize state with undefined width and height to support server-side rendering
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Only execute all this code if it's called on client-side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      const handleResize = () => {
        // Set window size
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      // Add event listener
      window.addEventListener('resize', handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [window.onresize])

  return windowSize
}
